import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { supportedWallets } from '@lifi/wallet-management';
import { Avatar, Button, Container, DialogActions, DialogContent, DialogContentText, List, ListItemAvatar, useMediaQuery, } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Dialog } from '../../components/Dialog';
import { ListItemButton } from '../../components/ListItemButton';
import { ListItemText } from '../../components/ListItemText';
import { useNavigateBack } from '../../hooks';
import { useWallet } from '../../providers';
export const SelectWalletPage = () => {
    const { t } = useTranslation();
    const { navigateBack } = useNavigateBack();
    const { connect } = useWallet();
    const [walletIdentity, setWalletIdentity] = useState({ show: false });
    const [wallets, setWallets] = useState();
    const isDesktopView = useMediaQuery((theme) => theme.breakpoints.up('sm'));
    const closeDialog = () => {
        setWalletIdentity((state) => ({
            ...state,
            show: false,
        }));
    };
    const handleConnect = useCallback(async (wallet) => {
        const identityCheckPassed = await wallet.installed();
        if (!identityCheckPassed) {
            setWalletIdentity({
                show: true,
                wallet,
            });
            return;
        }
        navigateBack();
        await connect(wallet);
    }, [connect, navigateBack]);
    useEffect(() => {
        Promise.all(supportedWallets.map((wallet) => wallet.installed())).then((installed) => {
            // separate into installed and not installed wallets
            const installedWallets = supportedWallets.filter((_, index) => installed[index]);
            // always remove Default Wallet from not installed Wallets
            const notInstalledWallets = supportedWallets.filter((wallet, index) => !installed[index] && wallet.name !== 'Default Wallet');
            const allowedWallets = [...installedWallets];
            if (isDesktopView) {
                allowedWallets.push(...notInstalledWallets);
            }
            setWallets(allowedWallets);
        });
    }, []);
    return (_jsxs(Container, { disableGutters: true, children: [_jsx(List, { sx: {
                    paddingLeft: 1.5,
                    paddingRight: 1.5,
                }, children: wallets?.map((wallet) => (_jsxs(ListItemButton, { onClick: () => handleConnect(wallet), children: [_jsx(ListItemAvatar, { children: _jsx(Avatar, { src: wallet.icon.src || wallet.icon, alt: wallet.name, children: wallet.name[0] }) }), _jsx(ListItemText, { primary: wallet.name })] }, wallet.name))) }), _jsxs(Dialog, { open: walletIdentity.show, onClose: closeDialog, children: [_jsx(DialogContent, { children: _jsx(DialogContentText, { children: t('wallet.extensionNotFound', {
                                name: walletIdentity.wallet?.name,
                            }) }) }), _jsx(DialogActions, { children: _jsx(Button, { variant: "contained", onClick: closeDialog, autoFocus: true, children: t('button.ok') }) })] })] }));
};
