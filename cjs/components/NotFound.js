"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFound = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Block_1 = require("@mui/icons-material/Block");
const material_1 = require("@mui/material");
const react_i18next_1 = require("react-i18next");
const NotFound = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    return ((0, jsx_runtime_1.jsxs)(material_1.Box, { sx: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            flex: 1,
            padding: 3,
        }, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { fontSize: 48, children: (0, jsx_runtime_1.jsx)(Block_1.default, { fontSize: "inherit" }) }), (0, jsx_runtime_1.jsx)(material_1.Typography, { fontSize: 18, fontWeight: 700, children: t('tooltip.notFound.title') }), (0, jsx_runtime_1.jsx)(material_1.Typography, { fontSize: 14, color: "text.secondary", textAlign: "center", mt: 2, children: t('tooltip.notFound.text') })] }));
};
exports.NotFound = NotFound;
