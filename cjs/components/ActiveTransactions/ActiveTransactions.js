"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActiveTransactions = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const react_i18next_1 = require("react-i18next");
const providers_1 = require("../../providers");
const stores_1 = require("../../stores");
const Card_1 = require("../Card");
const ActiveTransactionItem_1 = require("./ActiveTransactionItem");
const ActiveTransactions_style_1 = require("./ActiveTransactions.style");
const ActiveTransactions = ({ toggleOpenTransac }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const { account } = (0, providers_1.useWallet)();
    const executingRoutes = (0, stores_1.useExecutingRoutesIds)(account.address);
    if (!executingRoutes?.length) {
        return null;
    }
    const hasShowAll = executingRoutes?.length > 2;
    return ((0, jsx_runtime_1.jsxs)(Card_1.Card, { variant: "selected", selectionColor: "secondary", mt: 1, mb: 1, children: [(0, jsx_runtime_1.jsxs)(material_1.Stack, { direction: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center', children: [(0, jsx_runtime_1.jsx)(Card_1.CardTitle, { noWrap: true, width: '100%', children: t('header.activeTransactions') }), hasShowAll ? ((0, jsx_runtime_1.jsx)(ActiveTransactions_style_1.ShowAllButton, { disableRipple: true, onClick: toggleOpenTransac, children: t('button.showAll') })) : null] }), (0, jsx_runtime_1.jsx)(material_1.Stack, { spacing: 1.5, py: 2, children: executingRoutes.slice(0, 2).map((routeId) => ((0, jsx_runtime_1.jsx)(ActiveTransactionItem_1.ActiveTransactionItem, { routeId: routeId, dense: true }, routeId))) })] }));
};
exports.ActiveTransactions = ActiveTransactions;
