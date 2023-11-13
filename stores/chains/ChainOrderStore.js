import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useRef } from 'react';
import { createChainOrderStore } from './createChainOrderStore';
export const ChainOrderStoreContext = createContext(null);
export function ChainOrderStoreProvider({ children, ...props }) {
    const storeRef = useRef();
    if (!storeRef.current) {
        storeRef.current = createChainOrderStore(props);
    }
    return (_jsx(ChainOrderStoreContext.Provider, { value: storeRef.current, children: children }));
}
export function useChainOrderStore(selector, equalityFn) {
    const useStore = useContext(ChainOrderStoreContext);
    if (!useStore) {
        throw new Error(`You forgot to wrap your component in <${ChainOrderStoreProvider.name}>.`);
    }
    return useStore(selector, equalityFn);
}
export function useChainOrderStoreContext() {
    const useStore = useContext(ChainOrderStoreContext);
    if (!useStore) {
        throw new Error(`You forgot to wrap your component in <${ChainOrderStoreProvider.name}>.`);
    }
    return useStore;
}
