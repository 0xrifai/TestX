"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActiveTransactionsEmpty = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const SwapHoriz_1 = require("@mui/icons-material/SwapHoriz");
const material_1 = require("@mui/material");
const react_i18next_1 = require("react-i18next");
const ActiveTransactionsEmpty = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    return ((0, jsx_runtime_1.jsxs)(material_1.Container, { sx: {
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            paddingY: 12,
        }, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { fontSize: 48, children: (0, jsx_runtime_1.jsx)(SwapHoriz_1.default, { fontSize: "inherit" }) }), (0, jsx_runtime_1.jsx)(material_1.Typography, { fontSize: 18, fontWeight: 700, children: t('info.title.emptyActiveTransactions') }), (0, jsx_runtime_1.jsx)(material_1.Typography, { fontSize: 14, color: "text.secondary", textAlign: "center", mt: 2, children: t('info.message.emptyActiveTransactions') })] }));
};
exports.ActiveTransactionsEmpty = ActiveTransactionsEmpty;
