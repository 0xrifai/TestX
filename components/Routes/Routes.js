import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Button, Collapse } from '@mui/material';
import { useFormState } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useRoutes } from '../../hooks';
import { useWidgetConfig } from '../../providers';
import { navigationRoutes } from '../../utils';
import { Card, CardTitle } from '../Card';
import { ProgressToNextUpdate } from '../ProgressToNextUpdate';
import { RouteCard, RouteCardSkeleton, RouteNotFoundCard } from '../RouteCard';
export const Routes = (props) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { subvariant, useRecommendedRoute } = useWidgetConfig();
    const { isValid, isValidating } = useFormState();
    const { routes, isLoading, isFetching, isFetched, dataUpdatedAt, refetchTime, refetch, } = useRoutes();
    const currentRoute = routes?.[0];
    if (!currentRoute && !isLoading && !isFetching && !isFetched) {
        return null;
    }
    const handleCardClick = () => {
        navigate(navigationRoutes.routes);
    };
    const routeNotFound = !currentRoute && !isLoading && !isFetching;
    const onlyRecommendedRoute = subvariant === 'refuel' || useRecommendedRoute;
    const showAll = !onlyRecommendedRoute && !routeNotFound && (routes?.length ?? 0) > 1;
    return (_jsxs(Card, { ...props, children: [_jsx(CardTitle, { children: subvariant === 'nft' ? t('main.fromAmount') : t('header.youGet') }), _jsx(ProgressToNextUpdate, { updatedAt: dataUpdatedAt || new Date().getTime(), timeToUpdate: refetchTime, isLoading: isFetching, onClick: () => refetch(), sx: {
                    position: 'absolute',
                    top: 8,
                    right: 8,
                } }), _jsxs(Box, { p: 2, children: [isLoading ? (_jsx(RouteCardSkeleton, { variant: "cardless" })) : !currentRoute ? (_jsx(RouteNotFoundCard, {})) : (_jsx(RouteCard, { route: currentRoute, variant: "cardless", active: true })), _jsx(Collapse, { timeout: 225, in: showAll, unmountOnExit: true, mountOnEnter: true, appear: true, children: _jsx(Box, { mt: 2, children: _jsx(Button, { onClick: handleCardClick, disabled: isValidating || !isValid, fullWidth: true, children: t('button.showAll') }) }) })] })] }));
};
