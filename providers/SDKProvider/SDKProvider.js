import { jsx as _jsx } from "react/jsx-runtime";
import { LiFi } from '@lifi/sdk';
import { createContext, useContext, useMemo } from 'react';
import { version } from '../../config/version';
import { useWidgetConfig } from '../WidgetProvider';
let lifi;
const SDKContext = createContext(null);
export const useLiFi = () => useContext(SDKContext);
export const SDKProvider = ({ children, }) => {
    const { sdkConfig, integrator, apiKey, fee, referrer, routePriority, slippage, } = useWidgetConfig();
    const value = useMemo(() => {
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
            lifi = new LiFi({
                disableVersionCheck: true,
                widgetVersion: version,
                ...config,
            });
        }
        lifi.setConfig(config);
        return lifi;
    }, [apiKey, fee, integrator, referrer, routePriority, sdkConfig, slippage]);
    return _jsx(SDKContext.Provider, { value: value, children: children });
};
