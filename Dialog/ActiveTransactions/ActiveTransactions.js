import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Box, useTheme, useMediaQuery, Drawer, Typography } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ActiveTransactionItem } from '../../components/ActiveTransactions';
import { Dialog } from '../../components/Dialog';
import { useWallet } from '../../providers';
import { useExecutingRoutesIds, useHeaderStoreContext, useRouteExecutionStore, } from '../../stores';
import { ActiveTransactionsEmpty } from './ActiveTransactionsEmpty';
import { Collapse } from '@mui/material';
import { backdropProps, modalProps, paperProps } from '../../components/Dialog';
import CloseIcon from '@mui/icons-material/Close';
export const Content = ({ toggleOpenTransac }) => {
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
    return (_jsxs(_Fragment, { children: [_jsx(Header, { toggleOpenTransac: toggleOpenTransac }), _jsx(Box, { sx: {
                    marginTop: 1,
                    // maxHeight: '33rem',
                    // minWidth: '22rem',
                    [theme.breakpoints.up('xs')]: {
                        height: 'calc(100% - 80px)',
                    },
                    [theme.breakpoints.up('tablet')]: {
                        minWidth: '17rem',
                        height: 'calc(100% - 90px)',
                    },
                    [theme.breakpoints.up('md')]: {
                        minWidth: '22rem',
                        height: 'calc(100% - 100px)',
                    },
                    overflowY: 'auto',
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
                }, children: executingRoutes.map((routeId) => (_jsx(ActiveTransactionItem, { routeId: routeId, toggleOpenTransac: toggleOpenTransac }, routeId))) }), _jsxs(Dialog, { open: open, onClose: toggleDialog, children: [_jsx(DialogTitle, { children: t('warning.title.deleteActiveTransactions') }), _jsx(DialogContent, { children: _jsx(DialogContentText, { children: t('warning.message.deleteActiveTransactions') }) }), _jsxs(DialogActions, { children: [_jsx(Button, { onClick: toggleDialog, children: t('button.cancel') }), _jsx(Button, { variant: "contained", onClick: () => deleteRoutes('active'), autoFocus: true, children: t('button.delete') })] })] })] }));
};
export function ActiveTransactions({ openTransac, toggleOpenTransac }) {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
    return isDesktop ? (_jsx(Collapse, { timeout: { enter: 225, exit: 225, appear: 0 }, in: !!openTransac, orientation: "horizontal", sx: {
            height: '40rem',
            paddingX: '20px',
            position: 'sticky',
            top: '70px',
            '&.MuiCollapse-hidden': {
                display: 'none'
            }
        }, children: _jsx(Content, { toggleOpenTransac: toggleOpenTransac }) })) : (_jsx(Drawer, { anchor: "bottom", open: openTransac, onClose: toggleOpenTransac, PaperProps: {
            ...paperProps,
            style: {
                height: '60vh'
            }
        }, ModalProps: modalProps, BackdropProps: backdropProps, disableAutoFocus: true, children: _jsx(Content, { toggleOpenTransac: toggleOpenTransac }) }));
}
export function Header({ toggleOpenTransac }) {
    return (_jsx(_Fragment, { children: _jsxs(Box, { px: '20px', py: '12px', display: "flex", justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid', borderColor: '#4242423d', children: [_jsx(Typography, { fontSize: 18, align: 'left', fontWeight: "700", flex: 1, noWrap: true, children: "Setting" }), _jsx(IconButton, { size: "medium", onClick: toggleOpenTransac, sx: {
                        marginRight: -1.25,
                    }, children: _jsx(CloseIcon, {}) })] }) }));
}
