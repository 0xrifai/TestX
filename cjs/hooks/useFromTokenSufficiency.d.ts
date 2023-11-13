import type { Route } from '@lifi/sdk';
export declare const useFromTokenSufficiency: (route?: Route) => {
    insufficientFromToken: boolean | undefined;
    isInitialLoading: boolean;
};
