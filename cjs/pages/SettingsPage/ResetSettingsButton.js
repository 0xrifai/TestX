"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetSettingsButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const Dialog_1 = require("../../components/Dialog");
const hooks_1 = require("../../hooks");
const providers_1 = require("../../providers");
const stores_1 = require("../../stores");
const ResetSettingsButton_style_1 = require("./ResetSettingsButton.style");
const icons_material_1 = require("@mui/icons-material");
const shallow_1 = require("zustand/shallow");
const ResetSettingsButton = () => {
    const [enabledBridges, enabledExchanges, routePriority, slippage, gasPrice] = (0, stores_1.useSettingsStore)((state) => [
        state.enabledBridges,
        state.enabledExchanges,
        state.routePriority,
        state.slippage,
        state.gasPrice,
    ], shallow_1.shallow);
    const { t } = (0, react_i18next_1.useTranslation)();
    const { tools } = (0, hooks_1.useTools)();
    const config = (0, providers_1.useWidgetConfig)();
    const resetSettings = (0, stores_1.useSettingsStore)((state) => state.reset);
    const [open, setOpen] = (0, react_1.useState)(false);
    const toggleDialog = (0, react_1.useCallback)(() => {
        setOpen((open) => !open);
    }, []);
    const handleReset = () => {
        if (tools) {
            resetSettings(config, tools.bridges.map((tool) => tool.key), tools.exchanges.map((tool) => tool.key));
            (0, stores_1.setDefaultSettings)(config);
        }
        toggleDialog();
    };
    const isSlippageChanged = config.slippage
        ? Number(slippage) !== config.slippage * 100
        : slippage !== stores_1.defaultConfigurableSettings.slippage;
    const isRoutePriorityChanged = config.routePriority
        ? routePriority !== config.routePriority
        : routePriority !== stores_1.defaultConfigurableSettings.routePriority;
    const isGasPriceChanged = gasPrice !== stores_1.defaultConfigurableSettings.gasPrice;
    const isCustomRouteSettings = tools?.bridges?.length !== enabledBridges?.length ||
        tools?.exchanges?.length !== enabledExchanges?.length ||
        isSlippageChanged ||
        isRoutePriorityChanged ||
        isGasPriceChanged;
    if (!isCustomRouteSettings) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)(material_1.Box, { px: 3, mt: 1.5, mb: 1, children: (0, jsx_runtime_1.jsxs)(ResetSettingsButton_style_1.ResetButtonContainer, { children: [(0, jsx_runtime_1.jsxs)(material_1.Box, { display: "flex", marginBottom: "12px", children: [(0, jsx_runtime_1.jsx)(icons_material_1.InfoRounded, { sx: {
                                marginRight: '8px',
                            } }), (0, jsx_runtime_1.jsx)(material_1.Box, { fontSize: 14, children: t(`settings.resetSettings`) })] }), (0, jsx_runtime_1.jsx)(material_1.Button, { onClick: toggleDialog, fullWidth: true, children: t('button.resetSettings') }), (0, jsx_runtime_1.jsxs)(Dialog_1.Dialog, { open: open, onClose: toggleDialog, children: [(0, jsx_runtime_1.jsx)(material_1.DialogTitle, { children: t('warning.title.resetSettings') }), (0, jsx_runtime_1.jsx)(material_1.DialogContent, { children: (0, jsx_runtime_1.jsx)(material_1.DialogContentText, { children: t('warning.message.resetSettings') }) }), (0, jsx_runtime_1.jsxs)(material_1.DialogActions, { children: [(0, jsx_runtime_1.jsx)(material_1.Button, { onClick: toggleDialog, children: t('button.cancel') }), (0, jsx_runtime_1.jsx)(material_1.Button, { variant: "contained", onClick: handleReset, autoFocus: true, children: t('button.reset') })] })] })] }) }));
};
exports.ResetSettingsButton = ResetSettingsButton;
