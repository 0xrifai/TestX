"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionHistoryPage = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const DeleteOutline_1 = require("@mui/icons-material/DeleteOutline");
const material_1 = require("@mui/material");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const Dialog_1 = require("../../components/Dialog");
const providers_1 = require("../../providers");
const stores_1 = require("../../stores");
const routes_1 = require("../../stores/routes");
const TransactionHistoryEmpty_1 = require("./TransactionHistoryEmpty");
const TransactionHistoryItem_1 = require("./TransactionHistoryItem");
const TransactionHistoryPage = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const { account } = (0, providers_1.useWallet)();
    const transactions = (0, routes_1.useTransactionHistory)(account.address);
    const headerStoreContext = (0, stores_1.useHeaderStoreContext)();
    const deleteRoutes = (0, stores_1.useRouteExecutionStore)((store) => store.deleteRoutes);
    const [open, setOpen] = (0, react_1.useState)(false);
    const toggleDialog = (0, react_1.useCallback)(() => {
        setOpen((open) => !open);
    }, []);
    (0, react_1.useEffect)(() => {
        if (transactions.length) {
            return headerStoreContext.getState().setAction((0, jsx_runtime_1.jsx)(material_1.IconButton, { size: "medium", edge: "end", onClick: toggleDialog, children: (0, jsx_runtime_1.jsx)(DeleteOutline_1.default, {}) }));
        }
    }, [transactions.length, toggleDialog, headerStoreContext]);
    if (!transactions.length) {
        return (0, jsx_runtime_1.jsx)(TransactionHistoryEmpty_1.TransactionHistoryEmpty, {});
    }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(material_1.Stack, { spacing: 2, mt: 1, children: transactions.length ? (transactions.map(({ route }) => ((0, jsx_runtime_1.jsx)(TransactionHistoryItem_1.TransactionHistoryItem, { route: route }, route.id)))) : ((0, jsx_runtime_1.jsx)(TransactionHistoryEmpty_1.TransactionHistoryEmpty, {})) }), (0, jsx_runtime_1.jsxs)(Dialog_1.Dialog, { open: open, onClose: toggleDialog, children: [(0, jsx_runtime_1.jsx)(material_1.DialogTitle, { children: t('warning.title.deleteTransactionHistory') }), (0, jsx_runtime_1.jsx)(material_1.DialogContent, { children: (0, jsx_runtime_1.jsx)(material_1.DialogContentText, { children: t('warning.message.deleteTransactionHistory') }) }), (0, jsx_runtime_1.jsxs)(material_1.DialogActions, { children: [(0, jsx_runtime_1.jsx)(material_1.Button, { onClick: toggleDialog, children: t('button.cancel') }), (0, jsx_runtime_1.jsx)(material_1.Button, { variant: "contained", onClick: () => deleteRoutes('completed'), autoFocus: true, children: t('button.delete') })] })] })] }));
};
exports.TransactionHistoryPage = TransactionHistoryPage;
