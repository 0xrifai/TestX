import type { TokenAmount } from '../types';
export declare const useTokenBalances: (selectedChainId?: number) => {
    tokens: TokenAmount[];
    tokensWithBalance: TokenAmount[] | undefined;
    featuredTokens: import("@lifi/types").StaticToken[] | undefined;
    isLoading: boolean;
    isBalanceLoading: boolean;
    refetch: <TPageData>(options?: (import("@tanstack/react-query").RefetchOptions & import("@tanstack/react-query").RefetchQueryFilters<TPageData>) | undefined) => Promise<import("@tanstack/react-query").QueryObserverResult<TokenAmount[], unknown>>;
};
