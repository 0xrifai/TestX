import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLocation } from 'react-router-dom';
import { useDefaultElementId } from '../../hooks';
import { useWidgetConfig } from '../../providers';
import { ElementId, createElementId, stickyHeaderRoutes } from '../../utils';
import { Container } from './Header.style';
import { NavigationHeader } from './NavigationHeader';
import { WalletHeader } from './WalletHeader';
export const HeaderContainer = ({ children }) => {
    const { pathname } = useLocation();
    const elementId = useDefaultElementId();
    return (_jsx(Container, { id: createElementId(ElementId.Header, elementId), sticky: stickyHeaderRoutes.some((route) => pathname.includes(route)), children: children }));
};
export const Header = () => {
    const { walletManagement, subvariant } = useWidgetConfig();
    return (_jsxs(HeaderContainer, { children: [!walletManagement && subvariant !== 'split' ? _jsx(WalletHeader, {}) : null, _jsx(NavigationHeader, {})] }));
};
