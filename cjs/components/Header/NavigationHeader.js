"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationHeader = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ArrowBack_1 = require("@mui/icons-material/ArrowBack");
const ReceiptLong_1 = require("@mui/icons-material/ReceiptLong");
const material_1 = require("@mui/material");
const react_i18next_1 = require("react-i18next");
const react_router_dom_1 = require("react-router-dom");
const hooks_1 = require("../../hooks");
const providers_1 = require("../../providers");
const stores_1 = require("../../stores");
const types_1 = require("../../types");
const utils_1 = require("../../utils");
const Header_style_1 = require("./Header.style");
const NavigationTabs_1 = require("./NavigationTabs");
const WalletHeader_1 = require("./WalletHeader");
const Setting_1 = require("../../Dialog/Setting");
const NavigationHeader = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const { subvariant, hiddenUI, variant } = (0, providers_1.useWidgetConfig)();
    const { navigate, navigateBack } = (0, hooks_1.useNavigateBack)();
    const { account } = (0, providers_1.useWallet)();
    const { element, title } = (0, stores_1.useHeaderStore)((state) => state);
    const { pathname } = (0, react_router_dom_1.useLocation)();
    const cleanedPathname = pathname.endsWith('/')
        ? pathname.slice(0, -1)
        : pathname;
    const path = cleanedPathname.substring(cleanedPathname.lastIndexOf('/') + 1);
    const hasPath = utils_1.navigationRoutesValues.includes(path);
    const splitSubvariant = subvariant === 'split' && !hasPath;
    const handleHeaderTitle = () => {
        switch (path) {
            case utils_1.navigationRoutes.selectWallet:
                return t(`header.selectWallet`);
            case utils_1.navigationRoutes.settings:
                return t(`header.settings`);
            case utils_1.navigationRoutes.bridges:
                return t(`settings.enabledBridges`);
            case utils_1.navigationRoutes.exchanges:
                return t(`settings.enabledExchanges`);
            case utils_1.navigationRoutes.transactionHistory:
                return t(`header.transactionHistory`);
            case utils_1.navigationRoutes.fromToken: {
                if (subvariant === 'nft') {
                    return t(`header.payWith`);
                }
                return t(`header.from`);
            }
            case utils_1.navigationRoutes.toToken:
                return t(`header.to`);
            case utils_1.navigationRoutes.fromChain:
            case utils_1.navigationRoutes.toChain:
            case utils_1.navigationRoutes.toTokenNative:
                return t(`header.selectChain`);
            case utils_1.navigationRoutes.routes:
                return t(`header.youGet`);
            case utils_1.navigationRoutes.activeTransactions:
                return t(`header.activeTransactions`);
            case utils_1.navigationRoutes.transactionExecution: {
                if (subvariant === 'nft') {
                    return t(`header.purchase`);
                }
                return t(`header.exchange`);
            }
            case utils_1.navigationRoutes.transactionDetails: {
                if (subvariant === 'nft') {
                    return t(`header.purchaseDetails`);
                }
                return t(`header.transactionDetails`);
            }
            default: {
                switch (subvariant) {
                    case 'nft':
                        return t(`header.checkout`);
                    case 'refuel':
                        return t(`header.gas`);
                    default:
                        return t(`header.exchange`);
                }
            }
        }
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(Header_style_1.HeaderAppBar, { children: [utils_1.backButtonRoutes.includes(path) ? ((0, jsx_runtime_1.jsx)(material_1.IconButton, { size: "medium", edge: "start", onClick: navigateBack, children: (0, jsx_runtime_1.jsx)(ArrowBack_1.default, {}) })) : null, splitSubvariant ? ((0, jsx_runtime_1.jsx)(material_1.Box, { flex: 1, children: !hiddenUI?.includes(types_1.HiddenUI.WalletMenu) ? ((0, jsx_runtime_1.jsx)(WalletHeader_1.WalletMenuButton, {})) : null })) : ((0, jsx_runtime_1.jsx)(material_1.Typography, { fontSize: hasPath ? 18 : 24, align: hasPath ? 'center' : 'left', fontWeight: "700", flex: 1, noWrap: true, children: title || handleHeaderTitle() })), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: utils_1.navigationRoutes.home, element: (0, jsx_runtime_1.jsxs)(material_1.Box, { paddingRight: variant === 'drawer' && subvariant === 'split' ? 5 : 0, children: [account.isActive && !hiddenUI?.includes(types_1.HiddenUI.History) ? ((0, jsx_runtime_1.jsx)(material_1.Tooltip, { title: t(`header.transactionHistory`), enterDelay: 400, arrow: true, children: (0, jsx_runtime_1.jsx)(material_1.IconButton, { size: "medium", edge: "start", onClick: () => navigate(utils_1.navigationRoutes.transactionHistory), children: (0, jsx_runtime_1.jsx)(ReceiptLong_1.default, {}) }) })) : null, (0, jsx_runtime_1.jsx)(Setting_1.Settings, {})] }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "*", element: element || (0, jsx_runtime_1.jsx)(material_1.Box, { width: 28, height: 40 }) })] })] }), splitSubvariant ? (0, jsx_runtime_1.jsx)(NavigationTabs_1.NavigationTabs, {}) : null] }));
};
exports.NavigationHeader = NavigationHeader;
