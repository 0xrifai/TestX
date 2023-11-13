import { useQuery } from '@tanstack/react-query';
import { useLiFi } from '../providers';
import { useChains } from './useChains';
const refetchInterval = 60000;
export const useGasRecommendation = (chainId, fromChain, fromToken) => {
    const lifi = useLiFi();
    const { chains } = useChains();
    return useQuery(['gas-recommendation', chainId, fromChain, fromToken], async ({ queryKey: [_, chainId, fromChain, fromToken] }) => {
        if (!chains?.some((chain) => chain.id === chainId)) {
            return null;
        }
        const gasRecommendation = await lifi.getGasRecommendation({
            chainId: chainId,
            fromChain: fromChain,
            fromToken: fromToken,
        });
        return gasRecommendation;
    }, {
        enabled: Boolean(chainId),
        refetchInterval,
        staleTime: refetchInterval,
        cacheTime: refetchInterval,
    });
};
