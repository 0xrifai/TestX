import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useCallback, useMemo } from 'react';
import { useWallet } from '../providers';
import { useGetTokenBalancesWithRetry } from './useGetTokenBalancesWithRetry';
const defaultRefetchInterval = 30000;
export const useTokenBalance = (token, accountAddress) => {
    const { account } = useWallet();
    const queryClient = useQueryClient();
    const walletAddress = accountAddress || account.address;
    const getTokenBalancesWithRetry = useGetTokenBalancesWithRetry(account.signer?.provider);
    const tokenBalanceQueryKey = useMemo(() => ['token-balance', walletAddress, token?.chainId, token?.address], [token?.address, token?.chainId, walletAddress]);
    const { data, isLoading, refetch } = useQuery(tokenBalanceQueryKey, async ({ queryKey: [, accountAddress] }) => {
        const cachedToken = queryClient
            .getQueryData([
            'token-balances',
            accountAddress,
            token.chainId,
        ])
            ?.find((t) => t.address === token.address);
        if (cachedToken) {
            return cachedToken;
        }
        const tokenBalances = await getTokenBalancesWithRetry(accountAddress, [token]);
        if (!tokenBalances?.length) {
            throw Error('Could not get tokens balance.');
        }
        const cachedTokenAmount = queryClient.getQueryData(tokenBalanceQueryKey);
        const tokenAmount = tokenBalances[0].amount;
        if (cachedTokenAmount?.amount !== tokenAmount) {
            queryClient.setQueryDefaults(tokenBalanceQueryKey, {
                refetchInterval: defaultRefetchInterval,
                staleTime: defaultRefetchInterval,
            });
        }
        queryClient.setQueriesData(['token-balances', accountAddress, token.chainId], (data) => {
            if (data) {
                const clonedData = [...data];
                const index = clonedData.findIndex((dataToken) => dataToken.address === token.address);
                clonedData[index] = {
                    ...clonedData[index],
                    amount: tokenAmount,
                };
                return clonedData;
            }
        });
        return {
            ...tokenBalances[0],
            amount: tokenAmount,
        };
    }, {
        enabled: Boolean(walletAddress && token),
        refetchInterval: defaultRefetchInterval,
        staleTime: defaultRefetchInterval,
    });
    const refetchAllBalances = () => {
        queryClient.refetchQueries(['token-balances', accountAddress, token?.chainId], { exact: false });
    };
    const refetchNewBalance = useCallback(() => {
        queryClient.setQueryDefaults(tokenBalanceQueryKey, {
            refetchInterval: 250,
            staleTime: 250,
        });
    }, [queryClient, tokenBalanceQueryKey]);
    return {
        token: data,
        isLoading,
        refetch,
        refetchNewBalance,
        refetchAllBalances,
        getTokenBalancesWithRetry,
    };
};
