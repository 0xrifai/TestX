"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActiveTransactionsPage = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const DeleteOutline_1 = require("@mui/icons-material/DeleteOutline");
const material_1 = require("@mui/material");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const ActiveTransactions_1 = require("../../components/ActiveTransactions");
const Dialog_1 = require("../../components/Dialog");
const providers_1 = require("../../providers");
const stores_1 = require("../../stores");
const ActiveTransactionsEmpty_1 = require("./ActiveTransactionsEmpty");
const ActiveTransactionsPage = () => {
    const theme = (0, material_1.useTheme)();
    const { t } = (0, react_i18next_1.useTranslation)();
    const { account } = (0, providers_1.useWallet)();
    const executingRoutes = (0, stores_1.useExecutingRoutesIds)(account.address);
    const deleteRoutes = (0, stores_1.useRouteExecutionStore)((store) => store.deleteRoutes);
    const headerStoreContext = (0, stores_1.useHeaderStoreContext)();
    const [open, setOpen] = (0, react_1.useState)(false);
    const toggleDialog = (0, react_1.useCallback)(() => {
        setOpen((open) => !open);
    }, []);
    (0, react_1.useEffect)(() => {
        if (executingRoutes.length) {
            return headerStoreContext.getState().setAction((0, jsx_runtime_1.jsx)(material_1.IconButton, { size: "medium", edge: "end", onClick: toggleDialog, children: (0, jsx_runtime_1.jsx)(DeleteOutline_1.default, {}) }));
        }
    }, [executingRoutes.length, headerStoreContext, toggleDialog]);
    if (!executingRoutes.length) {
        return (0, jsx_runtime_1.jsx)(ActiveTransactionsEmpty_1.ActiveTransactionsEmpty, {});
    }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(material_1.Box, { sx: {
                    // height: '26rem',
                    // overflowY: 'auto',
                    '&::-webkit-scrollbar': {
                        width: '0'
                    },
                    [theme.breakpoints.up('sm')]: {
                        '&:hover::-webkit-scrollbar': {
                            width: '10px'
                        },
                    },
                    '&::-webkit-scrollbar-track': {
                        background: 'none'
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: '#4242423d',
                        borderRadius: 20
                    },
                }, children: executingRoutes.map((routeId) => ((0, jsx_runtime_1.jsx)(ActiveTransactions_1.ActiveTransactionItem, { routeId: routeId }, routeId))) }), (0, jsx_runtime_1.jsxs)(Dialog_1.Dialog, { open: open, onClose: toggleDialog, children: [(0, jsx_runtime_1.jsx)(material_1.DialogTitle, { children: t('warning.title.deleteActiveTransactions') }), (0, jsx_runtime_1.jsx)(material_1.DialogContent, { children: (0, jsx_runtime_1.jsx)(material_1.DialogContentText, { children: t('warning.message.deleteActiveTransactions') }) }), (0, jsx_runtime_1.jsxs)(material_1.DialogActions, { children: [(0, jsx_runtime_1.jsx)(material_1.Button, { onClick: toggleDialog, children: t('button.cancel') }), (0, jsx_runtime_1.jsx)(material_1.Button, { variant: "contained", onClick: () => deleteRoutes('active'), autoFocus: true, children: t('button.delete') })] })] })] }));
};
exports.ActiveTransactionsPage = ActiveTransactionsPage;
