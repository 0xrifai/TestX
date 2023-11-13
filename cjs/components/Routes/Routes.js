"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const react_hook_form_1 = require("react-hook-form");
const react_i18next_1 = require("react-i18next");
const react_router_dom_1 = require("react-router-dom");
const hooks_1 = require("../../hooks");
const providers_1 = require("../../providers");
const utils_1 = require("../../utils");
const Card_1 = require("../Card");
const ProgressToNextUpdate_1 = require("../ProgressToNextUpdate");
const RouteCard_1 = require("../RouteCard");
const Routes = (props) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { subvariant, useRecommendedRoute } = (0, providers_1.useWidgetConfig)();
    const { isValid, isValidating } = (0, react_hook_form_1.useFormState)();
    const { routes, isLoading, isFetching, isFetched, dataUpdatedAt, refetchTime, refetch, } = (0, hooks_1.useRoutes)();
    const currentRoute = routes?.[0];
    if (!currentRoute && !isLoading && !isFetching && !isFetched) {
        return null;
    }
    const handleCardClick = () => {
        navigate(utils_1.navigationRoutes.routes);
    };
    const routeNotFound = !currentRoute && !isLoading && !isFetching;
    const onlyRecommendedRoute = subvariant === 'refuel' || useRecommendedRoute;
    const showAll = !onlyRecommendedRoute && !routeNotFound && (routes?.length ?? 0) > 1;
    return ((0, jsx_runtime_1.jsxs)(Card_1.Card, { ...props, children: [(0, jsx_runtime_1.jsx)(Card_1.CardTitle, { children: subvariant === 'nft' ? t('main.fromAmount') : t('header.youGet') }), (0, jsx_runtime_1.jsx)(ProgressToNextUpdate_1.ProgressToNextUpdate, { updatedAt: dataUpdatedAt || new Date().getTime(), timeToUpdate: refetchTime, isLoading: isFetching, onClick: () => refetch(), sx: {
                    position: 'absolute',
                    top: 8,
                    right: 8,
                } }), (0, jsx_runtime_1.jsxs)(material_1.Box, { p: 2, children: [isLoading ? ((0, jsx_runtime_1.jsx)(RouteCard_1.RouteCardSkeleton, { variant: "cardless" })) : !currentRoute ? ((0, jsx_runtime_1.jsx)(RouteCard_1.RouteNotFoundCard, {})) : ((0, jsx_runtime_1.jsx)(RouteCard_1.RouteCard, { route: currentRoute, variant: "cardless", active: true })), (0, jsx_runtime_1.jsx)(material_1.Collapse, { timeout: 225, in: showAll, unmountOnExit: true, mountOnEnter: true, appear: true, children: (0, jsx_runtime_1.jsx)(material_1.Box, { mt: 2, children: (0, jsx_runtime_1.jsx)(material_1.Button, { onClick: handleCardClick, disabled: isValidating || !isValid, fullWidth: true, children: t('button.showAll') }) }) })] })] }));
};
exports.Routes = Routes;
