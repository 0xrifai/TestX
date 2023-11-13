"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFeaturedTokens = void 0;
const react_1 = require("react");
const providers_1 = require("../providers");
const useFeaturedTokens = (selectedChainId) => {
    const { tokens } = (0, providers_1.useWidgetConfig)();
    return (0, react_1.useMemo)(() => tokens?.featured?.filter((token) => token.chainId === selectedChainId), [selectedChainId, tokens?.featured]);
};
exports.useFeaturedTokens = useFeaturedTokens;
