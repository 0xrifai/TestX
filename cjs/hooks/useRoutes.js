"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRoutes = void 0;
const address_1 = require("@ethersproject/address");
const sdk_1 = require("@lifi/sdk");
const react_query_1 = require("@tanstack/react-query");
const big_js_1 = require("big.js");
const react_hook_form_1 = require("react-hook-form");
const uuid_1 = require("uuid");
const _1 = require(".");
const providers_1 = require("../providers");
const stores_1 = require("../stores");
const useSwapOnly_1 = require("./useSwapOnly");
const refetchTime = 60000;
const useRoutes = ({ insurableRoute } = {}) => {
    const lifi = (0, providers_1.useLiFi)();
    const { subvariant, sdkConfig, insurance, contractTool } = (0, providers_1.useWidgetConfig)();
    const { account } = (0, providers_1.useWallet)();
    const queryClient = (0, react_query_1.useQueryClient)();
    const swapOnly = (0, useSwapOnly_1.useSwapOnly)();
    const { slippage, enabledBridges, enabledAutoRefuel, enabledExchanges, routePriority, } = (0, stores_1.useSettings)([
        'slippage',
        'routePriority',
        'enabledAutoRefuel',
        'enabledBridges',
        'enabledExchanges',
    ]);
    const [fromTokenAmount] = (0, _1.useDebouncedWatch)([providers_1.FormKey.FromAmount], 320);
    const [fromChainId, fromTokenAddress, toAddress, toTokenAmount, toChainId, toContractAddress, toContractCallData, toContractGasLimit, toTokenAddress,] = (0, react_hook_form_1.useWatch)({
        name: [
            providers_1.FormKey.FromChain,
            providers_1.FormKey.FromToken,
            providers_1.FormKey.ToAddress,
            providers_1.FormKey.ToAmount,
            providers_1.FormKey.ToChain,
            providers_1.FormKey.ToContractAddress,
            providers_1.FormKey.ToContractCallData,
            providers_1.FormKey.ToContractGasLimit,
            providers_1.FormKey.ToToken,
        ],
    });
    const { token: fromToken } = (0, _1.useToken)(fromChainId, fromTokenAddress);
    const { token: toToken } = (0, _1.useToken)(toChainId, toTokenAddress);
    const { enabled: enabledRefuel, fromAmount: gasRecommendationFromAmount } = (0, _1.useGasRefuel)();
    const hasAmount = (!isNaN(fromTokenAmount) && Number(fromTokenAmount) > 0) ||
        (!isNaN(toTokenAmount) && Number(toTokenAmount) > 0);
    const contractCallQuoteEnabled = subvariant === 'nft'
        ? Boolean(toContractAddress && toContractCallData && toContractGasLimit)
        : true;
    const isEnabled = !isNaN(fromChainId) &&
        !isNaN(toChainId) &&
        Boolean(fromToken?.address) &&
        Boolean(toToken?.address) &&
        !Number.isNaN(slippage) &&
        hasAmount &&
        contractCallQuoteEnabled;
    const queryKey = [
        'routes',
        account.address,
        fromChainId,
        fromToken?.address,
        fromTokenAmount,
        toAddress,
        toChainId,
        toToken?.address,
        toTokenAmount,
        toContractAddress,
        toContractCallData,
        toContractGasLimit,
        slippage,
        swapOnly ? [] : enabledBridges,
        enabledExchanges,
        routePriority,
        subvariant,
        sdkConfig?.defaultRouteOptions?.allowSwitchChain,
        enabledRefuel && enabledAutoRefuel,
        gasRecommendationFromAmount,
        insurance,
        insurableRoute?.id,
    ];
    const { data, isLoading, isFetching, isFetched, dataUpdatedAt, refetch } = (0, react_query_1.useQuery)(queryKey, async ({ queryKey: [_, fromAddress, fromChainId, fromTokenAddress, fromTokenAmount, toAddress, toChainId, toTokenAddress, toTokenAmount, toContractAddress, toContractCallData, toContractGasLimit, slippage, enabledBridges, enabledExchanges, routePriority, subvariant, allowSwitchChain, enabledRefuel, gasRecommendationFromAmount, insurance, insurableRouteId,], signal, }) => {
        let toWalletAddress;
        try {
            toWalletAddress =
                (await account.signer?.provider?.resolveName(toAddress)) ??
                    ((0, address_1.isAddress)(toAddress) ? toAddress : fromAddress);
        }
        catch {
            toWalletAddress = (0, address_1.isAddress)(toAddress) ? toAddress : fromAddress;
        }
        const fromAmount = (0, big_js_1.default)(fromTokenAmount || 0)
            .mul(10 ** (fromToken?.decimals ?? 0))
            .toFixed(0);
        const formattedSlippage = parseFloat(slippage) / 100;
        const allowedBridges = insurableRoute
            ? insurableRoute.steps.flatMap((step) => step.includedSteps
                .filter((includedStep) => includedStep.type === 'cross')
                .map((includedStep) => includedStep.toolDetails.key))
            : enabledBridges;
        const allowedExchanges = insurableRoute
            ? insurableRoute.steps.flatMap((step) => step.includedSteps
                .filter((includedStep) => includedStep.type === 'swap')
                .map((includedStep) => includedStep.toolDetails.key))
            : enabledExchanges;
        if (subvariant === 'nft') {
            const contractCallQuote = await lifi.getContractCallQuote({
                fromAddress,
                fromChain: fromChainId,
                fromToken: fromTokenAddress,
                toAmount: toTokenAmount,
                toChain: toChainId,
                toToken: toTokenAddress,
                toContractAddress,
                toContractCallData,
                toContractGasLimit,
                allowBridges: allowedBridges,
                toFallbackAddress: toWalletAddress,
                slippage: formattedSlippage,
            }, { signal });
            contractCallQuote.action.toToken = toToken;
            const customStep = subvariant === 'nft'
                ? contractCallQuote.includedSteps?.find((step) => step.type === 'custom')
                : undefined;
            if (customStep && contractTool) {
                const toolDetails = {
                    key: contractTool.name,
                    name: contractTool.name,
                    logoURI: contractTool.logoURI,
                };
                customStep.toolDetails = toolDetails;
                contractCallQuote.toolDetails = toolDetails;
            }
            const route = {
                id: (0, uuid_1.v4)(),
                fromChainId: contractCallQuote.action.fromChainId,
                fromAmountUSD: contractCallQuote.estimate.fromAmountUSD || '',
                fromAmount: contractCallQuote.action.fromAmount,
                fromToken: contractCallQuote.action.fromToken,
                fromAddress: contractCallQuote.action.fromAddress,
                toChainId: contractCallQuote.action.toChainId,
                toAmountUSD: contractCallQuote.estimate.toAmountUSD || '',
                toAmount: toTokenAmount,
                toAmountMin: toTokenAmount,
                toToken: toToken,
                toAddress: toWalletAddress,
                gasCostUSD: contractCallQuote.estimate.gasCosts?.[0].amountUSD,
                steps: [contractCallQuote],
                insurance: { state: 'NOT_INSURABLE', feeAmountUsd: '0' },
            };
            return { routes: [route] };
        }
        return lifi.getRoutes({
            fromChainId,
            fromAmount,
            fromTokenAddress,
            toChainId,
            toTokenAddress,
            fromAddress,
            toAddress: toWalletAddress,
            fromAmountForGas: enabledRefuel && gasRecommendationFromAmount
                ? gasRecommendationFromAmount
                : undefined,
            options: {
                slippage: formattedSlippage,
                bridges: {
                    allow: allowedBridges,
                },
                exchanges: {
                    allow: allowedExchanges,
                },
                order: routePriority,
                allowSwitchChain: subvariant === 'refuel' ? false : allowSwitchChain,
                insurance: insurance ? Boolean(insurableRoute) : undefined,
            },
        }, { signal });
    }, {
        enabled: isEnabled,
        staleTime: refetchTime,
        cacheTime: refetchTime,
        refetchInterval(data, query) {
            return Math.min(Math.abs(refetchTime - (Date.now() - query.state.dataUpdatedAt)), refetchTime);
        },
        retry(failureCount, error) {
            if (error?.code === sdk_1.LifiErrorCode.NotFound) {
                return false;
            }
            return true;
        },
        onSuccess(data) {
            if (data.routes[0]) {
                // Update local tokens cache to keep priceUSD in sync
                const { fromToken, toToken } = data.routes[0];
                [fromToken, toToken].forEach((token) => {
                    queryClient.setQueriesData(['token-balances', account.address, token.chainId], (data) => {
                        if (data) {
                            const clonedData = [...data];
                            const index = clonedData.findIndex((dataToken) => dataToken.address === token.address);
                            clonedData[index] = {
                                ...clonedData[index],
                                ...token,
                            };
                            return clonedData;
                        }
                    });
                });
            }
        },
    });
    return {
        routes: data?.routes,
        isLoading: isEnabled && isLoading,
        isFetching,
        isFetched,
        dataUpdatedAt,
        refetchTime,
        refetch,
    };
};
exports.useRoutes = useRoutes;
