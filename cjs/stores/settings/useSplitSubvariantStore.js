"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSplitSubvariantStore = exports.useSplitSubvariantStoreContext = exports.useSplitSubvariantStore = exports.SplitSubvariantStoreProvider = exports.SplitSubvariantStoreContext = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const traditional_1 = require("zustand/traditional");
exports.SplitSubvariantStoreContext = (0, react_1.createContext)(null);
const shouldRecreateStore = (store, props) => {
    const { state } = store.getState();
    return state !== props.state;
};
function SplitSubvariantStoreProvider({ children, ...props }) {
    const storeRef = (0, react_1.useRef)();
    if (!storeRef.current || shouldRecreateStore(storeRef.current, props)) {
        storeRef.current = (0, exports.createSplitSubvariantStore)(props);
    }
    return ((0, jsx_runtime_1.jsx)(exports.SplitSubvariantStoreContext.Provider, { value: storeRef.current, children: children }));
}
exports.SplitSubvariantStoreProvider = SplitSubvariantStoreProvider;
function useSplitSubvariantStore(selector, equalityFn) {
    const useStore = (0, react_1.useContext)(exports.SplitSubvariantStoreContext);
    if (!useStore) {
        throw new Error(`You forgot to wrap your component in <${SplitSubvariantStoreProvider.name}>.`);
    }
    return useStore(selector, equalityFn);
}
exports.useSplitSubvariantStore = useSplitSubvariantStore;
function useSplitSubvariantStoreContext() {
    const useStore = (0, react_1.useContext)(exports.SplitSubvariantStoreContext);
    if (!useStore) {
        throw new Error(`You forgot to wrap your component in <${SplitSubvariantStoreProvider.name}>.`);
    }
    return useStore;
}
exports.useSplitSubvariantStoreContext = useSplitSubvariantStoreContext;
const createSplitSubvariantStore = ({ state }) => (0, traditional_1.createWithEqualityFn)((set) => ({
    state,
    setState(state) {
        set(() => ({
            state,
        }));
    },
}), Object.is);
exports.createSplitSubvariantStore = createSplitSubvariantStore;
