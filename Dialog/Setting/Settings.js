import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useCallback, useState } from 'react';
import { Drawer, Box, IconButton, Typography, useTheme, useMediaQuery, Stack } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';
import { ColorSchemeButtonGroup } from './ColorSchemeButtonGroup';
import { EnabledToolsButton } from './EnabledToolsButton';
import { GasPriceSelect } from './GasPriceSelect';
import { LanguageSelect } from './LanguageSelect';
import { ResetSettingsButton } from './ResetSettingsButton';
import { RoutePrioritySelect } from './RoutePrioritySelect';
import { ShowDestinationWallet } from './ShowDestinationWallet';
import { SlippageInput } from './SlippageInput';
import { Dialog } from '../../components/Dialog';
import { backdropProps, modalProps, paperProps } from '../../components/Dialog';
import { SelectEnabledTools } from '../SelectEnabledTools';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
export function Content({ toggleDialog }) {
    const theme = useTheme();
    const [screen, setScreen] = useState("base");
    return (_jsxs(_Fragment, { children: [_jsx(Header, { toggleDialog: toggleDialog, screen: screen, onBack: () => {
                    setScreen("base");
                } }), _jsx(Box, { sx: {
                    overflowY: 'auto',
                    maxHeight: '60vh',
                    paddingX: '20px',
                    paddingY: '20px',
                    '&::-webkit-scrollbar': {
                        width: '0'
                    },
                    [theme.breakpoints.up('sm')]: {
                        '&:hover::-webkit-scrollbar': {
                            width: '10px'
                        },
                    },
                    '&::-webkit-scrollbar-track': {
                        background: 'none'
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: '#4242423d',
                        borderRadius: 20
                    },
                }, children: screen === "sBridges" ? (_jsx(SelectEnabledTools, { type: "Bridges" })) : screen === "sExchanges" ? (_jsx(SelectEnabledTools, { type: "Exchanges" })) : (_jsxs(Stack, { direction: 'column', spacing: 2, children: [_jsx(ColorSchemeButtonGroup, {}), _jsx(LanguageSelect, {}), _jsx(RoutePrioritySelect, {}), _jsxs(Box, { sx: { display: 'flex', alignItems: 'center' }, children: [_jsx(Box, { pr: 2, flex: 1, children: _jsx(SlippageInput, {}) }), _jsx(GasPriceSelect, {})] }), _jsx(ShowDestinationWallet, {}), _jsx(EnabledToolsButton, { type: "Bridges", handleClick: () => { setScreen("sBridges"); } }), _jsx(EnabledToolsButton, { type: "Exchanges", handleClick: () => { setScreen("sExchanges"); } }), _jsx(ResetSettingsButton, {})] })) })] }));
}
export function Header({ toggleDialog, onBack, sx, screen }) {
    return (_jsx(Box, { px: '20px', py: '10px', display: "flex", justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid', borderColor: '#4242423d', sx: sx, children: screen === "base" ? (_jsxs(_Fragment, { children: [_jsx(Typography, { fontSize: 18, align: 'left', fontWeight: "700", flex: 1, noWrap: true, children: "Setting" }), _jsx(IconButton, { size: "medium", onClick: toggleDialog, sx: {
                        marginRight: -1.25,
                    }, children: _jsx(CloseIcon, {}) })] })) : (_jsxs(_Fragment, { children: [_jsx(IconButton, { size: "medium", onClick: onBack, sx: {
                        background: '#1c1c1e'
                    }, children: _jsx(KeyboardArrowLeftIcon, {}) }), _jsx(Typography, { fontSize: 18, align: 'left', fontWeight: "700", noWrap: true, sx: {
                        transform: 'translate(-50%, -50%)',
                        top: '28px',
                        left: '50%',
                        position: 'absolute'
                    }, children: screen === "sBridges" ? 'Bridges' : screen === "sExchanges" && 'Exchanges' })] })) }));
}
export const Settings = () => {
    const [open, setOpen] = React.useState(false);
    const toggleDialog = useCallback(() => {
        setOpen((open) => !open);
    }, []);
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
    return (_jsxs(_Fragment, { children: [_jsx(IconButton, { size: "medium", onClick: toggleDialog, sx: {
                    marginRight: -1.25,
                }, children: _jsx(SettingsIcon, {}) }), !isDesktop ? (_jsx(Drawer, { anchor: "bottom", open: open, onClose: toggleDialog, ModalProps: modalProps, PaperProps: paperProps, BackdropProps: backdropProps, disableAutoFocus: true, children: _jsx(Content, { toggleDialog: toggleDialog }) })) : (_jsx(Dialog, { open: open, onClose: toggleDialog, PaperProps: paperProps, children: _jsx(Content, { toggleDialog: toggleDialog }) }))] }));
};
