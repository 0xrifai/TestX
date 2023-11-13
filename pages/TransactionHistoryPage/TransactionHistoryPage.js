import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Stack, } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Dialog } from '../../components/Dialog';
import { useWallet } from '../../providers';
import { useHeaderStoreContext, useRouteExecutionStore } from '../../stores';
import { useTransactionHistory } from '../../stores/routes';
import { TransactionHistoryEmpty } from './TransactionHistoryEmpty';
import { TransactionHistoryItem } from './TransactionHistoryItem';
export const TransactionHistoryPage = () => {
    const { t } = useTranslation();
    const { account } = useWallet();
    const transactions = useTransactionHistory(account.address);
    const headerStoreContext = useHeaderStoreContext();
    const deleteRoutes = useRouteExecutionStore((store) => store.deleteRoutes);
    const [open, setOpen] = useState(false);
    const toggleDialog = useCallback(() => {
        setOpen((open) => !open);
    }, []);
    useEffect(() => {
        if (transactions.length) {
            return headerStoreContext.getState().setAction(_jsx(IconButton, { size: "medium", edge: "end", onClick: toggleDialog, children: _jsx(DeleteIcon, {}) }));
        }
    }, [transactions.length, toggleDialog, headerStoreContext]);
    if (!transactions.length) {
        return _jsx(TransactionHistoryEmpty, {});
    }
    return (_jsxs(_Fragment, { children: [_jsx(Stack, { spacing: 2, mt: 1, children: transactions.length ? (transactions.map(({ route }) => (_jsx(TransactionHistoryItem, { route: route }, route.id)))) : (_jsx(TransactionHistoryEmpty, {})) }), _jsxs(Dialog, { open: open, onClose: toggleDialog, children: [_jsx(DialogTitle, { children: t('warning.title.deleteTransactionHistory') }), _jsx(DialogContent, { children: _jsx(DialogContentText, { children: t('warning.message.deleteTransactionHistory') }) }), _jsxs(DialogActions, { children: [_jsx(Button, { onClick: toggleDialog, children: t('button.cancel') }), _jsx(Button, { variant: "contained", onClick: () => deleteRoutes('completed'), autoFocus: true, children: t('button.delete') })] })] })] }));
};
