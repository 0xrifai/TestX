import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Button, DialogActions, DialogContent, DialogContentText, DialogTitle, } from '@mui/material';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Dialog } from '../../components/Dialog';
import { useTools } from '../../hooks';
import { useWidgetConfig } from '../../providers';
import { defaultConfigurableSettings, setDefaultSettings, useSettingsStore, } from '../../stores';
import { ResetButtonContainer } from './ResetSettingsButton.style';
import { InfoRounded } from '@mui/icons-material';
import { shallow } from 'zustand/shallow';
export const ResetSettingsButton = () => {
    const [enabledBridges, enabledExchanges, routePriority, slippage, gasPrice] = useSettingsStore((state) => [
        state.enabledBridges,
        state.enabledExchanges,
        state.routePriority,
        state.slippage,
        state.gasPrice,
    ], shallow);
    const { t } = useTranslation();
    const { tools } = useTools();
    const config = useWidgetConfig();
    const resetSettings = useSettingsStore((state) => state.reset);
    const [open, setOpen] = useState(false);
    const toggleDialog = useCallback(() => {
        setOpen((open) => !open);
    }, []);
    const handleReset = () => {
        if (tools) {
            resetSettings(config, tools.bridges.map((tool) => tool.key), tools.exchanges.map((tool) => tool.key));
            setDefaultSettings(config);
        }
        toggleDialog();
    };
    const isSlippageChanged = config.slippage
        ? Number(slippage) !== config.slippage * 100
        : slippage !== defaultConfigurableSettings.slippage;
    const isRoutePriorityChanged = config.routePriority
        ? routePriority !== config.routePriority
        : routePriority !== defaultConfigurableSettings.routePriority;
    const isGasPriceChanged = gasPrice !== defaultConfigurableSettings.gasPrice;
    const isCustomRouteSettings = tools?.bridges?.length !== enabledBridges?.length ||
        tools?.exchanges?.length !== enabledExchanges?.length ||
        isSlippageChanged ||
        isRoutePriorityChanged ||
        isGasPriceChanged;
    if (!isCustomRouteSettings) {
        return null;
    }
    return (_jsx(Box, { px: 3, mt: 1.5, mb: 1, children: _jsxs(ResetButtonContainer, { children: [_jsxs(Box, { display: "flex", marginBottom: "12px", children: [_jsx(InfoRounded, { sx: {
                                marginRight: '8px',
                            } }), _jsx(Box, { fontSize: 14, children: t(`settings.resetSettings`) })] }), _jsx(Button, { onClick: toggleDialog, fullWidth: true, children: t('button.resetSettings') }), _jsxs(Dialog, { open: open, onClose: toggleDialog, children: [_jsx(DialogTitle, { children: t('warning.title.resetSettings') }), _jsx(DialogContent, { children: _jsx(DialogContentText, { children: t('warning.message.resetSettings') }) }), _jsxs(DialogActions, { children: [_jsx(Button, { onClick: toggleDialog, children: t('button.cancel') }), _jsx(Button, { variant: "contained", onClick: handleReset, autoFocus: true, children: t('button.reset') })] })] })] }) }));
};
