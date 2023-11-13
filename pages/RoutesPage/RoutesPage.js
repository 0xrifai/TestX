import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from 'react';
import { ProgressToNextUpdate } from '../../components/ProgressToNextUpdate';
import { RouteCard, RouteCardSkeleton, RouteNotFoundCard, } from '../../components/RouteCard';
import { useNavigateBack, useRoutes } from '../../hooks';
import { useHeaderStoreContext, useSetExecutableRoute } from '../../stores';
import { navigationRoutes } from '../../utils';
import { Stack } from './RoutesPage.style';
export const RoutesPage = () => {
    const { navigateBack, navigate } = useNavigateBack();
    const { routes, isLoading, isFetching, dataUpdatedAt, refetchTime, refetch } = useRoutes();
    const setExecutableRoute = useSetExecutableRoute();
    const headerStoreContext = useHeaderStoreContext();
    const handleRouteClick = (route) => {
        setExecutableRoute(route);
        navigate(navigationRoutes.transactionExecution, {
            state: { routeId: route.id },
        });
    };
    useEffect(() => {
        if (!routes?.length && !isLoading && !isFetching) {
            navigateBack();
        }
        // redirect to the home page if no routes are found on page reload
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        return headerStoreContext
            .getState()
            .setAction(_jsx(ProgressToNextUpdate, { updatedAt: dataUpdatedAt || new Date().getTime(), timeToUpdate: refetchTime, isLoading: isFetching, onClick: () => refetch(), sx: { marginRight: -1 }, size: "medium", edge: "end" }));
    }, [dataUpdatedAt, headerStoreContext, isFetching, refetch, refetchTime]);
    const routeNotFound = !routes?.length && !isLoading && !isFetching;
    return (_jsx(Stack, { direction: "column", spacing: 2, flex: 1, children: routeNotFound ? (_jsx(RouteNotFoundCard, {})) : isLoading ? (Array.from({ length: 3 }).map((_, index) => (_jsx(RouteCardSkeleton, {}, index)))) : (routes?.map((route, index) => (_jsx(RouteCard, { route: route, onClick: () => handleRouteClick(route), active: index === 0, expanded: routes?.length <= 2 }, route.id)))) }));
};
