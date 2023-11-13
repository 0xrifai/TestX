"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetProvider = exports.useWidgetConfig = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const sdk_1 = require("@lifi/sdk");
const react_1 = require("react");
const stores_1 = require("../../stores");
const utils_1 = require("../../utils");
const initialContext = {
    elementId: '',
    integrator: '',
};
const WidgetContext = (0, react_1.createContext)(initialContext);
const useWidgetConfig = () => (0, react_1.useContext)(WidgetContext);
exports.useWidgetConfig = useWidgetConfig;
const WidgetProvider = ({ children, config: { fromChain, fromToken, toChain, toToken, fromAmount, integrator, ...config } = {}, }) => {
    const elementId = (0, react_1.useId)();
    if (!integrator) {
        throw Error('Required property "integrator" is missing.');
    }
    const value = (0, react_1.useMemo)(() => {
        try {
            const searchParams = Object.fromEntries(new URLSearchParams(window?.location.search));
            // Prevent using fromToken/toToken params if chain is not selected
            ['from', 'to'].forEach((key) => {
                if (searchParams[`${key}Token`] && !searchParams[`${key}Chain`]) {
                    delete searchParams[`${key}Token`];
                }
            });
            const value = {
                ...config,
                fromChain: (searchParams.fromChain &&
                    isNaN(parseInt(searchParams.fromChain, 10))) ||
                    typeof fromChain === 'string'
                    ? (0, sdk_1.getChainByKey)((searchParams.fromChain || fromChain)?.toLowerCase())?.id
                    : (searchParams.fromChain &&
                        !isNaN(parseInt(searchParams.fromChain, 10))) ||
                        typeof fromChain === 'number'
                        ? parseInt(searchParams.fromChain, 10) || fromChain
                        : undefined,
                toChain: (searchParams.toChain && isNaN(parseInt(searchParams.toChain, 10))) ||
                    typeof toChain === 'string'
                    ? (0, sdk_1.getChainByKey)((searchParams.toChain || toChain)?.toLowerCase())?.id
                    : (searchParams.toChain &&
                        !isNaN(parseInt(searchParams.toChain, 10))) ||
                        typeof toChain === 'number'
                        ? parseInt(searchParams.toChain, 10) || toChain
                        : undefined,
                fromToken: searchParams.fromToken?.toLowerCase() || fromToken?.toLowerCase(),
                toToken: searchParams.toToken?.toLowerCase() || toToken?.toLowerCase(),
                fromAmount: typeof searchParams.fromAmount === 'string' &&
                    !isNaN(parseFloat(searchParams.fromAmount))
                    ? (0, utils_1.formatInputAmount)(searchParams.fromAmount)
                    : fromAmount,
                elementId,
                integrator,
            };
            (0, stores_1.setDefaultSettings)(value);
            return value;
        }
        catch (e) {
            console.warn(e);
            return { ...config, elementId, integrator };
        }
    }, [
        config,
        elementId,
        fromAmount,
        fromChain,
        fromToken,
        integrator,
        toChain,
        toToken,
    ]);
    return ((0, jsx_runtime_1.jsx)(WidgetContext.Provider, { value: value, children: children }));
};
exports.WidgetProvider = WidgetProvider;
