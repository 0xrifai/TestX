import { jsx as _jsx } from "react/jsx-runtime";
import { BaseTransactionButton } from '../../components/BaseTransactionButton';
import { useFromTokenSufficiency, useGasSufficiency, useRoutes, } from '../../hooks';
import { useRouteExecutionStore } from '../../stores';
export const StartTransactionButton = ({ onClick, route, text, loading, }) => {
    const { insufficientGas, isInitialLoading: isGasSufficiencyLoading } = useGasSufficiency(route);
    const { insufficientFromToken, isInitialLoading: isFromTokenSufficiencyLoading, } = useFromTokenSufficiency(route);
    const shouldDisableButton = insufficientFromToken || !!insufficientGas?.length;
    return (_jsx(BaseTransactionButton, { onClick: onClick, text: text, disabled: shouldDisableButton, loading: isFromTokenSufficiencyLoading || isGasSufficiencyLoading || loading }));
};
export const StartInsurableTransactionButton = ({ onClick, text, route, loading, disabled, insurableRouteId }) => {
    const routeExecution = useRouteExecutionStore((state) => state.routes[insurableRouteId]);
    const { isFetching } = useRoutes({
        insurableRoute: routeExecution?.route,
    });
    return (_jsx(StartTransactionButton, { onClick: onClick, text: text, route: route, disabled: disabled, loading: loading || isFetching, insurableRouteId: insurableRouteId }));
};
