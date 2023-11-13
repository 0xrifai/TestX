import type { Token, TokenAmount } from '@lifi/sdk';
export declare const useTokenBalance: (token?: Token, accountAddress?: string) => {
    token: TokenAmount | undefined;
    isLoading: boolean;
    refetch: <TPageData>(options?: (import("@tanstack/react-query").RefetchOptions & import("@tanstack/react-query").RefetchQueryFilters<TPageData>) | undefined) => Promise<import("@tanstack/react-query").QueryObserverResult<TokenAmount, unknown>>;
    refetchNewBalance: () => void;
    refetchAllBalances: () => void;
    getTokenBalancesWithRetry: (accountAddress: string, tokens: Token[], depth?: number) => Promise<TokenAmount[] | undefined>;
};
