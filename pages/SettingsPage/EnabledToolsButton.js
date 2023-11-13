import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { shallow } from 'zustand/shallow';
import { useSettingsStore } from '../../stores';
import { navigationRoutes } from '../../utils';
import { ListItemButton, ListItemText } from './EnabledToolsButton.style';
export const EnabledToolsButton = ({ type }) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [enabledTools, tools] = useSettingsStore((state) => {
        const enabledTools = Object.values(state[`_enabled${type}`] ?? {});
        return [enabledTools.filter(Boolean).length, enabledTools.length];
    }, shallow);
    const handleClick = () => {
        navigate(navigationRoutes[type.toLowerCase()]);
    };
    return (_jsxs(ListItemButton, { onClick: handleClick, children: [_jsx(ListItemText, { primary: t(`settings.enabled${type}`) }), _jsxs(Box, { display: "flex", alignItems: "center", children: [_jsx(ListItemText, { primary: `${enabledTools}/${tools}` }), _jsx(ChevronRightIcon, {})] })] }));
};
