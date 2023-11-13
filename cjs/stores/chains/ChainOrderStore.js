"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useChainOrderStoreContext = exports.useChainOrderStore = exports.ChainOrderStoreProvider = exports.ChainOrderStoreContext = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const createChainOrderStore_1 = require("./createChainOrderStore");
exports.ChainOrderStoreContext = (0, react_1.createContext)(null);
function ChainOrderStoreProvider({ children, ...props }) {
    const storeRef = (0, react_1.useRef)();
    if (!storeRef.current) {
        storeRef.current = (0, createChainOrderStore_1.createChainOrderStore)(props);
    }
    return ((0, jsx_runtime_1.jsx)(exports.ChainOrderStoreContext.Provider, { value: storeRef.current, children: children }));
}
exports.ChainOrderStoreProvider = ChainOrderStoreProvider;
function useChainOrderStore(selector, equalityFn) {
    const useStore = (0, react_1.useContext)(exports.ChainOrderStoreContext);
    if (!useStore) {
        throw new Error(`You forgot to wrap your component in <${ChainOrderStoreProvider.name}>.`);
    }
    return useStore(selector, equalityFn);
}
exports.useChainOrderStore = useChainOrderStore;
function useChainOrderStoreContext() {
    const useStore = (0, react_1.useContext)(exports.ChainOrderStoreContext);
    if (!useStore) {
        throw new Error(`You forgot to wrap your component in <${ChainOrderStoreProvider.name}>.`);
    }
    return useStore;
}
exports.useChainOrderStoreContext = useChainOrderStoreContext;
