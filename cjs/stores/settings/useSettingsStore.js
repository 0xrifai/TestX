"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setDefaultSettings = exports.useSettingsStore = exports.defaultSettings = exports.defaultConfigurableSettings = void 0;
const middleware_1 = require("zustand/middleware");
const traditional_1 = require("zustand/traditional");
const types_1 = require("./types");
exports.defaultConfigurableSettings = {
    routePriority: 'RECOMMENDED',
    slippage: '0.5',
    gasPrice: 'normal',
};
exports.defaultSettings = {
    appearance: 'auto',
    gasPrice: 'normal',
    enabledAutoRefuel: true,
    showDestinationWallet: true,
    enabledBridges: [],
    enabledExchanges: [],
};
exports.useSettingsStore = (0, traditional_1.createWithEqualityFn)((0, middleware_1.persist)((set, get) => ({
    ...exports.defaultSettings,
    setValue: (key, value) => set(() => ({
        [key]: value,
    })),
    setValues: (values) => set((state) => {
        const updatedState = { ...state };
        for (const key in values) {
            if (Object.hasOwn(state, key)) {
                updatedState[key] = values[key];
            }
        }
        return updatedState;
    }),
    initializeTools: (toolType, tools, reset) => {
        if (!tools.length) {
            return;
        }
        set((state) => {
            const updatedState = { ...state };
            if (updatedState[`_enabled${toolType}`] && !reset) {
                // Add new tools
                const enabledTools = tools
                    .filter((tool) => !Object.hasOwn(updatedState[`_enabled${toolType}`], tool))
                    .reduce((values, tool) => {
                    values[tool] = true;
                    return values;
                }, updatedState[`_enabled${toolType}`]);
                // Filter tools we no longer have
                updatedState[`_enabled${toolType}`] = Object.fromEntries(Object.entries(enabledTools).filter(([key]) => tools.includes(key)));
            }
            else {
                updatedState[`_enabled${toolType}`] = tools.reduce((values, tool) => {
                    values[tool] = true;
                    return values;
                }, {});
            }
            updatedState[`enabled${toolType}`] = Object.entries(updatedState[`_enabled${toolType}`])
                .filter(([_, value]) => value)
                .map(([key]) => key);
            return updatedState;
        });
    },
    setTools: (toolType, tools, availableTools) => set(() => ({
        [`enabled${toolType}`]: tools,
        [`_enabled${toolType}`]: availableTools.reduce((values, toolKey) => {
            values[toolKey] = tools.includes(toolKey);
            return values;
        }, {}),
    })),
    reset: (config, bridges, exchanges) => {
        const { appearance, ...restDefaultSettings } = exports.defaultSettings;
        set(() => ({
            ...restDefaultSettings,
            ...exports.defaultConfigurableSettings,
        }));
        get().initializeTools('Bridges', bridges, true);
        get().initializeTools('Exchanges', exchanges, true);
    },
}), {
    name: `li.fi-widget-settings`,
    version: 2,
    partialize: (state) => {
        const { enabledBridges, enabledExchanges, ...partializedState } = state;
        return partializedState;
    },
    merge: (persistedState, currentState) => {
        const state = { ...currentState, ...persistedState };
        types_1.SettingsToolTypes.forEach((toolType) => {
            state[`enabled${toolType}`] = Object.entries(persistedState[`_enabled${toolType}`])
                .filter(([_, value]) => value)
                .map(([key]) => key);
        });
        return state;
    },
    migrate: (persistedState, version) => {
        if (version === 0 && persistedState.appearance === 'system') {
            persistedState.appearance = exports.defaultSettings.appearance;
        }
        if (version === 1) {
            persistedState.slippage = exports.defaultConfigurableSettings.slippage;
        }
        return persistedState;
    },
}), Object.is);
const setDefaultSettings = (config) => {
    const { slippage, routePriority, setValue, gasPrice } = exports.useSettingsStore.getState();
    const defaultSlippage = (config?.slippage ||
        config?.sdkConfig?.defaultRouteOptions?.slippage ||
        0) * 100;
    const defaultRoutePriority = config?.routePriority || config?.sdkConfig?.defaultRouteOptions?.order;
    exports.defaultConfigurableSettings.slippage = (defaultSlippage || exports.defaultConfigurableSettings.slippage)?.toString();
    exports.defaultConfigurableSettings.routePriority =
        defaultRoutePriority || exports.defaultConfigurableSettings.routePriority;
    if (!slippage) {
        setValue('slippage', exports.defaultConfigurableSettings.slippage);
    }
    if (!routePriority) {
        setValue('routePriority', exports.defaultConfigurableSettings.routePriority);
    }
    if (!gasPrice) {
        setValue('gasPrice', exports.defaultConfigurableSettings.gasPrice);
    }
};
exports.setDefaultSettings = setDefaultSettings;
