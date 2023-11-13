"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFromTokenSufficiency = void 0;
const react_query_1 = require("@tanstack/react-query");
const big_js_1 = require("big.js");
const react_hook_form_1 = require("react-hook-form");
const providers_1 = require("../providers");
const stores_1 = require("../stores");
const useGetTokenBalancesWithRetry_1 = require("./useGetTokenBalancesWithRetry");
const useTokenAddressBalance_1 = require("./useTokenAddressBalance");
const refetchInterval = 30000;
const useFromTokenSufficiency = (route) => {
    const { account } = (0, providers_1.useWallet)();
    const getTokenBalancesWithRetry = (0, useGetTokenBalancesWithRetry_1.useGetTokenBalancesWithRetry)(account.signer?.provider);
    const [fromChainId, fromTokenAddress, fromAmount] = (0, react_hook_form_1.useWatch)({
        name: [providers_1.FormKey.FromChain, providers_1.FormKey.FromToken, providers_1.FormKey.FromAmount],
    });
    let chainId = fromChainId;
    let tokenAddress = fromTokenAddress;
    if (route) {
        chainId = route.fromToken.chainId;
        tokenAddress = route.fromToken.address;
    }
    const { token, isLoading } = (0, useTokenAddressBalance_1.useTokenAddressBalance)(chainId, tokenAddress);
    const { data: insufficientFromToken, isInitialLoading } = (0, react_query_1.useQuery)([
        'from-token-sufficiency-check',
        account.address,
        chainId,
        tokenAddress,
        route?.id ?? fromAmount,
    ], async () => {
        if (!account.address || !token) {
            return;
        }
        let currentTokenBalance = (0, big_js_1.default)(token?.amount || 0);
        if (!route || (0, stores_1.isRouteDone)(route)) {
            const insufficientFunds = currentTokenBalance.lt((0, big_js_1.default)(fromAmount || 0));
            return insufficientFunds;
        }
        const currentAction = route.steps.filter((step) => !step.execution || step.execution.status !== 'DONE')[0]?.action;
        if (token.chainId === currentAction.fromToken.chainId &&
            token.address === currentAction.fromToken.address &&
            currentTokenBalance.gt(0)) {
            const insufficientFunds = (0, big_js_1.default)(route.fromAmount)
                .div(10 ** route.fromToken.decimals)
                .gt(currentTokenBalance);
            return insufficientFunds;
        }
        const tokenBalances = await getTokenBalancesWithRetry(account.address, [
            currentAction.fromToken,
        ]);
        currentTokenBalance = (0, big_js_1.default)(tokenBalances?.[0]?.amount || 0);
        const insufficientFunds = (0, big_js_1.default)(currentAction.fromAmount)
            .div(10 ** currentAction.fromToken.decimals)
            .gt(currentTokenBalance);
        return insufficientFunds;
    }, {
        enabled: Boolean(account.address && token && !isLoading),
        refetchInterval,
        staleTime: refetchInterval,
        cacheTime: refetchInterval,
        keepPreviousData: true,
    });
    return {
        insufficientFromToken,
        isInitialLoading,
    };
};
exports.useFromTokenSufficiency = useFromTokenSufficiency;
