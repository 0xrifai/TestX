export declare const useChains: () => {
    chains: import("@lifi/types").ExtendedChain[] | undefined;
    getChainById: (chainId: number) => import("@lifi/types").ExtendedChain | undefined;
    isLoading: boolean;
};
