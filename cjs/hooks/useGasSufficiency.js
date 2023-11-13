"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGasSufficiency = void 0;
const react_query_1 = require("@tanstack/react-query");
const big_js_1 = require("big.js");
const _1 = require(".");
const providers_1 = require("../providers");
const stores_1 = require("../stores");
const refetchInterval = 30000;
const useGasSufficiency = (route) => {
    const { account } = (0, providers_1.useWallet)();
    const { getChainById } = (0, _1.useChains)();
    const getTokenBalancesWithRetry = (0, _1.useGetTokenBalancesWithRetry)(account.signer?.provider);
    const { sdkConfig } = (0, providers_1.useWidgetConfig)();
    const isMultisigSigner = sdkConfig?.multisigConfig?.isMultisigSigner;
    const { enabledAutoRefuel } = (0, stores_1.useSettings)(['enabledAutoRefuel']);
    const { enabled, isLoading: isRefuelLoading } = (0, _1.useGasRefuel)();
    const enabledRefuel = enabled && enabledAutoRefuel;
    const { data: insufficientGas, isInitialLoading } = (0, react_query_1.useQuery)(['gas-sufficiency-check', account.address, route?.id], async () => {
        if (!account.address || !route) {
            return;
        }
        // TODO: include LI.Fuel into calculation once steps and tools are properly typed
        // const refuelSteps = route.steps
        //   .flatMap((step) => step.includedSteps)
        //   .filter((includedStep) => includedStep.tool === 'lifuelProtocol');
        const gasCosts = route.steps
            .filter((step) => !step.execution || step.execution.status !== 'DONE')
            .reduce((groupedGasCosts, step) => {
            if (step.estimate.gasCosts && !isMultisigSigner) {
                const { token } = step.estimate.gasCosts[0];
                const gasCostAmount = step.estimate.gasCosts
                    .reduce((amount, gasCost) => amount.plus((0, big_js_1.default)(gasCost.amount || 0)), (0, big_js_1.default)(0))
                    .div(10 ** token.decimals);
                groupedGasCosts[token.chainId] = {
                    gasAmount: groupedGasCosts[token.chainId]?.gasAmount.plus(gasCostAmount) ?? gasCostAmount,
                    token,
                };
            }
            // Add fees paid in native tokens to gas sufficiency check (included: false)
            const nonIncludedFeeCosts = step.estimate.feeCosts?.filter((feeCost) => !feeCost.included);
            if (nonIncludedFeeCosts?.length) {
                const { token } = nonIncludedFeeCosts[0];
                const feeCostAmount = nonIncludedFeeCosts
                    .reduce((amount, feeCost) => amount.plus((0, big_js_1.default)(feeCost.amount || 0)), (0, big_js_1.default)(0))
                    .div(10 ** token.decimals);
                groupedGasCosts[token.chainId] = {
                    gasAmount: groupedGasCosts[token.chainId]?.gasAmount.plus(feeCostAmount) ?? feeCostAmount,
                    token,
                };
            }
            return groupedGasCosts;
        }, {});
        if (route.fromToken.address === gasCosts[route.fromChainId]?.token.address) {
            gasCosts[route.fromChainId].tokenAmount = gasCosts[route.fromChainId].gasAmount.plus((0, big_js_1.default)(route.fromAmount).div(10 ** route.fromToken.decimals));
        }
        const tokenBalances = await getTokenBalancesWithRetry(account.address, Object.values(gasCosts).map((item) => item.token));
        if (!tokenBalances?.length) {
            return;
        }
        [route.fromChainId, route.toChainId].forEach((chainId) => {
            if (gasCosts[chainId]) {
                const gasTokenBalance = (0, big_js_1.default)(tokenBalances?.find((t) => t.chainId === gasCosts[chainId].token.chainId &&
                    t.address === gasCosts[chainId].token.address)?.amount ?? 0);
                const insufficient = gasTokenBalance.lte(0) ||
                    gasTokenBalance.lt(gasCosts[chainId].gasAmount ?? (0, big_js_1.default)(0)) ||
                    gasTokenBalance.lt(gasCosts[chainId].tokenAmount ?? (0, big_js_1.default)(0));
                const insufficientAmount = insufficient
                    ? gasCosts[chainId].tokenAmount?.minus(gasTokenBalance) ??
                        gasCosts[chainId].gasAmount.minus(gasTokenBalance)
                    : undefined;
                gasCosts[chainId] = {
                    ...gasCosts[chainId],
                    insufficient,
                    insufficientAmount: insufficientAmount?.round(5, big_js_1.default.roundUp),
                    chain: insufficient ? getChainById(chainId) : undefined,
                };
            }
        });
        const gasCostResult = Object.values(gasCosts).filter((gasCost) => gasCost.insufficient);
        return gasCostResult;
    }, {
        enabled: Boolean(account.address && route),
        refetchInterval,
        staleTime: refetchInterval,
        cacheTime: refetchInterval,
    });
    const isInsufficientGas = Boolean(insufficientGas?.length) && !isRefuelLoading && !enabledRefuel;
    return {
        insufficientGas: isInsufficientGas ? insufficientGas : undefined,
        isInitialLoading,
    };
};
exports.useGasSufficiency = useGasSufficiency;
