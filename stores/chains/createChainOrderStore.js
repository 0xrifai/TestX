import { persist } from 'zustand/middleware';
import { createWithEqualityFn } from 'zustand/traditional';
export const maxChainToOrder = 9;
export const createChainOrderStore = ({ namePrefix }) => createWithEqualityFn(persist((set, get) => ({
    chainOrder: [],
    availableChains: [],
    initializeChains: (chainIds) => {
        set((state) => {
            const chainOrder = state.chainOrder.filter((chainId) => chainIds.includes(chainId));
            const chainsToAdd = chainIds.filter((chainId) => !chainOrder.includes(chainId));
            if (chainOrder.length === maxChainToOrder || !chainsToAdd.length) {
                return {
                    availableChains: chainIds,
                    chainOrder,
                };
            }
            const chainsToAddLength = maxChainToOrder - chainOrder.length;
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
            if (chainOrder.length > maxChainToOrder) {
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
