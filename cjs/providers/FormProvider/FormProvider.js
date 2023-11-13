"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormProvider = exports.formDefaultValues = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_hook_form_1 = require("react-hook-form");
const WidgetProvider_1 = require("../WidgetProvider");
const FormUpdater_1 = require("./FormUpdater");
const types_1 = require("./types");
exports.formDefaultValues = {
    [types_1.FormKey.FromAmount]: '',
    [types_1.FormKey.ToAddress]: '',
    [types_1.FormKey.TokenSearchFilter]: '',
    [types_1.FormKey.ContractOutputsToken]: '',
    [types_1.FormKey.ToContractAddress]: '',
    [types_1.FormKey.ToContractCallData]: '',
    [types_1.FormKey.ToContractGasLimit]: '',
    [types_1.FormKey.ToAmount]: '',
};
const FormProvider = ({ children, }) => {
    const { fromChain, fromToken, fromAmount, toChain, toToken, toAddress } = (0, WidgetProvider_1.useWidgetConfig)();
    const defaultValues = (0, react_1.useMemo)(() => ({
        ...exports.formDefaultValues,
        fromChain,
        fromToken,
        fromAmount: (typeof fromAmount === 'number'
            ? fromAmount?.toPrecision()
            : fromAmount) || exports.formDefaultValues.fromAmount,
        toChain,
        toToken,
        toAddress: toAddress || exports.formDefaultValues.toAddress,
    }), [fromAmount, fromChain, fromToken, toAddress, toChain, toToken]);
    const methods = (0, react_hook_form_1.useForm)({
        // values,
        defaultValues,
    });
    return ((0, jsx_runtime_1.jsxs)(react_hook_form_1.FormProvider, { ...methods, children: [(0, jsx_runtime_1.jsx)(FormUpdater_1.FormUpdater, { defaultValues: defaultValues }), children] }));
};
exports.FormProvider = FormProvider;
