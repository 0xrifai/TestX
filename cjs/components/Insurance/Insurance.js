"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Insurance = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const stores_1 = require("../../stores");
const InsuranceCard_1 = require("./InsuranceCard");
const InsuranceCollapsed_1 = require("./InsuranceCollapsed");
const Insurance = ({ status, insurableRouteId, onChange, ...props }) => {
    return status === stores_1.RouteExecutionStatus.Idle ? ((0, jsx_runtime_1.jsx)(InsuranceCollapsed_1.InsuranceCollapsed, { status: status, insurableRouteId: insurableRouteId, onChange: onChange, ...props })) : ((0, jsx_runtime_1.jsx)(InsuranceCard_1.InsuranceCard, { status: status, ...props }));
};
exports.Insurance = Insurance;
