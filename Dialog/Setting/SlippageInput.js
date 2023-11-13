import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormControl, InputAdornment } from '@mui/material';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardTitle } from '../../components/Card';
import { Input } from '../../components/Input';
import { useSettings, useSettingsStore } from '../../stores';
import { formatSlippage } from '../../utils';
export const SlippageInput = () => {
    const { t } = useTranslation();
    const { slippage } = useSettings(['slippage']);
    const setValue = useSettingsStore((state) => state.setValue);
    const defaultValue = useRef(slippage);
    const handleChange = (event) => {
        const { value } = event.target;
        setValue('slippage', formatSlippage(value, defaultValue.current, true));
    };
    const handleBlur = (event) => {
        const { value } = event.target;
        setValue('slippage', formatSlippage(value, defaultValue.current));
    };
    const value = slippage ?? '';
    return (_jsxs(Card, { children: [_jsx(CardTitle, { children: t(`settings.slippage`) }), _jsx(FormControl, { fullWidth: true, children: _jsx(Input, { size: "small", placeholder: t(`settings.slippage`), endAdornment: _jsx(InputAdornment, { position: "end", children: "%" }), autoComplete: "off", inputProps: {
                        inputMode: 'decimal',
                    }, onChange: handleChange, onBlur: handleBlur, value: value }) })] }));
};
