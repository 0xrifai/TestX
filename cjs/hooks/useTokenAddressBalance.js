"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTokenAddressBalance = void 0;
const react_1 = require("react");
const useTokenBalances_1 = require("./useTokenBalances");
const useTokenAddressBalance = (chainId, tokenAddress) => {
    const { tokens, tokensWithBalance, isBalanceLoading, refetch } = (0, useTokenBalances_1.useTokenBalances)(chainId);
    const token = (0, react_1.useMemo)(() => {
        if (tokenAddress && chainId) {
            const token = (tokensWithBalance ?? tokens)?.find((token) => token.address === tokenAddress && token.chainId === chainId);
            return token;
        }
    }, [chainId, tokenAddress, tokens, tokensWithBalance]);
    return {
        token,
        isLoading: isBalanceLoading,
        refetch,
    };
};
exports.useTokenAddressBalance = useTokenAddressBalance;
