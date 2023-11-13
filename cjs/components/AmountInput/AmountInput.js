"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmountInputBase = exports.AmountInput = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_hook_form_1 = require("react-hook-form");
const react_i18next_1 = require("react-i18next");
const hooks_1 = require("../../hooks");
const providers_1 = require("../../providers");
const types_1 = require("../../types");
const utils_1 = require("../../utils");
const Card_1 = require("../Card");
const AmountInput_style_1 = require("./AmountInput.style");
const AmountInputEndAdornment_1 = require("./AmountInputEndAdornment");
const AmountInputStartAdornment_1 = require("./AmountInputStartAdornment");
const FormPriceHelperText_1 = require("./FormPriceHelperText");
const AmountInput = ({ formType, ...props }) => {
    const { disabledUI } = (0, providers_1.useWidgetConfig)();
    const [chainId, tokenAddress] = (0, react_hook_form_1.useWatch)({
        name: [
            providers_1.FormKeyHelper.getChainKey(formType),
            providers_1.FormKeyHelper.getTokenKey(formType),
        ],
    });
    const { token } = (0, hooks_1.useToken)(chainId, tokenAddress);
    const disabled = disabledUI?.includes(types_1.DisabledUI.FromAmount);
    return ((0, jsx_runtime_1.jsx)(exports.AmountInputBase, { formType: formType, token: token, startAdornment: (0, jsx_runtime_1.jsx)(AmountInputStartAdornment_1.AmountInputStartAdornment, { formType: formType }), endAdornment: !disabled ? (0, jsx_runtime_1.jsx)(AmountInputEndAdornment_1.AmountInputEndAdornment, { formType: formType }) : undefined, bottomAdornment: (0, jsx_runtime_1.jsx)(FormPriceHelperText_1.FormPriceHelperText, { formType: formType }), disabled: disabled, ...props }));
};
exports.AmountInput = AmountInput;
const AmountInputBase = ({ formType, token, startAdornment, endAdornment, bottomAdornment, disabled, ...props }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const amountKey = providers_1.FormKeyHelper.getAmountKey(formType);
    const { field: { onChange, onBlur, value }, } = (0, react_hook_form_1.useController)({
        name: amountKey,
    });
    const ref = (0, react_1.useRef)(null);
    const handleChange = (event) => {
        const { value } = event.target;
        const formattedAmount = (0, utils_1.formatInputAmount)(value, token?.decimals, true);
        onChange(formattedAmount);
    };
    const handleBlur = (event) => {
        const { value } = event.target;
        const formattedAmount = (0, utils_1.formatInputAmount)(value, token?.decimals);
        onChange(formattedAmount);
        onBlur();
    };
    (0, react_1.useLayoutEffect)(() => {
        if (ref.current) {
            (0, utils_1.fitInputText)(AmountInput_style_1.maxInputFontSize, AmountInput_style_1.minInputFontSize, ref.current);
        }
    }, [value, ref]);
    return ((0, jsx_runtime_1.jsxs)(Card_1.Card, { ...props, children: [(0, jsx_runtime_1.jsx)(Card_1.CardTitle, { children: t('main.fromAmount') }), (0, jsx_runtime_1.jsxs)(AmountInput_style_1.FormControl, { fullWidth: true, children: [(0, jsx_runtime_1.jsx)(AmountInput_style_1.Input, { inputRef: ref, size: "small", autoComplete: "off", placeholder: "0", startAdornment: startAdornment, endAdornment: endAdornment, inputProps: {
                            inputMode: 'decimal',
                        }, onChange: handleChange, onBlur: handleBlur, value: value, name: amountKey, disabled: disabled, required: true }), bottomAdornment] })] }));
};
exports.AmountInputBase = AmountInputBase;
