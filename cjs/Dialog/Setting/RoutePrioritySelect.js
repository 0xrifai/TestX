"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutePrioritySelect = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const sdk_1 = require("@lifi/sdk");
const KeyboardArrowDown_1 = require("@mui/icons-material/KeyboardArrowDown");
const material_1 = require("@mui/material");
const react_i18next_1 = require("react-i18next");
const Card_1 = require("../../components/Card");
const Select_1 = require("../../components/Select");
const stores_1 = require("../../stores");
const RoutePrioritySelect = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const setValue = (0, stores_1.useSettingsStore)((state) => state.setValue);
    const { routePriority } = (0, stores_1.useSettings)(['routePriority']);
    const value = routePriority ?? '';
    return ((0, jsx_runtime_1.jsxs)(Card_1.Card, { children: [(0, jsx_runtime_1.jsx)(Card_1.CardTitle, { children: t(`settings.routePriority`) }), (0, jsx_runtime_1.jsx)(material_1.FormControl, { fullWidth: true, children: (0, jsx_runtime_1.jsx)(Select_1.Select, { MenuProps: { elevation: 2 }, value: value, onChange: (event) => setValue('routePriority', event.target.value), IconComponent: KeyboardArrowDown_1.default, dense: true, children: sdk_1.Orders.map((order) => {
                        const tag = t(`main.tags.${order.toLowerCase()}`);
                        const tagName = `${tag[0]}${tag.slice(1).toLowerCase()}`;
                        return ((0, jsx_runtime_1.jsx)(material_1.MenuItem, { value: order, children: tagName }, order));
                    }) }) })] }));
};
exports.RoutePrioritySelect = RoutePrioritySelect;
