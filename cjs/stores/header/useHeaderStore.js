"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHeaderStore = exports.useHeaderStoreContext = exports.useHeaderStore = exports.HeaderStoreProvider = exports.HeaderStoreContext = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const traditional_1 = require("zustand/traditional");
exports.HeaderStoreContext = (0, react_1.createContext)(null);
function HeaderStoreProvider({ children, ...props }) {
    const storeRef = (0, react_1.useRef)();
    if (!storeRef.current) {
        storeRef.current = (0, exports.createHeaderStore)(props);
    }
    return ((0, jsx_runtime_1.jsx)(exports.HeaderStoreContext.Provider, { value: storeRef.current, children: children }));
}
exports.HeaderStoreProvider = HeaderStoreProvider;
function useHeaderStore(selector, equalityFn) {
    const useStore = (0, react_1.useContext)(exports.HeaderStoreContext);
    if (!useStore) {
        throw new Error(`You forgot to wrap your component in <${HeaderStoreProvider.name}>.`);
    }
    return useStore(selector, equalityFn);
}
exports.useHeaderStore = useHeaderStore;
function useHeaderStoreContext() {
    const useStore = (0, react_1.useContext)(exports.HeaderStoreContext);
    if (!useStore) {
        throw new Error(`You forgot to wrap your component in <${HeaderStoreProvider.name}>.`);
    }
    return useStore;
}
exports.useHeaderStoreContext = useHeaderStoreContext;
const createHeaderStore = ({ namePrefix }) => (0, traditional_1.createWithEqualityFn)((set, get) => ({
    setAction: (element) => {
        set(() => ({
            element,
        }));
        return get().removeAction;
    },
    setTitle: (title) => {
        set(() => ({
            title,
        }));
        return get().removeTitle;
    },
    removeAction: () => {
        set(() => ({
            element: null,
        }));
    },
    removeTitle: () => {
        set(() => ({
            title: undefined,
        }));
    },
}), Object.is);
exports.createHeaderStore = createHeaderStore;
