import { QueryClient } from '@tanstack/react-query';
export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            enabled: true,
            staleTime: 3600000,
            cacheTime: Infinity,
            refetchInterval: false,
            refetchIntervalInBackground: false,
            refetchOnWindowFocus: true,
            refetchOnReconnect: true,
            refetchOnMount: true,
            retryOnMount: true,
            // suspense: true,
            onError: (error) => {
                //
            },
        },
        mutations: {
            onError: (error) => {
                //
            },
        },
    },
});
