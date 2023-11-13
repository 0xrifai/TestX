"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartInsurableTransactionButton = exports.StartTransactionButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const BaseTransactionButton_1 = require("../../components/BaseTransactionButton");
const hooks_1 = require("../../hooks");
const stores_1 = require("../../stores");
const StartTransactionButton = ({ onClick, route, text, loading, }) => {
    const { insufficientGas, isInitialLoading: isGasSufficiencyLoading } = (0, hooks_1.useGasSufficiency)(route);
    const { insufficientFromToken, isInitialLoading: isFromTokenSufficiencyLoading, } = (0, hooks_1.useFromTokenSufficiency)(route);
    const shouldDisableButton = insufficientFromToken || !!insufficientGas?.length;
    return ((0, jsx_runtime_1.jsx)(BaseTransactionButton_1.BaseTransactionButton, { onClick: onClick, text: text, disabled: shouldDisableButton, loading: isFromTokenSufficiencyLoading || isGasSufficiencyLoading || loading }));
};
exports.StartTransactionButton = StartTransactionButton;
const StartInsurableTransactionButton = ({ onClick, text, route, loading, disabled, insurableRouteId }) => {
    const routeExecution = (0, stores_1.useRouteExecutionStore)((state) => state.routes[insurableRouteId]);
    const { isFetching } = (0, hooks_1.useRoutes)({
        insurableRoute: routeExecution?.route,
    });
    return ((0, jsx_runtime_1.jsx)(exports.StartTransactionButton, { onClick: onClick, text: text, route: route, disabled: disabled, loading: loading || isFetching, insurableRouteId: insurableRouteId }));
};
exports.StartInsurableTransactionButton = StartInsurableTransactionButton;
