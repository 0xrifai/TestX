"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = exports.HeaderContainer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const hooks_1 = require("../../hooks");
const providers_1 = require("../../providers");
const utils_1 = require("../../utils");
const Header_style_1 = require("./Header.style");
const NavigationHeader_1 = require("./NavigationHeader");
const WalletHeader_1 = require("./WalletHeader");
const HeaderContainer = ({ children }) => {
    const { pathname } = (0, react_router_dom_1.useLocation)();
    const elementId = (0, hooks_1.useDefaultElementId)();
    return ((0, jsx_runtime_1.jsx)(Header_style_1.Container, { id: (0, utils_1.createElementId)(utils_1.ElementId.Header, elementId), sticky: utils_1.stickyHeaderRoutes.some((route) => pathname.includes(route)), children: children }));
};
exports.HeaderContainer = HeaderContainer;
const Header = () => {
    const { walletManagement, subvariant } = (0, providers_1.useWidgetConfig)();
    return ((0, jsx_runtime_1.jsxs)(exports.HeaderContainer, { children: [!walletManagement && subvariant !== 'split' ? (0, jsx_runtime_1.jsx)(WalletHeader_1.WalletHeader, {}) : null, (0, jsx_runtime_1.jsx)(NavigationHeader_1.NavigationHeader, {})] }));
};
exports.Header = Header;
