import { jsx as _jsx } from "react/jsx-runtime";
import { getChainByKey } from '@lifi/sdk';
import { createContext, useContext, useId, useMemo } from 'react';
import { setDefaultSettings } from '../../stores';
import { formatInputAmount } from '../../utils';
const initialContext = {
    elementId: '',
    integrator: '',
};
const WidgetContext = createContext(initialContext);
export const useWidgetConfig = () => useContext(WidgetContext);
export const WidgetProvider = ({ children, config: { fromChain, fromToken, toChain, toToken, fromAmount, integrator, ...config } = {}, }) => {
    const elementId = useId();
    if (!integrator) {
        throw Error('Required property "integrator" is missing.');
    }
    const value = useMemo(() => {
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
                    ? getChainByKey((searchParams.fromChain || fromChain)?.toLowerCase())?.id
                    : (searchParams.fromChain &&
                        !isNaN(parseInt(searchParams.fromChain, 10))) ||
                        typeof fromChain === 'number'
                        ? parseInt(searchParams.fromChain, 10) || fromChain
                        : undefined,
                toChain: (searchParams.toChain && isNaN(parseInt(searchParams.toChain, 10))) ||
                    typeof toChain === 'string'
                    ? getChainByKey((searchParams.toChain || toChain)?.toLowerCase())?.id
                    : (searchParams.toChain &&
                        !isNaN(parseInt(searchParams.toChain, 10))) ||
                        typeof toChain === 'number'
                        ? parseInt(searchParams.toChain, 10) || toChain
                        : undefined,
                fromToken: searchParams.fromToken?.toLowerCase() || fromToken?.toLowerCase(),
                toToken: searchParams.toToken?.toLowerCase() || toToken?.toLowerCase(),
                fromAmount: typeof searchParams.fromAmount === 'string' &&
                    !isNaN(parseFloat(searchParams.fromAmount))
                    ? formatInputAmount(searchParams.fromAmount)
                    : fromAmount,
                elementId,
                integrator,
            };
            setDefaultSettings(value);
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
    return (_jsx(WidgetContext.Provider, { value: value, children: children }));
};
