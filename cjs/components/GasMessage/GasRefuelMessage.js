"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GasRefuelMessage = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const EvStation_1 = require("@mui/icons-material/EvStation");
const material_1 = require("@mui/material");
const react_i18next_1 = require("react-i18next");
const hooks_1 = require("../../hooks");
const stores_1 = require("../../stores");
const GasMessage_style_1 = require("./GasMessage.style");
const GasRefuelMessage = (props) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const setValue = (0, stores_1.useSettingsStore)((state) => state.setValue);
    const { enabledAutoRefuel } = (0, stores_1.useSettings)(['enabledAutoRefuel']);
    const { enabled, chain, isLoading: isRefuelLoading } = (0, hooks_1.useGasRefuel)();
    const onChange = (_, checked) => {
        setValue('enabledAutoRefuel', checked);
    };
    const showGasRefuelMessage = chain && enabled && !isRefuelLoading;
    return ((0, jsx_runtime_1.jsx)(material_1.Collapse, { timeout: 225, in: showGasRefuelMessage, unmountOnExit: true, mountOnEnter: true, children: (0, jsx_runtime_1.jsxs)(GasMessage_style_1.InfoMessageCard, { ...props, children: [(0, jsx_runtime_1.jsxs)(GasMessage_style_1.InfoMessageCardTitle, { display: "flex", alignItems: "center", justifyContent: "space-between", p: 2, children: [(0, jsx_runtime_1.jsxs)(material_1.Box, { display: "flex", alignItems: "center", children: [(0, jsx_runtime_1.jsx)(EvStation_1.default, { sx: {
                                        marginRight: 1,
                                    } }), (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "body2", fontWeight: 700, children: t(`info.title.autoRefuel`) })] }), (0, jsx_runtime_1.jsx)(GasMessage_style_1.InfoMessageSwitch, { checked: enabledAutoRefuel, onChange: onChange })] }), (0, jsx_runtime_1.jsx)(material_1.Collapse, { timeout: 225, in: enabledAutoRefuel, unmountOnExit: true, mountOnEnter: true, children: (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "body2", px: 2, pb: 2, children: t(`info.message.autoRefuel`, {
                            chainName: chain?.name,
                        }) }) })] }) }));
};
exports.GasRefuelMessage = GasRefuelMessage;
