"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryClient = void 0;
const react_query_1 = require("@tanstack/react-query");
exports.queryClient = new react_query_1.QueryClient({
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
