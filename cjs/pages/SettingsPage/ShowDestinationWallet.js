"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowDestinationWallet = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const react_i18next_1 = require("react-i18next");
const Switch_1 = require("../../components/Switch");
const providers_1 = require("../../providers");
const stores_1 = require("../../stores");
const types_1 = require("../../types");
const ShowDestinationWallet = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const { hiddenUI } = (0, providers_1.useWidgetConfig)();
    const setSendToWallet = (0, stores_1.useSendToWalletStore)((state) => state.setSendToWallet);
    const setValue = (0, stores_1.useSettingsStore)((state) => state.setValue);
    const { showDestinationWallet } = (0, stores_1.useSettings)(['showDestinationWallet']);
    if (hiddenUI?.includes(types_1.HiddenUI.ToAddress)) {
        return null;
    }
    const onChange = (_, checked) => {
        setValue('showDestinationWallet', checked);
        setSendToWallet(false);
    };
    return ((0, jsx_runtime_1.jsx)(material_1.Box, { px: 3, pt: 2, pb: 1.5, children: (0, jsx_runtime_1.jsxs)(material_1.Box, { sx: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }, children: [(0, jsx_runtime_1.jsx)(material_1.Box, { sx: { display: 'flex', alignItems: 'center' }, children: (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "subtitle1", color: "text.primary", lineHeight: "normal", children: t(`settings.showDestinationWallet`) }) }), (0, jsx_runtime_1.jsx)(Switch_1.Switch, { checked: showDestinationWallet, onChange: onChange })] }) }));
};
exports.ShowDestinationWallet = ShowDestinationWallet;
