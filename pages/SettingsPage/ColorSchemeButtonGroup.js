import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Box, ToggleButtonGroup } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useWidgetConfig } from '../../providers';
import { useAppearance } from '../../stores';
import { HiddenUI } from '../../types';
import { ToggleButton } from './ColorSchemeButtonGroup.style';
export const ColorSchemeButtonGroup = () => {
    const { t } = useTranslation();
    const { hiddenUI } = useWidgetConfig();
    const [appearance, setAppearance] = useAppearance();
    if (hiddenUI?.includes(HiddenUI.Appearance)) {
        return null;
    }
    return (_jsx(Box, { pb: 2, children: _jsxs(ToggleButtonGroup, { color: "primary", value: appearance, onChange: (_, value) => {
                if (value) {
                    setAppearance(value);
                }
            }, exclusive: true, fullWidth: true, children: [_jsxs(ToggleButton, { value: "light", children: [_jsx(LightModeIcon, { sx: { marginRight: 1 } }), t('button.light')] }), _jsxs(ToggleButton, { value: "dark", children: [_jsx(DarkModeIcon, { sx: { marginRight: 1 } }), t('button.dark')] }), _jsxs(ToggleButton, { value: "auto", children: [_jsx(Brightness4Icon, { sx: { marginRight: 1 } }), t('button.auto')] })] }) }));
};
