import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useRef } from 'react';
import { createRouteExecutionStore } from './createRouteExecutionStore';
export const RouteExecutionStoreContext = createContext(null);
export function RouteExecutionStoreProvider({ children, ...props }) {
    const storeRef = useRef();
    if (!storeRef.current) {
        storeRef.current = createRouteExecutionStore(props);
    }
    return (_jsx(RouteExecutionStoreContext.Provider, { value: storeRef.current, children: children }));
}
export function useRouteExecutionStore(selector, equalityFn) {
    const useStore = useContext(RouteExecutionStoreContext);
    if (!useStore) {
        throw new Error(`You forgot to wrap your component in <${RouteExecutionStoreProvider.name}>.`);
    }
    return useStore(selector, equalityFn);
}
export function useRouteExecutionStoreContext() {
    const useStore = useContext(RouteExecutionStoreContext);
    if (!useStore) {
        throw new Error(`You forgot to wrap your component in <${RouteExecutionStoreProvider.name}>.`);
    }
    return useStore;
}
