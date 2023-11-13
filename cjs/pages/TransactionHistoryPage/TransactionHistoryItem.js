"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionHistoryItem = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const react_i18next_1 = require("react-i18next");
const react_router_dom_1 = require("react-router-dom");
const Card_1 = require("../../components/Card");
const Token_1 = require("../../components/Token");
const utils_1 = require("../../utils");
const TransactionHistoryItem = ({ route }) => {
    const { i18n } = (0, react_i18next_1.useTranslation)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const handleClick = () => {
        navigate(utils_1.navigationRoutes.transactionDetails, {
            state: { routeId: route.id },
        });
    };
    const startedAt = new Date(route.steps[0].execution?.process[0].startedAt ?? 0);
    const fromToken = { ...route.fromToken, amount: route.fromAmount };
    const toToken = {
        ...(route.steps.at(-1)?.execution?.toToken ?? route.toToken),
        amount: route.steps.at(-1)?.execution?.toAmount ?? route.toAmount,
    };
    return ((0, jsx_runtime_1.jsxs)(Card_1.Card, { onClick: handleClick, children: [(0, jsx_runtime_1.jsxs)(material_1.Box, { sx: {
                    display: 'flex',
                    flex: 1,
                    justifyContent: 'space-between',
                }, pt: 1.75, px: 2, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { fontSize: 12, children: new Intl.DateTimeFormat(i18n.language, { dateStyle: 'long' }).format(startedAt) }), (0, jsx_runtime_1.jsx)(material_1.Typography, { fontSize: 12, children: new Intl.DateTimeFormat(i18n.language, {
                            timeStyle: 'short',
                        }).format(startedAt) })] }), (0, jsx_runtime_1.jsxs)(material_1.Box, { py: 1, children: [(0, jsx_runtime_1.jsx)(Token_1.Token, { token: fromToken, px: 2, pt: 1, connected: true }), (0, jsx_runtime_1.jsx)(Token_1.TokenDivider, {}), (0, jsx_runtime_1.jsx)(Token_1.Token, { token: toToken, px: 2, pt: 0.5, pb: 1 })] })] }));
};
exports.TransactionHistoryItem = TransactionHistoryItem;
