import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Switch } from '../../components/Switch';
import { useWidgetConfig } from '../../providers';
import { useSendToWalletStore, useSettings, useSettingsStore, } from '../../stores';
import { HiddenUI } from '../../types';
export const ShowDestinationWallet = () => {
    const { t } = useTranslation();
    const { hiddenUI } = useWidgetConfig();
    const setSendToWallet = useSendToWalletStore((state) => state.setSendToWallet);
    const setValue = useSettingsStore((state) => state.setValue);
    const { showDestinationWallet } = useSettings(['showDestinationWallet']);
    if (hiddenUI?.includes(HiddenUI.ToAddress)) {
        return null;
    }
    const onChange = (_, checked) => {
        setValue('showDestinationWallet', checked);
        setSendToWallet(false);
    };
    return (_jsx(Box, { px: 3, pt: 2, pb: 1.5, children: _jsxs(Box, { sx: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }, children: [_jsx(Box, { sx: { display: 'flex', alignItems: 'center' }, children: _jsx(Typography, { variant: "subtitle1", color: "text.primary", lineHeight: "normal", children: t(`settings.showDestinationWallet`) }) }), _jsx(Switch, { checked: showDestinationWallet, onChange: onChange })] }) }));
};
