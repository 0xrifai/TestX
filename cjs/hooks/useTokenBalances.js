"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTokenBalances = void 0;
const react_query_1 = require("@tanstack/react-query");
const providers_1 = require("../providers");
const useFeaturedTokens_1 = require("./useFeaturedTokens");
const useTokens_1 = require("./useTokens");
const defaultRefetchInterval = 32000;
const useTokenBalances = (selectedChainId) => {
    const lifi = (0, providers_1.useLiFi)();
    const { account } = (0, providers_1.useWallet)();
    const featuredTokens = (0, useFeaturedTokens_1.useFeaturedTokens)(selectedChainId);
    const { tokens, isLoading } = (0, useTokens_1.useTokens)(selectedChainId);
    const isBalanceLoadingEnabled = Boolean(account.address) &&
        Boolean(tokens?.length) &&
        Boolean(selectedChainId);
    const { data: tokensWithBalance, isLoading: isBalanceLoading, refetch, } = (0, react_query_1.useQuery)(['token-balances', account.address, selectedChainId, tokens?.length], async ({ queryKey: [, accountAddress] }) => {
        const tokenBalances = await lifi.getTokenBalances(accountAddress, tokens);
        const featuredTokenAddresses = new Set(featuredTokens?.map((token) => token.address));
        const sortFn = (a, b) => parseFloat(b.amount ?? '0') * parseFloat(b.priceUSD ?? '0') -
            parseFloat(a.amount ?? '0') * parseFloat(a.priceUSD ?? '0');
        const formattedTokens = (tokenBalances.length === 0 ? tokens : tokenBalances);
        const result = [
            ...formattedTokens
                .filter((token) => token.amount !== '0' && featuredTokenAddresses.has(token.address))
                .sort(sortFn),
            ...formattedTokens.filter((token) => token.amount === '0' && featuredTokenAddresses.has(token.address)),
            ...formattedTokens
                .filter((token) => token.amount !== '0' &&
                !featuredTokenAddresses.has(token.address))
                .sort(sortFn),
            ...formattedTokens.filter((token) => token.amount === '0' && !featuredTokenAddresses.has(token.address)),
        ];
        return result;
    }, {
        enabled: isBalanceLoadingEnabled,
        refetchInterval: defaultRefetchInterval,
        staleTime: defaultRefetchInterval,
    });
    return {
        tokens,
        tokensWithBalance,
        featuredTokens,
        isLoading,
        isBalanceLoading: isBalanceLoading && isBalanceLoadingEnabled,
        refetch,
    };
};
exports.useTokenBalances = useTokenBalances;
