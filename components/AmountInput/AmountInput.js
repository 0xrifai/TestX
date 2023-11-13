import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLayoutEffect, useRef } from 'react';
import { useController, useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useToken } from '../../hooks';
import { FormKeyHelper, useWidgetConfig } from '../../providers';
import { DisabledUI } from '../../types';
import { fitInputText, formatInputAmount } from '../../utils';
import { Card, CardTitle } from '../Card';
import { FormControl, Input, maxInputFontSize, minInputFontSize, } from './AmountInput.style';
import { AmountInputEndAdornment } from './AmountInputEndAdornment';
import { AmountInputStartAdornment } from './AmountInputStartAdornment';
import { FormPriceHelperText } from './FormPriceHelperText';
export const AmountInput = ({ formType, ...props }) => {
    const { disabledUI } = useWidgetConfig();
    const [chainId, tokenAddress] = useWatch({
        name: [
            FormKeyHelper.getChainKey(formType),
            FormKeyHelper.getTokenKey(formType),
        ],
    });
    const { token } = useToken(chainId, tokenAddress);
    const disabled = disabledUI?.includes(DisabledUI.FromAmount);
    return (_jsx(AmountInputBase, { formType: formType, token: token, startAdornment: _jsx(AmountInputStartAdornment, { formType: formType }), endAdornment: !disabled ? _jsx(AmountInputEndAdornment, { formType: formType }) : undefined, bottomAdornment: _jsx(FormPriceHelperText, { formType: formType }), disabled: disabled, ...props }));
};
export const AmountInputBase = ({ formType, token, startAdornment, endAdornment, bottomAdornment, disabled, ...props }) => {
    const { t } = useTranslation();
    const amountKey = FormKeyHelper.getAmountKey(formType);
    const { field: { onChange, onBlur, value }, } = useController({
        name: amountKey,
    });
    const ref = useRef(null);
    const handleChange = (event) => {
        const { value } = event.target;
        const formattedAmount = formatInputAmount(value, token?.decimals, true);
        onChange(formattedAmount);
    };
    const handleBlur = (event) => {
        const { value } = event.target;
        const formattedAmount = formatInputAmount(value, token?.decimals);
        onChange(formattedAmount);
        onBlur();
    };
    useLayoutEffect(() => {
        if (ref.current) {
            fitInputText(maxInputFontSize, minInputFontSize, ref.current);
        }
    }, [value, ref]);
    return (_jsxs(Card, { ...props, children: [_jsx(CardTitle, { children: t('main.fromAmount') }), _jsxs(FormControl, { fullWidth: true, children: [_jsx(Input, { inputRef: ref, size: "small", autoComplete: "off", placeholder: "0", startAdornment: startAdornment, endAdornment: endAdornment, inputProps: {
                            inputMode: 'decimal',
                        }, onChange: handleChange, onBlur: handleBlur, value: value, name: amountKey, disabled: disabled, required: true }), bottomAdornment] })] }));
};
