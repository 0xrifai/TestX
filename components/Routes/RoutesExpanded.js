import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Collapse, Grow, Stack, Typography } from '@mui/material';
import { useFormState } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useMatch, useNavigate } from 'react-router-dom';
import { useRoutes } from '../../hooks';
import { useWidgetConfig } from '../../providers';
import { useSetExecutableRoute } from '../../stores';
import { navigationRoutes } from '../../utils';
import { ProgressToNextUpdate } from '../ProgressToNextUpdate';
import { RouteCard, RouteCardSkeleton, RouteNotFoundCard } from '../RouteCard';
import { CollapseContainer, Container, Header, } from './RoutesExpanded.style';
const timeout = { enter: 225, exit: 225, appear: 0 };
export const RoutesExpanded = () => {
    const element = useMatch('/');
    return (_jsx(CollapseContainer, { children: _jsx(Collapse, { timeout: timeout, in: !!element, orientation: "horizontal", children: _jsx(Grow, { timeout: timeout, in: !!element, mountOnEnter: true, unmountOnExit: true, children: _jsx("div", { children: _jsx(RoutesExpandedElement, {}) }) }) }) }));
};
export const RoutesExpandedElement = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const setExecutableRoute = useSetExecutableRoute();
    const { subvariant, containerStyle } = useWidgetConfig();
    const { isValid, isValidating } = useFormState();
    const { routes, isLoading, isFetching, isFetched, dataUpdatedAt, refetchTime, refetch, } = useRoutes();
    const currentRoute = routes?.[0];
    const handleRouteClick = (route) => {
        if (isValid && !isValidating) {
            setExecutableRoute(route);
            navigate(navigationRoutes.transactionExecution, {
                state: { routeId: route.id },
            });
        }
    };
    const expanded = Boolean(currentRoute || isLoading || isFetching || isFetched);
    const routeNotFound = !currentRoute && !isLoading && !isFetching && expanded;
    return (_jsx(Collapse, { timeout: timeout.enter, in: expanded, orientation: "horizontal", children: _jsx(Grow, { timeout: timeout.enter, in: expanded, mountOnEnter: true, unmountOnExit: true, children: _jsx(Container, { sx: containerStyle, enableColorScheme: true, children: _jsxs(_Fragment, { children: [_jsxs(Header, { children: [_jsx(Typography, { fontSize: 18, fontWeight: "700", flex: 1, noWrap: true, children: subvariant === 'nft'
                                        ? t('main.fromAmount')
                                        : t('header.youGet') }), _jsx(ProgressToNextUpdate, { updatedAt: dataUpdatedAt || new Date().getTime(), timeToUpdate: refetchTime, isLoading: isFetching, onClick: () => refetch(), sx: { marginRight: -1 } })] }), _jsx(Stack, { direction: "column", spacing: 2, flex: 1, 
                            // paddingX={3}
                            paddingBottom: 3, children: routeNotFound ? (_jsx(RouteNotFoundCard, {})) : isLoading || (isFetching && !routes?.length) ? (Array.from({ length: 3 }).map((_, index) => (_jsx(RouteCardSkeleton, {}, index)))) : (routes?.map((route, index) => (_jsx(RouteCard, { route: route, onClick: () => handleRouteClick(route), active: index === 0, expanded: routes?.length <= 2 }, route.id)))) })] }) }) }) }));
};
