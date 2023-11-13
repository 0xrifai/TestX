import { jsx as _jsx } from "react/jsx-runtime";
import { RouteExecutionStatus } from '../../stores';
import { InsuranceCard } from './InsuranceCard';
import { InsuranceCollapsed } from './InsuranceCollapsed';
export const Insurance = ({ status, insurableRouteId, onChange, ...props }) => {
    return status === RouteExecutionStatus.Idle ? (_jsx(InsuranceCollapsed, { status: status, insurableRouteId: insurableRouteId, onChange: onChange, ...props })) : (_jsx(InsuranceCard, { status: status, ...props }));
};
