import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { QueryClientProvider } from '@tanstack/react-query';
import { Fragment } from 'react';
import { MemoryRouter, useInRouterContext } from 'react-router-dom';
import { queryClient } from './config/queryClient';
import { FormProvider, I18nProvider, SDKProvider, ThemeProvider, URLSearchParamsBuilder, WalletProvider, WidgetProvider, useWidgetConfig, } from './providers';
import { StoreProvider } from './stores';
export const AppProvider = ({ children, config, }) => {
    return (_jsx(QueryClientProvider, { client: queryClient, children: _jsx(StoreProvider, { config: config, children: _jsx(WidgetProvider, { config: config, children: _jsx(SDKProvider, { children: _jsx(ThemeProvider, { children: _jsx(I18nProvider, { children: _jsx(WalletProvider, { children: _jsx(FormProvider, { children: _jsx(AppRouter, { children: children }) }) }) }) }) }) }) }) }));
};
export const AppRouter = ({ children }) => {
    const { buildUrl } = useWidgetConfig();
    const inRouterContext = useInRouterContext();
    const Router = inRouterContext ? Fragment : MemoryRouter;
    return (_jsxs(Router, { children: [children, buildUrl ? _jsx(URLSearchParamsBuilder, {}) : null] }));
};
