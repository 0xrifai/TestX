"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsuranceCollapsed = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const hooks_1 = require("../../hooks");
const stores_1 = require("../../stores");
const utils_1 = require("../../utils");
const InsuranceCard_1 = require("./InsuranceCard");
const InsuranceCollapsed = ({ status, insurableRouteId, onChange, ...props }) => {
    const setExecutableRoute = (0, stores_1.useSetExecutableRoute)();
    const routeExecution = (0, stores_1.useRouteExecutionStore)((state) => state.routes[insurableRouteId]);
    const { routes } = (0, hooks_1.useRoutes)({
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
    return ((0, jsx_runtime_1.jsx)(material_1.Collapse, { timeout: 225, in: insuredRoute.insurance.state === 'INSURED', unmountOnExit: true, mountOnEnter: true, appear: status === stores_1.RouteExecutionStatus.Idle, children: (0, jsx_runtime_1.jsx)(InsuranceCard_1.InsuranceCard, { ...props, status: status, insuredAmount: (0, utils_1.formatTokenAmount)(insuredRoute.toAmountMin, insuredRoute.toToken.decimals), insuredTokenSymbol: insuredRoute.toToken.symbol, onChange: toggleInsurance }) }));
};
exports.InsuranceCollapsed = InsuranceCollapsed;
