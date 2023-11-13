"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTokenBalance = void 0;
const react_query_1 = require("@tanstack/react-query");
const react_1 = require("react");
const providers_1 = require("../providers");
const useGetTokenBalancesWithRetry_1 = require("./useGetTokenBalancesWithRetry");
const defaultRefetchInterval = 30000;
const useTokenBalance = (token, accountAddress) => {
    const { account } = (0, providers_1.useWallet)();
    const queryClient = (0, react_query_1.useQueryClient)();
    const walletAddress = accountAddress || account.address;
    const getTokenBalancesWithRetry = (0, useGetTokenBalancesWithRetry_1.useGetTokenBalancesWithRetry)(account.signer?.provider);
    const tokenBalanceQueryKey = (0, react_1.useMemo)(() => ['token-balance', walletAddress, token?.chainId, token?.address], [token?.address, token?.chainId, walletAddress]);
    const { data, isLoading, refetch } = (0, react_query_1.useQuery)(tokenBalanceQueryKey, async ({ queryKey: [, accountAddress] }) => {
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
    const refetchNewBalance = (0, react_1.useCallback)(() => {
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
exports.useTokenBalance = useTokenBalance;
