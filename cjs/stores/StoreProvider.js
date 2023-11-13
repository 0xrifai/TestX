"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const chains_1 = require("./chains");
const header_1 = require("./header");
const routes_1 = require("./routes");
const settings_1 = require("./settings");
const StoreProvider = ({ children, config, }) => {
    return ((0, jsx_runtime_1.jsx)(settings_1.SplitSubvariantStoreProvider, { state: config.subvariant === 'split'
            ? config.subvariantOptions || 'swap'
            : undefined, children: (0, jsx_runtime_1.jsx)(header_1.HeaderStoreProvider, { namePrefix: config?.keyPrefix, children: (0, jsx_runtime_1.jsx)(chains_1.ChainOrderStoreProvider, { namePrefix: config?.keyPrefix, children: (0, jsx_runtime_1.jsx)(routes_1.RouteExecutionStoreProvider, { namePrefix: config?.keyPrefix, children: children }) }) }) }));
};
exports.StoreProvider = StoreProvider;
