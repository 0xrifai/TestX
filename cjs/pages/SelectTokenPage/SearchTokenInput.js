"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchTokenInput = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Search_1 = require("@mui/icons-material/Search");
const material_1 = require("@mui/material");
const react_1 = require("react");
const react_hook_form_1 = require("react-hook-form");
const react_i18next_1 = require("react-i18next");
const Card_1 = require("../../components/Card");
const providers_1 = require("../../providers");
const SearchTokenInput_style_1 = require("./SearchTokenInput.style");
const SearchTokenInput = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const { register, setValue } = (0, react_hook_form_1.useFormContext)();
    (0, react_1.useEffect)(() => () => {
        setValue(providers_1.FormKey.TokenSearchFilter, '');
    }, [setValue]);
    return ((0, jsx_runtime_1.jsx)(Card_1.Card, { children: (0, jsx_runtime_1.jsx)(material_1.FormControl, { fullWidth: true, children: (0, jsx_runtime_1.jsx)(SearchTokenInput_style_1.Input, { size: "small", placeholder: t(`main.tokenSearch`), defaultValue: "", endAdornment: (0, jsx_runtime_1.jsx)(material_1.InputAdornment, { position: "end", children: (0, jsx_runtime_1.jsx)(Search_1.default, {}) }), inputProps: {
                    inputMode: 'search',
                    ...register(providers_1.FormKey.TokenSearchFilter),
                }, autoComplete: "off" }) }) }));
};
exports.SearchTokenInput = SearchTokenInput;
