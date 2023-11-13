"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGasRecommendation = void 0;
const react_query_1 = require("@tanstack/react-query");
const providers_1 = require("../providers");
const useChains_1 = require("./useChains");
const refetchInterval = 60000;
const useGasRecommendation = (chainId, fromChain, fromToken) => {
    const lifi = (0, providers_1.useLiFi)();
    const { chains } = (0, useChains_1.useChains)();
    return (0, react_query_1.useQuery)(['gas-recommendation', chainId, fromChain, fromToken], async ({ queryKey: [_, chainId, fromChain, fromToken] }) => {
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
exports.useGasRecommendation = useGasRecommendation;
