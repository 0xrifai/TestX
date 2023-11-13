import { jsx as _jsx } from "react/jsx-runtime";
import { Collapse } from '@mui/material';
import { useRoutes } from '../../hooks';
import { RouteExecutionStatus, useRouteExecutionStore, useSetExecutableRoute, } from '../../stores';
import { formatTokenAmount } from '../../utils';
import { InsuranceCard } from './InsuranceCard';
export const InsuranceCollapsed = ({ status, insurableRouteId, onChange, ...props }) => {
    const setExecutableRoute = useSetExecutableRoute();
    const routeExecution = useRouteExecutionStore((state) => state.routes[insurableRouteId]);
    const { routes } = useRoutes({
        insurableRoute: routeExecution?.route,
    });
    const insuredRoute = routes?.[0];
    const toggleInsurance = (checked) => {
        if (insuredRoute) {
            if (checked) {
                setExecutableRoute(insuredRoute, insurableRouteId);
            }
            onChange?.(checked ? insuredRoute.id : insurableRouteId);
        }
    };
    if (!insuredRoute) {
        return null;
    }
    return (_jsx(Collapse, { timeout: 225, in: insuredRoute.insurance.state === 'INSURED', unmountOnExit: true, mountOnEnter: true, appear: status === RouteExecutionStatus.Idle, children: _jsx(InsuranceCard, { ...props, status: status, insuredAmount: formatTokenAmount(insuredRoute.toAmountMin, insuredRoute.toToken.decimals), insuredTokenSymbol: insuredRoute.toToken.symbol, onChange: toggleInsurance }) }));
};
