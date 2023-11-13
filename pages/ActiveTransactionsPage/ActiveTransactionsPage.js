import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Box, useTheme } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ActiveTransactionItem } from '../../components/ActiveTransactions';
import { Dialog } from '../../components/Dialog';
import { useWallet } from '../../providers';
import { useExecutingRoutesIds, useHeaderStoreContext, useRouteExecutionStore, } from '../../stores';
import { ActiveTransactionsEmpty } from './ActiveTransactionsEmpty';
export const ActiveTransactionsPage = () => {
    const theme = useTheme();
    const { t } = useTranslation();
    const { account } = useWallet();
    const executingRoutes = useExecutingRoutesIds(account.address);
    const deleteRoutes = useRouteExecutionStore((store) => store.deleteRoutes);
    const headerStoreContext = useHeaderStoreContext();
    const [open, setOpen] = useState(false);
    const toggleDialog = useCallback(() => {
        setOpen((open) => !open);
    }, []);
    useEffect(() => {
        if (executingRoutes.length) {
            return headerStoreContext.getState().setAction(_jsx(IconButton, { size: "medium", edge: "end", onClick: toggleDialog, children: _jsx(DeleteIcon, {}) }));
        }
    }, [executingRoutes.length, headerStoreContext, toggleDialog]);
    if (!executingRoutes.length) {
        return _jsx(ActiveTransactionsEmpty, {});
    }
    return (_jsxs(_Fragment, { children: [_jsx(Box, { sx: {
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
                }, children: executingRoutes.map((routeId) => (_jsx(ActiveTransactionItem, { routeId: routeId }, routeId))) }), _jsxs(Dialog, { open: open, onClose: toggleDialog, children: [_jsx(DialogTitle, { children: t('warning.title.deleteActiveTransactions') }), _jsx(DialogContent, { children: _jsx(DialogContentText, { children: t('warning.message.deleteActiveTransactions') }) }), _jsxs(DialogActions, { children: [_jsx(Button, { onClick: toggleDialog, children: t('button.cancel') }), _jsx(Button, { variant: "contained", onClick: () => deleteRoutes('active'), autoFocus: true, children: t('button.delete') })] })] })] }));
};
