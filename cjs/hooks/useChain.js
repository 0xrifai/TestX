"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useChain = void 0;
const react_1 = require("react");
const useChains_1 = require("./useChains");
const useChain = (chainId) => {
    const { chains, isLoading } = (0, useChains_1.useChains)();
    const chain = (0, react_1.useMemo)(() => {
        const chain = chains?.find((chain) => chain.id === chainId);
        return chain;
    }, [chainId, chains]);
    return {
        chain,
        isLoading,
    };
};
exports.useChain = useChain;
