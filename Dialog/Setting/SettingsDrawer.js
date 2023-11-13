import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from 'react';
import { Box, Drawer, IconButton, useTheme, useMediaQuery } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { ColorSchemeButtonGroup } from './ColorSchemeButtonGroup';
import { EnabledToolsButton } from './EnabledToolsButton';
import { GasPriceSelect } from './GasPriceSelect';
import { LanguageSelect } from './LanguageSelect';
import { ResetSettingsButton } from './ResetSettingsButton';
import { RoutePrioritySelect } from './RoutePrioritySelect';
import { ShowDestinationWallet } from './ShowDestinationWallet';
import { SlippageInput } from './SlippageInput';
import { useGetScrollableContainer } from '../../hooks/useScrollableContainer';
export const SettingsDrawer = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const getContainer = useGetScrollableContainer();
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
    return (_jsxs(_Fragment, { children: [_jsx(IconButton, { size: "medium", onClick: handleOpen, sx: {
                    marginRight: -1.25,
                }, children: _jsx(SettingsIcon, {}) }), _jsx(Drawer
            // container={getContainer}
            , { 
                // container={getContainer}
                anchor: isDesktop ? "right" : "bottom", open: open, onClose: handleClose, PaperProps: {
                    sx: {
                        top: '75px',
                        right: '37px',
                        position: 'absolute',
                        backgroundImage: 'none',
                        background: '#121212',
                        height: 'calc(100% - 90px)',
                        maxWidth: '380px',
                        border: '1px solid #262830',
                        borderTopLeftRadius: isDesktop ? '10px' : '10px',
                        borderTopRightRadius: isDesktop ? '10px' : '10px',
                        borderBottomLeftRadius: isDesktop ? '10px' : '0',
                        borderBottomRightRadius: isDesktop ? '10px' : '0'
                    },
                }, hideBackdrop: true, children: _jsxs(Box, { py: 3, children: [_jsxs(Box, { px: 3, children: [_jsx(ColorSchemeButtonGroup, {}), _jsx(LanguageSelect, {}), _jsx(RoutePrioritySelect, {}), _jsxs(Box, { sx: { display: 'flex', alignItems: 'center' }, mt: 2, children: [_jsx(Box, { pr: 2, flex: 1, children: _jsx(SlippageInput, {}) }), _jsx(GasPriceSelect, {})] })] }), _jsx(ShowDestinationWallet, {}), _jsxs(Box, { px: 1.5, children: [_jsx(EnabledToolsButton, { type: "Bridges" }), _jsx(EnabledToolsButton, { type: "Exchanges" })] }), _jsx(ResetSettingsButton, {})] }) })] }));
};
