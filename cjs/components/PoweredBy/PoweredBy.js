"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoweredBy = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const react_router_dom_1 = require("react-router-dom");
const version_1 = require("../../config/version");
const providers_1 = require("../../providers");
const types_1 = require("../../types");
const utils_1 = require("../../utils");
const PoweredBy_style_1 = require("./PoweredBy.style");
const PoweredBy = () => {
    const { hiddenUI } = (0, providers_1.useWidgetConfig)();
    const { pathname } = (0, react_router_dom_1.useLocation)();
    if (pathname.includes(utils_1.navigationRoutes.fromToken) ||
        pathname.includes(utils_1.navigationRoutes.toToken)) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)(material_1.Box, { px: 3, pt: 1, pb: hiddenUI?.includes(types_1.HiddenUI.PoweredBy) ? 1 : 2, sx: {
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
        }, children: !hiddenUI?.includes(types_1.HiddenUI.PoweredBy) ? ((0, jsx_runtime_1.jsx)(material_1.Tooltip, { title: `v${version_1.version}`, placement: "top", enterDelay: 1000, arrow: true, children: (0, jsx_runtime_1.jsxs)(PoweredBy_style_1.Link, { href: "https://li.fi", target: "_blank", underline: "none", color: "text.primary", children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { color: "text.secondary", fontSize: 12, fontWeight: 500, px: 0.5, children: "Powered by" }), (0, jsx_runtime_1.jsx)(material_1.Typography, { color: "text.primary", fontSize: 12, fontWeight: 500, children: "LI.FI" })] }) })) : null }));
};
exports.PoweredBy = PoweredBy;
