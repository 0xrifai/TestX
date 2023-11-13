"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GasMessage = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const hooks_1 = require("../../hooks");
const FundsSufficiencyMessage_1 = require("./FundsSufficiencyMessage");
const GasSufficiencyMessage_1 = require("./GasSufficiencyMessage");
const GasMessage = ({ route, ...props }) => {
    const { insufficientGas } = (0, hooks_1.useGasSufficiency)(route);
    const { insufficientFromToken } = (0, hooks_1.useFromTokenSufficiency)(route);
    const validInsufficientGas = insufficientGas?.length;
    return ((0, jsx_runtime_1.jsx)(material_1.Collapse, { timeout: 225, in: Boolean(insufficientFromToken || validInsufficientGas), unmountOnExit: true, mountOnEnter: true, children: (0, jsx_runtime_1.jsx)(material_1.Box, { ...props, children: insufficientFromToken ? ((0, jsx_runtime_1.jsx)(FundsSufficiencyMessage_1.FundsSufficiencyMessage, {})) : validInsufficientGas ? ((0, jsx_runtime_1.jsx)(GasSufficiencyMessage_1.GasSufficiencyMessage, { insufficientGas: insufficientGas })) : null }) }));
};
exports.GasMessage = GasMessage;
