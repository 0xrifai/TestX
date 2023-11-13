"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createChainOrderStore = exports.maxChainToOrder = void 0;
const middleware_1 = require("zustand/middleware");
const traditional_1 = require("zustand/traditional");
exports.maxChainToOrder = 9;
const createChainOrderStore = ({ namePrefix }) => (0, traditional_1.createWithEqualityFn)((0, middleware_1.persist)((set, get) => ({
    chainOrder: [],
    availableChains: [],
    initializeChains: (chainIds) => {
        set((state) => {
            const chainOrder = state.chainOrder.filter((chainId) => chainIds.includes(chainId));
            const chainsToAdd = chainIds.filter((chainId) => !chainOrder.includes(chainId));
            if (chainOrder.length === exports.maxChainToOrder || !chainsToAdd.length) {
                return {
                    availableChains: chainIds,
                    chainOrder,
                };
            }
            const chainsToAddLength = exports.maxChainToOrder - chainOrder.length;
            for (let index = 0; index < chainsToAddLength; index++) {
                chainOrder.push(chainsToAdd[index]);
            }
            return {
                availableChains: chainIds,
                chainOrder,
            };
        });
        return get().chainOrder;
    },
    setChain: (chainId) => {
        const state = get();
        if (state.chainOrder.includes(chainId) ||
            !state.availableChains.includes(chainId)) {
            return;
        }
        set((state) => {
            const chainOrder = state.chainOrder.slice();
            chainOrder.unshift(chainId);
            if (chainOrder.length > exports.maxChainToOrder) {
                chainOrder.pop();
            }
            return {
                chainOrder,
            };
        });
    },
}), {
    name: `${namePrefix || 'li.fi'}-widget-chains-order`,
    version: 0,
    partialize: (state) => ({ chainOrder: state.chainOrder }),
}), Object.is);
exports.createChainOrderStore = createChainOrderStore;
