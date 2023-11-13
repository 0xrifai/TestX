"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetTokenBalancesWithRetry = void 0;
const address_1 = require("@ethersproject/address");
const react_1 = require("react");
const providers_1 = require("../providers");
const useGetTokenBalancesWithRetry = (provider) => {
    const lifi = (0, providers_1.useLiFi)();
    const getTokenBalancesWithRetry = (0, react_1.useCallback)(async (accountAddress, tokens, depth = 0) => {
        try {
            const walletAddress = (0, address_1.isAddress)(accountAddress)
                ? accountAddress
                : await provider?.resolveName(accountAddress);
            const tokenBalances = await lifi.getTokenBalances(walletAddress, tokens);
            if (!tokenBalances.every((token) => token.blockNumber)) {
                if (depth > 10) {
                    console.warn('Token balance backoff depth exceeded.');
                    return undefined;
                }
                await new Promise((resolve) => {
                    setTimeout(resolve, 1.5 ** depth * 100);
                });
                return getTokenBalancesWithRetry(accountAddress, tokens, depth + 1);
            }
            return tokenBalances;
        }
        catch (error) {
            //
        }
    }, [lifi, provider]);
    return getTokenBalancesWithRetry;
};
exports.useGetTokenBalancesWithRetry = useGetTokenBalancesWithRetry;
