import type { TokenAmount } from '../types';
export declare const useTokenSearch: (chainId?: number, tokenQuery?: string, enabled?: boolean) => {
    token: TokenAmount | undefined;
    isLoading: boolean;
};
