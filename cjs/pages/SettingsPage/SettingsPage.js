"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsPage = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const ColorSchemeButtonGroup_1 = require("./ColorSchemeButtonGroup");
const EnabledToolsButton_1 = require("./EnabledToolsButton");
const GasPriceSelect_1 = require("./GasPriceSelect");
const LanguageSelect_1 = require("./LanguageSelect");
const ResetSettingsButton_1 = require("./ResetSettingsButton");
const RoutePrioritySelect_1 = require("./RoutePrioritySelect");
const ShowDestinationWallet_1 = require("./ShowDestinationWallet");
const SlippageInput_1 = require("./SlippageInput");
const SettingsPage = () => {
    return ((0, jsx_runtime_1.jsxs)(material_1.Container, { disableGutters: true, children: [(0, jsx_runtime_1.jsxs)(material_1.Box, { px: 3, pt: 1, children: [(0, jsx_runtime_1.jsx)(ColorSchemeButtonGroup_1.ColorSchemeButtonGroup, {}), (0, jsx_runtime_1.jsx)(LanguageSelect_1.LanguageSelect, {}), (0, jsx_runtime_1.jsx)(RoutePrioritySelect_1.RoutePrioritySelect, {}), (0, jsx_runtime_1.jsxs)(material_1.Box, { sx: { display: 'flex', alignItems: 'center' }, mt: 2, children: [(0, jsx_runtime_1.jsx)(material_1.Box, { pr: 2, flex: 1, children: (0, jsx_runtime_1.jsx)(SlippageInput_1.SlippageInput, {}) }), (0, jsx_runtime_1.jsx)(GasPriceSelect_1.GasPriceSelect, {})] })] }), (0, jsx_runtime_1.jsx)(ShowDestinationWallet_1.ShowDestinationWallet, {}), (0, jsx_runtime_1.jsxs)(material_1.Box, { px: 1.5, children: [(0, jsx_runtime_1.jsx)(EnabledToolsButton_1.EnabledToolsButton, { type: "Bridges" }), (0, jsx_runtime_1.jsx)(EnabledToolsButton_1.EnabledToolsButton, { type: "Exchanges" })] }), (0, jsx_runtime_1.jsx)(ResetSettingsButton_1.ResetSettingsButton, {})] }));
};
exports.SettingsPage = SettingsPage;
