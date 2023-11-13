"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTools = void 0;
const react_query_1 = require("@tanstack/react-query");
const providers_1 = require("../providers");
const stores_1 = require("../stores");
const useTools = () => {
    const lifi = (0, providers_1.useLiFi)();
    const { bridges, exchanges } = (0, providers_1.useWidgetConfig)();
    const { data } = (0, react_query_1.useQuery)(['tools'], async () => {
        const tools = await lifi.getTools();
        return {
            bridges: tools.bridges.filter((bridge) => (0, providers_1.isItemAllowed)(bridge.key, bridges)),
            exchanges: tools.exchanges.filter((exchange) => (0, providers_1.isItemAllowed)(exchange.key, exchanges)),
        };
    }, {
        onSuccess(data) {
            const { initializeTools } = stores_1.useSettingsStore.getState();
            initializeTools('Bridges', data.bridges.map((bridge) => bridge.key));
            initializeTools('Exchanges', data.exchanges.map((exchange) => exchange.key));
        },
        refetchInterval: 180000,
        staleTime: 180000,
    });
    return { tools: data };
};
exports.useTools = useTools;
