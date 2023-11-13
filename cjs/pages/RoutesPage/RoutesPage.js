"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesPage = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ProgressToNextUpdate_1 = require("../../components/ProgressToNextUpdate");
const RouteCard_1 = require("../../components/RouteCard");
const hooks_1 = require("../../hooks");
const stores_1 = require("../../stores");
const utils_1 = require("../../utils");
const RoutesPage_style_1 = require("./RoutesPage.style");
const RoutesPage = () => {
    const { navigateBack, navigate } = (0, hooks_1.useNavigateBack)();
    const { routes, isLoading, isFetching, dataUpdatedAt, refetchTime, refetch } = (0, hooks_1.useRoutes)();
    const setExecutableRoute = (0, stores_1.useSetExecutableRoute)();
    const headerStoreContext = (0, stores_1.useHeaderStoreContext)();
    const handleRouteClick = (route) => {
        setExecutableRoute(route);
        navigate(utils_1.navigationRoutes.transactionExecution, {
            state: { routeId: route.id },
        });
    };
    (0, react_1.useEffect)(() => {
        if (!routes?.length && !isLoading && !isFetching) {
            navigateBack();
        }
        // redirect to the home page if no routes are found on page reload
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    (0, react_1.useEffect)(() => {
        return headerStoreContext
            .getState()
            .setAction((0, jsx_runtime_1.jsx)(ProgressToNextUpdate_1.ProgressToNextUpdate, { updatedAt: dataUpdatedAt || new Date().getTime(), timeToUpdate: refetchTime, isLoading: isFetching, onClick: () => refetch(), sx: { marginRight: -1 }, size: "medium", edge: "end" }));
    }, [dataUpdatedAt, headerStoreContext, isFetching, refetch, refetchTime]);
    const routeNotFound = !routes?.length && !isLoading && !isFetching;
    return ((0, jsx_runtime_1.jsx)(RoutesPage_style_1.Stack, { direction: "column", spacing: 2, flex: 1, children: routeNotFound ? ((0, jsx_runtime_1.jsx)(RouteCard_1.RouteNotFoundCard, {})) : isLoading ? (Array.from({ length: 3 }).map((_, index) => ((0, jsx_runtime_1.jsx)(RouteCard_1.RouteCardSkeleton, {}, index)))) : (routes?.map((route, index) => ((0, jsx_runtime_1.jsx)(RouteCard_1.RouteCard, { route: route, onClick: () => handleRouteClick(route), active: index === 0, expanded: routes?.length <= 2 }, route.id)))) }));
};
exports.RoutesPage = RoutesPage;
