"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useToken = void 0;
const react_1 = require("react");
const useTokens_1 = require("./useTokens");
const useTokenSearch_1 = require("./useTokenSearch");
const useToken = (chainId, tokenAddress) => {
    const { tokens, isLoading } = (0, useTokens_1.useTokens)(chainId);
    const token = (0, react_1.useMemo)(() => {
        const token = tokens?.find((token) => token.address === tokenAddress && token.chainId === chainId);
        return token;
    }, [chainId, tokenAddress, tokens]);
    const tokenSearchEnabled = !isLoading && !token;
    const { token: searchedToken, isLoading: isSearchedTokenLoading } = (0, useTokenSearch_1.useTokenSearch)(chainId, tokenAddress, tokenSearchEnabled);
    return {
        token: token ?? searchedToken,
        isLoading: isLoading || (tokenSearchEnabled && isSearchedTokenLoading),
    };
};
exports.useToken = useToken;
