"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRouteExecutionStoreContext = exports.useRouteExecutionStore = exports.RouteExecutionStoreProvider = exports.RouteExecutionStoreContext = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const createRouteExecutionStore_1 = require("./createRouteExecutionStore");
exports.RouteExecutionStoreContext = (0, react_1.createContext)(null);
function RouteExecutionStoreProvider({ children, ...props }) {
    const storeRef = (0, react_1.useRef)();
    if (!storeRef.current) {
        storeRef.current = (0, createRouteExecutionStore_1.createRouteExecutionStore)(props);
    }
    return ((0, jsx_runtime_1.jsx)(exports.RouteExecutionStoreContext.Provider, { value: storeRef.current, children: children }));
}
exports.RouteExecutionStoreProvider = RouteExecutionStoreProvider;
function useRouteExecutionStore(selector, equalityFn) {
    const useStore = (0, react_1.useContext)(exports.RouteExecutionStoreContext);
    if (!useStore) {
        throw new Error(`You forgot to wrap your component in <${RouteExecutionStoreProvider.name}>.`);
    }
    return useStore(selector, equalityFn);
}
exports.useRouteExecutionStore = useRouteExecutionStore;
function useRouteExecutionStoreContext() {
    const useStore = (0, react_1.useContext)(exports.RouteExecutionStoreContext);
    if (!useStore) {
        throw new Error(`You forgot to wrap your component in <${RouteExecutionStoreProvider.name}>.`);
    }
    return useStore;
}
exports.useRouteExecutionStoreContext = useRouteExecutionStoreContext;
