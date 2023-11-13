import type { ChainId } from '@lifi/sdk';
export declare const useGasRecommendation: (chainId: ChainId, fromChain?: ChainId, fromToken?: string) => import("@tanstack/react-query").UseQueryResult<import("@lifi/sdk").GasRecommendationResponse | null, unknown>;
