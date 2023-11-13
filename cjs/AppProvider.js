"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRouter = exports.AppProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_query_1 = require("@tanstack/react-query");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const queryClient_1 = require("./config/queryClient");
const providers_1 = require("./providers");
const stores_1 = require("./stores");
const AppProvider = ({ children, config, }) => {
    return ((0, jsx_runtime_1.jsx)(react_query_1.QueryClientProvider, { client: queryClient_1.queryClient, children: (0, jsx_runtime_1.jsx)(stores_1.StoreProvider, { config: config, children: (0, jsx_runtime_1.jsx)(providers_1.WidgetProvider, { config: config, children: (0, jsx_runtime_1.jsx)(providers_1.SDKProvider, { children: (0, jsx_runtime_1.jsx)(providers_1.ThemeProvider, { children: (0, jsx_runtime_1.jsx)(providers_1.I18nProvider, { children: (0, jsx_runtime_1.jsx)(providers_1.WalletProvider, { children: (0, jsx_runtime_1.jsx)(providers_1.FormProvider, { children: (0, jsx_runtime_1.jsx)(exports.AppRouter, { children: children }) }) }) }) }) }) }) }) }));
};
exports.AppProvider = AppProvider;
const AppRouter = ({ children }) => {
    const { buildUrl } = (0, providers_1.useWidgetConfig)();
    const inRouterContext = (0, react_router_dom_1.useInRouterContext)();
    const Router = inRouterContext ? react_1.Fragment : react_router_dom_1.MemoryRouter;
    return ((0, jsx_runtime_1.jsxs)(Router, { children: [children, buildUrl ? (0, jsx_runtime_1.jsx)(providers_1.URLSearchParamsBuilder, {}) : null] }));
};
exports.AppRouter = AppRouter;
