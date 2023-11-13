"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesExpandedElement = exports.RoutesExpanded = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const react_hook_form_1 = require("react-hook-form");
const react_i18next_1 = require("react-i18next");
const react_router_dom_1 = require("react-router-dom");
const hooks_1 = require("../../hooks");
const providers_1 = require("../../providers");
const stores_1 = require("../../stores");
const utils_1 = require("../../utils");
const ProgressToNextUpdate_1 = require("../ProgressToNextUpdate");
const RouteCard_1 = require("../RouteCard");
const RoutesExpanded_style_1 = require("./RoutesExpanded.style");
const timeout = { enter: 225, exit: 225, appear: 0 };
const RoutesExpanded = () => {
    const element = (0, react_router_dom_1.useMatch)('/');
    return ((0, jsx_runtime_1.jsx)(RoutesExpanded_style_1.CollapseContainer, { children: (0, jsx_runtime_1.jsx)(material_1.Collapse, { timeout: timeout, in: !!element, orientation: "horizontal", children: (0, jsx_runtime_1.jsx)(material_1.Grow, { timeout: timeout, in: !!element, mountOnEnter: true, unmountOnExit: true, children: (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(exports.RoutesExpandedElement, {}) }) }) }) }));
};
exports.RoutesExpanded = RoutesExpanded;
const RoutesExpandedElement = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const setExecutableRoute = (0, stores_1.useSetExecutableRoute)();
    const { subvariant, containerStyle } = (0, providers_1.useWidgetConfig)();
    const { isValid, isValidating } = (0, react_hook_form_1.useFormState)();
    const { routes, isLoading, isFetching, isFetched, dataUpdatedAt, refetchTime, refetch, } = (0, hooks_1.useRoutes)();
    const currentRoute = routes?.[0];
    const handleRouteClick = (route) => {
        if (isValid && !isValidating) {
            setExecutableRoute(route);
            navigate(utils_1.navigationRoutes.transactionExecution, {
                state: { routeId: route.id },
            });
        }
    };
    const expanded = Boolean(currentRoute || isLoading || isFetching || isFetched);
    const routeNotFound = !currentRoute && !isLoading && !isFetching && expanded;
    return ((0, jsx_runtime_1.jsx)(material_1.Collapse, { timeout: timeout.enter, in: expanded, orientation: "horizontal", children: (0, jsx_runtime_1.jsx)(material_1.Grow, { timeout: timeout.enter, in: expanded, mountOnEnter: true, unmountOnExit: true, children: (0, jsx_runtime_1.jsx)(RoutesExpanded_style_1.Container, { sx: containerStyle, enableColorScheme: true, children: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(RoutesExpanded_style_1.Header, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { fontSize: 18, fontWeight: "700", flex: 1, noWrap: true, children: subvariant === 'nft'
                                        ? t('main.fromAmount')
                                        : t('header.youGet') }), (0, jsx_runtime_1.jsx)(ProgressToNextUpdate_1.ProgressToNextUpdate, { updatedAt: dataUpdatedAt || new Date().getTime(), timeToUpdate: refetchTime, isLoading: isFetching, onClick: () => refetch(), sx: { marginRight: -1 } })] }), (0, jsx_runtime_1.jsx)(material_1.Stack, { direction: "column", spacing: 2, flex: 1, 
                            // paddingX={3}
                            paddingBottom: 3, children: routeNotFound ? ((0, jsx_runtime_1.jsx)(RouteCard_1.RouteNotFoundCard, {})) : isLoading || (isFetching && !routes?.length) ? (Array.from({ length: 3 }).map((_, index) => ((0, jsx_runtime_1.jsx)(RouteCard_1.RouteCardSkeleton, {}, index)))) : (routes?.map((route, index) => ((0, jsx_runtime_1.jsx)(RouteCard_1.RouteCard, { route: route, onClick: () => handleRouteClick(route), active: index === 0, expanded: routes?.length <= 2 }, route.id)))) })] }) }) }) }));
};
exports.RoutesExpandedElement = RoutesExpandedElement;
