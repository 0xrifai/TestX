import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Container } from '@mui/material';
import { ColorSchemeButtonGroup } from './ColorSchemeButtonGroup';
import { EnabledToolsButton } from './EnabledToolsButton';
import { GasPriceSelect } from './GasPriceSelect';
import { LanguageSelect } from './LanguageSelect';
import { ResetSettingsButton } from './ResetSettingsButton';
import { RoutePrioritySelect } from './RoutePrioritySelect';
import { ShowDestinationWallet } from './ShowDestinationWallet';
import { SlippageInput } from './SlippageInput';
export const SettingsPage = () => {
    return (_jsxs(Container, { disableGutters: true, children: [_jsxs(Box, { px: 3, pt: 1, children: [_jsx(ColorSchemeButtonGroup, {}), _jsx(LanguageSelect, {}), _jsx(RoutePrioritySelect, {}), _jsxs(Box, { sx: { display: 'flex', alignItems: 'center' }, mt: 2, children: [_jsx(Box, { pr: 2, flex: 1, children: _jsx(SlippageInput, {}) }), _jsx(GasPriceSelect, {})] })] }), _jsx(ShowDestinationWallet, {}), _jsxs(Box, { px: 1.5, children: [_jsx(EnabledToolsButton, { type: "Bridges" }), _jsx(EnabledToolsButton, { type: "Exchanges" })] }), _jsx(ResetSettingsButton, {})] }));
};
