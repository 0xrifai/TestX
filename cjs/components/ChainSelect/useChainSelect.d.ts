import type { EVMChain } from '@lifi/sdk';
import type { FormType } from '../../providers';
export declare const useChainSelect: (formType: FormType) => {
    chainOrder: number[];
    chains: import("@lifi/sdk").ExtendedChain[] | undefined;
    getChains: () => EVMChain[];
    isLoading: boolean;
    setChainOrder: (chainId: number) => void;
    setCurrentChain: (chainId: number) => void;
};
