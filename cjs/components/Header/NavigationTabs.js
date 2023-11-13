"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationTabs = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_hook_form_1 = require("react-hook-form");
const react_i18next_1 = require("react-i18next");
const providers_1 = require("../../providers");
const stores_1 = require("../../stores");
const Header_style_1 = require("./Header.style");
const NavigationTabs_style_1 = require("./NavigationTabs.style");
const NavigationTabs = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [state, setState] = (0, stores_1.useSplitSubvariantStore)((state) => [
        state.state,
        state.setState,
    ]);
    const { setValue } = (0, react_hook_form_1.useFormContext)();
    const handleChange = (_, value) => {
        setValue(providers_1.FormKey.FromAmount, '');
        setValue(providers_1.FormKey.FromToken, '');
        setValue(providers_1.FormKey.ToToken, '');
        setState(value === 0 ? 'swap' : 'bridge');
    };
    return ((0, jsx_runtime_1.jsx)(Header_style_1.HeaderAppBar, { sx: { py: 1 }, children: (0, jsx_runtime_1.jsxs)(NavigationTabs_style_1.NavbarTabs, { value: state === 'swap' ? 0 : 1, onChange: handleChange, "aria-label": "tabs", indicatorColor: "primary", children: [(0, jsx_runtime_1.jsx)(NavigationTabs_style_1.NavbarTab, { label: t('header.swap'), disableRipple: true }), (0, jsx_runtime_1.jsx)(NavigationTabs_style_1.NavbarTab, { label: t('header.bridge'), disableRipple: true })] }) }));
};
exports.NavigationTabs = NavigationTabs;
