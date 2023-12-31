import { useQuery } from '@tanstack/react-query';
import { useLiFi, useWallet } from '../providers';
import { useFeaturedTokens } from './useFeaturedTokens';
import { useTokens } from './useTokens';
const defaultRefetchInterval = 32000;
export const useTokenBalances = (selectedChainId) => {
    const lifi = useLiFi();
    const { account } = useWallet();
    const featuredTokens = useFeaturedTokens(selectedChainId);
    const { tokens, isLoading } = useTokens(selectedChainId);
    const isBalanceLoadingEnabled = Boolean(account.address) &&
        Boolean(tokens?.length) &&
        Boolean(selectedChainId);
    const { data: tokensWithBalance, isLoading: isBalanceLoading, refetch, } = useQuery(['token-balances', account.address, selectedChainId, tokens?.length], async ({ queryKey: [, accountAddress] }) => {
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
