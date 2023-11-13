"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStepList = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const StepDivider_1 = require("../../components/StepDivider");
const Step_1 = require("./Step");
const getStepList = (route, subvariant) => route?.steps.map((step, index, steps) => {
    const lastIndex = steps.length - 1;
    const fromToken = index === 0
        ? { ...step.action.fromToken, amount: step.action.fromAmount }
        : undefined;
    const toToken = index === lastIndex
        ? {
            ...(step.execution?.toToken ?? step.action?.toToken),
            amount: step.execution?.toAmount
                ? step.execution.toAmount
                : subvariant === 'nft'
                    ? route.toAmount
                    : step.estimate.toAmount,
        }
        : undefined;
    const toAddress = index === lastIndex && route.fromAddress !== route.toAddress
        ? route.toAddress
        : undefined;
    return ((0, jsx_runtime_1.jsxs)(react_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Step_1.Step, { step: step, fromToken: fromToken, toToken: toToken, toAddress: toAddress }), steps.length > 1 && index !== steps.length - 1 ? ((0, jsx_runtime_1.jsx)(StepDivider_1.StepDivider, {})) : null] }, step.id));
});
exports.getStepList = getStepList;
