import type { Route, RoutesResponse } from '@lifi/sdk';
interface RoutesProps {
    insurableRoute?: Route;
}
export declare const useRoutes: ({ insurableRoute }?: RoutesProps) => {
    routes: Route[] | undefined;
    isLoading: boolean;
    isFetching: boolean;
    isFetched: boolean;
    dataUpdatedAt: number;
    refetchTime: number;
    refetch: <TPageData>(options?: (import("@tanstack/react-query").RefetchOptions & import("@tanstack/react-query").RefetchQueryFilters<TPageData>) | undefined) => Promise<import("@tanstack/react-query").QueryObserverResult<RoutesResponse, unknown>>;
};
export {};
