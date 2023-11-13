import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useLiFi } from '../providers';
export const useTokenSearch = (chainId, tokenQuery, enabled) => {
    const lifi = useLiFi();
    const queryClient = useQueryClient();
    const { data, isLoading } = useQuery(['token-search', chainId, tokenQuery], async ({ queryKey: [, chainId, tokenQuery], signal }) => {
        const token = await lifi.getToken(chainId, tokenQuery, {
            signal,
        });
        if (token) {
            queryClient.setQueriesData(['tokens'], (data) => {
                if (data &&
                    !data.tokens[chainId]?.some((t) => t.address === token.address)) {
                    const clonedData = { ...data };
                    clonedData.tokens[chainId]?.push(token);
                    return clonedData;
                }
            });
        }
        return token;
    }, {
        enabled: Boolean(chainId && tokenQuery && enabled),
        retry: false,
    });
    return {
        token: data,
        isLoading,
    };
};
