"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletMenuButton = exports.WalletHeader = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ContentCopyRounded_1 = require("@mui/icons-material/ContentCopyRounded");
const ExpandMore_1 = require("@mui/icons-material/ExpandMore");
const OpenInNewRounded_1 = require("@mui/icons-material/OpenInNewRounded");
const PowerSettingsNewRounded_1 = require("@mui/icons-material/PowerSettingsNewRounded");
const Wallet_1 = require("@mui/icons-material/Wallet");
const material_1 = require("@mui/material");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_router_dom_1 = require("react-router-dom");
const hooks_1 = require("../../hooks");
const providers_1 = require("../../providers");
const utils_1 = require("../../utils");
const Header_style_1 = require("./Header.style");
const WalletMenu_1 = require("./WalletMenu");
const WalletHeader = () => {
    return ((0, jsx_runtime_1.jsx)(Header_style_1.HeaderAppBar, { sx: { justifyContent: 'flex-end' }, children: (0, jsx_runtime_1.jsx)(exports.WalletMenuButton, {}) }));
};
exports.WalletHeader = WalletHeader;
const WalletMenuButton = () => {
    const { account } = (0, providers_1.useWallet)();
    const { variant } = (0, providers_1.useWidgetConfig)();
    if (variant === 'drawer') {
        return ((0, jsx_runtime_1.jsx)(Header_style_1.DrawerWalletContainer, { children: account.isActive ? (0, jsx_runtime_1.jsx)(ConnectedButton, {}) : (0, jsx_runtime_1.jsx)(ConnectButton, {}) }));
    }
    return account.isActive ? (0, jsx_runtime_1.jsx)(ConnectedButton, {}) : (0, jsx_runtime_1.jsx)(ConnectButton, {});
};
exports.WalletMenuButton = WalletMenuButton;
const ConnectButton = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const { pathname } = (0, react_router_dom_1.useLocation)();
    const { walletManagement, subvariant, variant } = (0, providers_1.useWidgetConfig)();
    const { connect: connectWallet } = (0, providers_1.useWallet)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const connect = async () => {
        if (walletManagement) {
            await connectWallet();
            return;
        }
        navigate(utils_1.navigationRoutes.selectWallet);
    };
    return ((0, jsx_runtime_1.jsx)(Header_style_1.WalletButton, { endIcon: variant !== 'drawer' && subvariant !== 'split' ? ((0, jsx_runtime_1.jsx)(Wallet_1.default, {})) : undefined, startIcon: variant === 'drawer' || subvariant === 'split' ? ((0, jsx_runtime_1.jsx)(Wallet_1.default, { sx: { marginLeft: -0.25 } })) : undefined, onClick: !pathname.includes(utils_1.navigationRoutes.selectWallet) ? connect : undefined, sx: {
            marginRight: subvariant === 'split' ? 0 : -1.25,
            marginLeft: subvariant === 'split' ? -1.25 : 0,
        }, children: t(`button.connectWallet`) }));
};
const ConnectedButton = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const { subvariant } = (0, providers_1.useWidgetConfig)();
    const { account, disconnect } = (0, providers_1.useWallet)();
    const walletAddress = (0, utils_1.shortenAddress)(account.address);
    const { chain } = (0, hooks_1.useChain)(account.chainId);
    const [anchorEl, setAnchorEl] = (0, react_1.useState)(null);
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
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Header_style_1.WalletButton, { endIcon: (0, jsx_runtime_1.jsx)(ExpandMore_1.default, {}), startIcon: (0, jsx_runtime_1.jsx)(material_1.Avatar, { src: chain?.logoURI, alt: chain?.key, sx: { width: 24, height: 24 }, children: chain?.name[0] }), sx: {
                    marginRight: subvariant === 'split' ? 0 : -1.25,
                    marginLeft: subvariant === 'split' ? -1 : 0,
                }, onClick: handleClick, children: walletAddress }), (0, jsx_runtime_1.jsxs)(WalletMenu_1.WalletMenu, { anchorEl: anchorEl, open: Boolean(anchorEl), onClose: handleClose, children: [(0, jsx_runtime_1.jsxs)(material_1.MenuItem, { onClick: handleCopyAddress, children: [(0, jsx_runtime_1.jsx)(ContentCopyRounded_1.default, {}), t(`button.copyAddress`)] }), (0, jsx_runtime_1.jsxs)(material_1.MenuItem, { component: "a", onClick: handleClose, href: `${chain?.metamask.blockExplorerUrls[0]}address/${account.address}`, target: "_blank", children: [(0, jsx_runtime_1.jsx)(OpenInNewRounded_1.default, {}), t(`button.viewOnExplorer`)] }), (0, jsx_runtime_1.jsx)(material_1.Button, { onClick: handleDisconnect, fullWidth: true, startIcon: (0, jsx_runtime_1.jsx)(PowerSettingsNewRounded_1.default, {}), sx: {
                            marginTop: 1,
                        }, children: t(`button.disconnect`) })] })] }));
};
