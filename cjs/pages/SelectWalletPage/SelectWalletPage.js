"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectWalletPage = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const wallet_management_1 = require("@lifi/wallet-management");
const material_1 = require("@mui/material");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const Dialog_1 = require("../../components/Dialog");
const ListItemButton_1 = require("../../components/ListItemButton");
const ListItemText_1 = require("../../components/ListItemText");
const hooks_1 = require("../../hooks");
const providers_1 = require("../../providers");
const SelectWalletPage = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const { navigateBack } = (0, hooks_1.useNavigateBack)();
    const { connect } = (0, providers_1.useWallet)();
    const [walletIdentity, setWalletIdentity] = (0, react_1.useState)({ show: false });
    const [wallets, setWallets] = (0, react_1.useState)();
    const isDesktopView = (0, material_1.useMediaQuery)((theme) => theme.breakpoints.up('sm'));
    const closeDialog = () => {
        setWalletIdentity((state) => ({
            ...state,
            show: false,
        }));
    };
    const handleConnect = (0, react_1.useCallback)(async (wallet) => {
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
    (0, react_1.useEffect)(() => {
        Promise.all(wallet_management_1.supportedWallets.map((wallet) => wallet.installed())).then((installed) => {
            // separate into installed and not installed wallets
            const installedWallets = wallet_management_1.supportedWallets.filter((_, index) => installed[index]);
            // always remove Default Wallet from not installed Wallets
            const notInstalledWallets = wallet_management_1.supportedWallets.filter((wallet, index) => !installed[index] && wallet.name !== 'Default Wallet');
            const allowedWallets = [...installedWallets];
            if (isDesktopView) {
                allowedWallets.push(...notInstalledWallets);
            }
            setWallets(allowedWallets);
        });
    }, []);
    return ((0, jsx_runtime_1.jsxs)(material_1.Container, { disableGutters: true, children: [(0, jsx_runtime_1.jsx)(material_1.List, { sx: {
                    paddingLeft: 1.5,
                    paddingRight: 1.5,
                }, children: wallets?.map((wallet) => ((0, jsx_runtime_1.jsxs)(ListItemButton_1.ListItemButton, { onClick: () => handleConnect(wallet), children: [(0, jsx_runtime_1.jsx)(material_1.ListItemAvatar, { children: (0, jsx_runtime_1.jsx)(material_1.Avatar, { src: wallet.icon.src || wallet.icon, alt: wallet.name, children: wallet.name[0] }) }), (0, jsx_runtime_1.jsx)(ListItemText_1.ListItemText, { primary: wallet.name })] }, wallet.name))) }), (0, jsx_runtime_1.jsxs)(Dialog_1.Dialog, { open: walletIdentity.show, onClose: closeDialog, children: [(0, jsx_runtime_1.jsx)(material_1.DialogContent, { children: (0, jsx_runtime_1.jsx)(material_1.DialogContentText, { children: t('wallet.extensionNotFound', {
                                name: walletIdentity.wallet?.name,
                            }) }) }), (0, jsx_runtime_1.jsx)(material_1.DialogActions, { children: (0, jsx_runtime_1.jsx)(material_1.Button, { variant: "contained", onClick: closeDialog, autoFocus: true, children: t('button.ok') }) })] })] }));
};
exports.SelectWalletPage = SelectWalletPage;
