"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTokenSearch = void 0;
const react_query_1 = require("@tanstack/react-query");
const providers_1 = require("../providers");
const useTokenSearch = (chainId, tokenQuery, enabled) => {
    const lifi = (0, providers_1.useLiFi)();
    const queryClient = (0, react_query_1.useQueryClient)();
    const { data, isLoading } = (0, react_query_1.useQuery)(['token-search', chainId, tokenQuery], async ({ queryKey: [, chainId, tokenQuery], signal }) => {
        const token = await lifi.getToken(chainId, tokenQuery, {
            signal,
        });
        if (token) {
            queryClient.setQueriesData(['tokens'], (data) => {
                if (data &&
                    !data.tokens[chainId]?.some((t) => t.address === token.address)) {
                    const clonedData = { ...data };
                    clonedData.tokens[chainId]?.push(token);
                    return clonedData;
                }
            });
        }
        return token;
    }, {
        enabled: Boolean(chainId && tokenQuery && enabled),
        retry: false,
    });
    return {
        token: data,
        isLoading,
    };
};
exports.useTokenSearch = useTokenSearch;
