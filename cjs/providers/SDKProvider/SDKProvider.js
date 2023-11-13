"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDKProvider = exports.useLiFi = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const sdk_1 = require("@lifi/sdk");
const react_1 = require("react");
const version_1 = require("../../config/version");
const WidgetProvider_1 = require("../WidgetProvider");
let lifi;
const SDKContext = (0, react_1.createContext)(null);
const useLiFi = () => (0, react_1.useContext)(SDKContext);
exports.useLiFi = useLiFi;
const SDKProvider = ({ children, }) => {
    const { sdkConfig, integrator, apiKey, fee, referrer, routePriority, slippage, } = (0, WidgetProvider_1.useWidgetConfig)();
    const value = (0, react_1.useMemo)(() => {
        const config = {
            ...sdkConfig,
            apiKey,
            integrator: integrator ?? window.location.hostname,
            defaultRouteOptions: {
                integrator: integrator ?? window.location.hostname,
                fee,
                referrer,
                order: routePriority,
                slippage,
                ...sdkConfig?.defaultRouteOptions,
            },
        };
        if (!lifi) {
            lifi = new sdk_1.LiFi({
                disableVersionCheck: true,
                widgetVersion: version_1.version,
                ...config,
            });
        }
        lifi.setConfig(config);
        return lifi;
    }, [apiKey, fee, integrator, referrer, routePriority, sdkConfig, slippage]);
    return (0, jsx_runtime_1.jsx)(SDKContext.Provider, { value: value, children: children });
};
exports.SDKProvider = SDKProvider;
