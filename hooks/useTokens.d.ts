import type { TokenAmount } from '../types';
export declare const useTokens: (selectedChainId?: number) => {
    tokens: TokenAmount[];
    isLoading: boolean;
};
