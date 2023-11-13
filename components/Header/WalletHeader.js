import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import ContentCopyIcon from '@mui/icons-material/ContentCopyRounded';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OpenInNewIcon from '@mui/icons-material/OpenInNewRounded';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNewRounded';
import WalletIcon from '@mui/icons-material/Wallet';
import { Avatar, Button, MenuItem } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { useChain } from '../../hooks';
import { useWallet, useWidgetConfig } from '../../providers';
import { navigationRoutes, shortenAddress } from '../../utils';
import { DrawerWalletContainer, HeaderAppBar, WalletButton, } from './Header.style';
import { WalletMenu } from './WalletMenu';
export const WalletHeader = () => {
    return (_jsx(HeaderAppBar, { sx: { justifyContent: 'flex-end' }, children: _jsx(WalletMenuButton, {}) }));
};
export const WalletMenuButton = () => {
    const { account } = useWallet();
    const { variant } = useWidgetConfig();
    if (variant === 'drawer') {
        return (_jsx(DrawerWalletContainer, { children: account.isActive ? _jsx(ConnectedButton, {}) : _jsx(ConnectButton, {}) }));
    }
    return account.isActive ? _jsx(ConnectedButton, {}) : _jsx(ConnectButton, {});
};
const ConnectButton = () => {
    const { t } = useTranslation();
    const { pathname } = useLocation();
    const { walletManagement, subvariant, variant } = useWidgetConfig();
    const { connect: connectWallet } = useWallet();
    const navigate = useNavigate();
    const connect = async () => {
        if (walletManagement) {
            await connectWallet();
            return;
        }
        navigate(navigationRoutes.selectWallet);
    };
    return (_jsx(WalletButton, { endIcon: variant !== 'drawer' && subvariant !== 'split' ? (_jsx(WalletIcon, {})) : undefined, startIcon: variant === 'drawer' || subvariant === 'split' ? (_jsx(WalletIcon, { sx: { marginLeft: -0.25 } })) : undefined, onClick: !pathname.includes(navigationRoutes.selectWallet) ? connect : undefined, sx: {
            marginRight: subvariant === 'split' ? 0 : -1.25,
            marginLeft: subvariant === 'split' ? -1.25 : 0,
        }, children: t(`button.connectWallet`) }));
};
const ConnectedButton = () => {
    const { t } = useTranslation();
    const { subvariant } = useWidgetConfig();
    const { account, disconnect } = useWallet();
    const walletAddress = shortenAddress(account.address);
    const { chain } = useChain(account.chainId);
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleDisconnect = () => {
        disconnect();
        handleClose();
    };
    const handleCopyAddress = async () => {
        await navigator.clipboard.writeText(account.address ?? '');
        handleClose();
    };
    return (_jsxs(_Fragment, { children: [_jsx(WalletButton, { endIcon: _jsx(ExpandMoreIcon, {}), startIcon: _jsx(Avatar, { src: chain?.logoURI, alt: chain?.key, sx: { width: 24, height: 24 }, children: chain?.name[0] }), sx: {
                    marginRight: subvariant === 'split' ? 0 : -1.25,
                    marginLeft: subvariant === 'split' ? -1 : 0,
                }, onClick: handleClick, children: walletAddress }), _jsxs(WalletMenu, { anchorEl: anchorEl, open: Boolean(anchorEl), onClose: handleClose, children: [_jsxs(MenuItem, { onClick: handleCopyAddress, children: [_jsx(ContentCopyIcon, {}), t(`button.copyAddress`)] }), _jsxs(MenuItem, { component: "a", onClick: handleClose, href: `${chain?.metamask.blockExplorerUrls[0]}address/${account.address}`, target: "_blank", children: [_jsx(OpenInNewIcon, {}), t(`button.viewOnExplorer`)] }), _jsx(Button, { onClick: handleDisconnect, fullWidth: true, startIcon: _jsx(PowerSettingsNewIcon, {}), sx: {
                            marginTop: 1,
                        }, children: t(`button.disconnect`) })] })] }));
};
