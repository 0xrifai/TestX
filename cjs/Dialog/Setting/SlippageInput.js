"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlippageInput = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const Card_1 = require("../../components/Card");
const Input_1 = require("../../components/Input");
const stores_1 = require("../../stores");
const utils_1 = require("../../utils");
const SlippageInput = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const { slippage } = (0, stores_1.useSettings)(['slippage']);
    const setValue = (0, stores_1.useSettingsStore)((state) => state.setValue);
    const defaultValue = (0, react_1.useRef)(slippage);
    const handleChange = (event) => {
        const { value } = event.target;
        setValue('slippage', (0, utils_1.formatSlippage)(value, defaultValue.current, true));
    };
    const handleBlur = (event) => {
        const { value } = event.target;
        setValue('slippage', (0, utils_1.formatSlippage)(value, defaultValue.current));
    };
    const value = slippage ?? '';
    return ((0, jsx_runtime_1.jsxs)(Card_1.Card, { children: [(0, jsx_runtime_1.jsx)(Card_1.CardTitle, { children: t(`settings.slippage`) }), (0, jsx_runtime_1.jsx)(material_1.FormControl, { fullWidth: true, children: (0, jsx_runtime_1.jsx)(Input_1.Input, { size: "small", placeholder: t(`settings.slippage`), endAdornment: (0, jsx_runtime_1.jsx)(material_1.InputAdornment, { position: "end", children: "%" }), autoComplete: "off", inputProps: {
                        inputMode: 'decimal',
                    }, onChange: handleChange, onBlur: handleBlur, value: value }) })] }));
};
exports.SlippageInput = SlippageInput;
