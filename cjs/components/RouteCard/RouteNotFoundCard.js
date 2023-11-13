"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteNotFoundCard = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Route_1 = require("@mui/icons-material/Route");
const material_1 = require("@mui/material");
const react_i18next_1 = require("react-i18next");
const RouteNotFoundCard = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    return ((0, jsx_runtime_1.jsxs)(material_1.Box, { sx: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            flex: 1,
        }, py: 1.625, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { fontSize: 48, children: (0, jsx_runtime_1.jsx)(Route_1.default, { fontSize: "inherit" }) }), (0, jsx_runtime_1.jsx)(material_1.Typography, { fontSize: 18, fontWeight: 700, children: t('info.title.routeNotFound') }), (0, jsx_runtime_1.jsx)(material_1.Typography, { fontSize: 14, color: "text.secondary", textAlign: "center", mt: 2, children: t('info.message.routeNotFound') })] }));
};
exports.RouteNotFoundCard = RouteNotFoundCard;
