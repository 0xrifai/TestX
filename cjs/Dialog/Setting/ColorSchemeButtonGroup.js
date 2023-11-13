"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorSchemeButtonGroup = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Brightness4_1 = require("@mui/icons-material/Brightness4");
const DarkMode_1 = require("@mui/icons-material/DarkMode");
const LightMode_1 = require("@mui/icons-material/LightMode");
const material_1 = require("@mui/material");
const react_i18next_1 = require("react-i18next");
const providers_1 = require("../../providers");
const stores_1 = require("../../stores");
const types_1 = require("../../types");
const ColorSchemeButtonGroup_style_1 = require("./ColorSchemeButtonGroup.style");
const ColorSchemeButtonGroup = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const { hiddenUI } = (0, providers_1.useWidgetConfig)();
    const [appearance, setAppearance] = (0, stores_1.useAppearance)();
    if (hiddenUI?.includes(types_1.HiddenUI.Appearance)) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)(material_1.Box, { pb: 2, children: (0, jsx_runtime_1.jsxs)(material_1.ToggleButtonGroup, { color: "primary", value: appearance, onChange: (_, value) => {
                if (value) {
                    setAppearance(value);
                }
            }, exclusive: true, fullWidth: true, children: [(0, jsx_runtime_1.jsxs)(ColorSchemeButtonGroup_style_1.ToggleButton, { value: "light", children: [(0, jsx_runtime_1.jsx)(LightMode_1.default, { sx: { marginRight: 1 } }), t('button.light')] }), (0, jsx_runtime_1.jsxs)(ColorSchemeButtonGroup_style_1.ToggleButton, { value: "dark", children: [(0, jsx_runtime_1.jsx)(DarkMode_1.default, { sx: { marginRight: 1 } }), t('button.dark')] }), (0, jsx_runtime_1.jsxs)(ColorSchemeButtonGroup_style_1.ToggleButton, { value: "auto", children: [(0, jsx_runtime_1.jsx)(Brightness4_1.default, { sx: { marginRight: 1 } }), t('button.auto')] })] }) }));
};
exports.ColorSchemeButtonGroup = ColorSchemeButtonGroup;
