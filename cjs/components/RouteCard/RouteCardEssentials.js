"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteCardEssentials = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const AccessTimeFilled_1 = require("@mui/icons-material/AccessTimeFilled");
const EvStation_1 = require("@mui/icons-material/EvStation");
const Layers_1 = require("@mui/icons-material/Layers");
const MonetizationOn_1 = require("@mui/icons-material/MonetizationOn");
const material_1 = require("@mui/material");
const react_i18next_1 = require("react-i18next");
const RouteCard_style_1 = require("./RouteCard.style");
const utils_1 = require("./utils");
const RouteCardEssentials = ({ route, dense, }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const executionTimeMinutes = Math.ceil(route.steps
        .map((step) => step.estimate.executionDuration)
        .reduce((duration, x) => duration + x, 0) / 60);
    const gasCostUSD = parseFloat(route.gasCostUSD ?? '') || 0.01;
    const gasCosts = (0, utils_1.getGasCostsBreakdown)(route);
    const feeCosts = (0, utils_1.getFeeCostsBreakdown)(route, false);
    return ((0, jsx_runtime_1.jsxs)(material_1.Box, { display: "flex", justifyContent: 'space-between', flex: 1, mt: 2, children: [(0, jsx_runtime_1.jsx)(material_1.Tooltip, { title: (0, jsx_runtime_1.jsxs)(material_1.Box, { component: "span", children: [t(`tooltip.estimatedNetworkFee`), gasCosts.map((gas, index) => ((0, jsx_runtime_1.jsxs)(material_1.Typography, { fontSize: 12, fontWeight: "500", children: [gas.amount?.toFixed(9), " ", gas.token.symbol, " (", t(`format.currency`, { value: gas.amountUSD }), ")"] }, `${gas.token.address}${index}`)))] }), placement: "top", enterDelay: 400, arrow: true, children: (0, jsx_runtime_1.jsxs)(material_1.Box, { display: "flex", alignItems: "center", mr: dense ? 0 : 2, children: [(0, jsx_runtime_1.jsx)(RouteCard_style_1.IconTypography, { children: (0, jsx_runtime_1.jsx)(EvStation_1.default, { fontSize: "small" }) }), (0, jsx_runtime_1.jsx)(material_1.Typography, { fontSize: 14, color: "text.primary", fontWeight: "500", lineHeight: 1, children: t(`format.currency`, { value: gasCostUSD }) })] }) }), (0, jsx_runtime_1.jsx)(material_1.Tooltip, { title: (0, jsx_runtime_1.jsxs)(material_1.Box, { component: "span", children: [t(`tooltip.additionalProviderFee`), feeCosts.map((fee, index) => ((0, jsx_runtime_1.jsxs)(material_1.Typography, { fontSize: 12, fontWeight: "500", children: [fee.amount?.toFixed(9), " ", fee.token.symbol, " (", t(`format.currency`, { value: fee.amountUSD }), ")"] }, `${fee.token.address}${index}`)))] }), placement: "top", enterDelay: 400, arrow: true, children: (0, jsx_runtime_1.jsxs)(material_1.Box, { display: "flex", alignItems: "center", mr: dense ? 0 : 2, children: [(0, jsx_runtime_1.jsx)(RouteCard_style_1.IconTypography, { children: (0, jsx_runtime_1.jsx)(MonetizationOn_1.default, { fontSize: "small" }) }), (0, jsx_runtime_1.jsx)(material_1.Typography, { fontSize: 14, color: "text.primary", fontWeight: "500", lineHeight: 1, children: t(`format.currency`, {
                                value: feeCosts.reduce((sum, feeCost) => sum + feeCost.amountUSD, 0),
                            }) })] }) }), (0, jsx_runtime_1.jsx)(material_1.Tooltip, { title: t(`tooltip.estimatedTime`), placement: "top", enterDelay: 400, arrow: true, children: (0, jsx_runtime_1.jsxs)(material_1.Box, { display: "flex", alignItems: "center", mr: dense ? 0 : 2, children: [(0, jsx_runtime_1.jsx)(RouteCard_style_1.IconTypography, { children: (0, jsx_runtime_1.jsx)(AccessTimeFilled_1.default, { fontSize: "small" }) }), (0, jsx_runtime_1.jsx)(material_1.Typography, { fontSize: 14, color: "text.primary", fontWeight: "500", lineHeight: 1, children: t('main.estimatedTime', {
                                value: executionTimeMinutes,
                            }) })] }) }), (0, jsx_runtime_1.jsx)(material_1.Tooltip, { title: t(`tooltip.numberOfSteps`), placement: "top", enterDelay: 400, arrow: true, children: (0, jsx_runtime_1.jsxs)(material_1.Box, { display: "flex", alignItems: "center", children: [(0, jsx_runtime_1.jsx)(RouteCard_style_1.IconTypography, { children: (0, jsx_runtime_1.jsx)(Layers_1.default, { fontSize: "small" }) }), (0, jsx_runtime_1.jsx)(material_1.Typography, { fontSize: 14, color: "text.primary", fontWeight: "500", lineHeight: 1, children: route.steps.length })] }) })] }));
};
exports.RouteCardEssentials = RouteCardEssentials;
