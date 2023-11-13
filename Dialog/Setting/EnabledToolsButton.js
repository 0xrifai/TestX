import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { shallow } from 'zustand/shallow';
import { useSettingsStore } from '../../stores';
import { ListItemButton, ListItemText } from './EnabledToolsButton.style';
export const EnabledToolsButton = ({ type, handleClick }) => {
    const { t } = useTranslation();
    const [enabledTools, tools] = useSettingsStore((state) => {
        const enabledTools = Object.values(state[`_enabled${type}`] ?? {});
        return [enabledTools.filter(Boolean).length, enabledTools.length];
    }, shallow);
    return (_jsxs(ListItemButton, { onClick: handleClick, children: [_jsx(ListItemText, { primary: t(`settings.enabled${type}`) }), _jsxs(Box, { display: "flex", alignItems: "center", children: [_jsx(ListItemText, { primary: `${enabledTools}/${tools}` }), _jsx(ChevronRightIcon, {})] })] }));
};
