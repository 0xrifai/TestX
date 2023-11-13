"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GasPriceSelect = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const KeyboardArrowDown_1 = require("@mui/icons-material/KeyboardArrowDown");
const material_1 = require("@mui/material");
const react_i18next_1 = require("react-i18next");
const Card_1 = require("../../components/Card");
const Select_1 = require("../../components/Select");
const stores_1 = require("../../stores");
const GasPriceSelect = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const setValue = (0, stores_1.useSettingsStore)((state) => state.setValue);
    const { gasPrice } = (0, stores_1.useSettings)(['gasPrice']);
    return ((0, jsx_runtime_1.jsxs)(Card_1.Card, { flex: 1, children: [(0, jsx_runtime_1.jsx)(Card_1.CardTitle, { children: t(`settings.gasPrice.title`) }), (0, jsx_runtime_1.jsx)(material_1.FormControl, { fullWidth: true, children: (0, jsx_runtime_1.jsxs)(Select_1.Select, { MenuProps: { elevation: 2 }, value: gasPrice, onChange: (event) => setValue('gasPrice', event.target.value), IconComponent: KeyboardArrowDown_1.default, dense: true, children: [(0, jsx_runtime_1.jsx)(material_1.MenuItem, { value: "slow", children: t(`settings.gasPrice.slow`) }), (0, jsx_runtime_1.jsx)(material_1.MenuItem, { value: "normal", children: t(`settings.gasPrice.normal`) }), (0, jsx_runtime_1.jsx)(material_1.MenuItem, { value: "fast", children: t(`settings.gasPrice.fast`) })] }) })] }));
};
exports.GasPriceSelect = GasPriceSelect;
