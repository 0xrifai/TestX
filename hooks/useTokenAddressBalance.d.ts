export declare const useTokenAddressBalance: (chainId?: number, tokenAddress?: string) => {
    token: import("..").TokenAmount | undefined;
    isLoading: boolean;
    refetch: <TPageData>(options?: (import("@tanstack/query-core").RefetchOptions & import("@tanstack/query-core").RefetchQueryFilters<TPageData>) | undefined) => Promise<import("@tanstack/query-core").QueryObserverResult<import("..").TokenAmount[], unknown>>;
};
