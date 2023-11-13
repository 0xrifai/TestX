"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnabledToolsButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ChevronRight_1 = require("@mui/icons-material/ChevronRight");
const material_1 = require("@mui/material");
const react_i18next_1 = require("react-i18next");
const react_router_dom_1 = require("react-router-dom");
const shallow_1 = require("zustand/shallow");
const stores_1 = require("../../stores");
const utils_1 = require("../../utils");
const EnabledToolsButton_style_1 = require("./EnabledToolsButton.style");
const EnabledToolsButton = ({ type }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [enabledTools, tools] = (0, stores_1.useSettingsStore)((state) => {
        const enabledTools = Object.values(state[`_enabled${type}`] ?? {});
        return [enabledTools.filter(Boolean).length, enabledTools.length];
    }, shallow_1.shallow);
    const handleClick = () => {
        navigate(utils_1.navigationRoutes[type.toLowerCase()]);
    };
    return ((0, jsx_runtime_1.jsxs)(EnabledToolsButton_style_1.ListItemButton, { onClick: handleClick, children: [(0, jsx_runtime_1.jsx)(EnabledToolsButton_style_1.ListItemText, { primary: t(`settings.enabled${type}`) }), (0, jsx_runtime_1.jsxs)(material_1.Box, { display: "flex", alignItems: "center", children: [(0, jsx_runtime_1.jsx)(EnabledToolsButton_style_1.ListItemText, { primary: `${enabledTools}/${tools}` }), (0, jsx_runtime_1.jsx)(ChevronRight_1.default, {})] })] }));
};
exports.EnabledToolsButton = EnabledToolsButton;
