import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';
import { Avatar, Box, IconButton, ListItemAvatar, } from '@mui/material';
import { shallow } from 'zustand/shallow';
import { ListItemText } from '../../components/ListItemText';
import { useTools } from '../../hooks';
import { useSettingsStore } from '../../stores';
import { ListItemButton } from './SelectEnabledTools.style';
export const SelectEnabledTools = ({ type }) => {
    const typeKey = type.toLowerCase();
    const { tools } = useTools();
    const [enabledTools, setTools] = useSettingsStore((state) => [state[`enabled${type}`], state.setTools], shallow);
    const handleClick = (key) => {
        if (!tools) {
            return;
        }
        const toolKeys = tools[typeKey].map((tool) => tool.key);
        if (enabledTools?.includes(key)) {
            setTools(type, enabledTools.filter((toolKey) => toolKey !== key), toolKeys);
        }
        else {
            setTools(type, [...enabledTools, key], toolKeys);
        }
    };
    const allToolsSelected = tools?.[typeKey].length === enabledTools.length;
    const toggleCheckboxes = () => {
        if (!tools) {
            return;
        }
        const toolKeys = tools[typeKey].map((tool) => tool.key);
        if (allToolsSelected) {
            setTools(type, [], toolKeys);
        }
        else {
            setTools(type, toolKeys, toolKeys);
        }
    };
    return (_jsxs(Box, { children: [_jsx(IconButton, { size: "medium", edge: "end", onClick: toggleCheckboxes, sx: {
                    position: 'absolute',
                    top: '9px',
                    right: '31px'
                }, children: allToolsSelected ? (_jsx(CheckBoxOutlinedIcon, {})) : enabledTools.length ? (_jsx(IndeterminateCheckBoxOutlinedIcon, {})) : (_jsx(CheckBoxOutlineBlankOutlinedIcon, {})) }), tools?.[typeKey].map((tool) => (_jsxs(ListItemButton, { onClick: () => handleClick(tool.key), children: [_jsx(ListItemAvatar, { children: _jsx(Avatar, { src: tool.logoURI, alt: tool.name, children: tool.name[0] }) }), _jsx(ListItemText, { primary: tool.name }), enabledTools?.includes(tool.key) ? (_jsx(CheckBoxIcon, { color: "primary" })) : (_jsx(CheckBoxOutlineBlankOutlinedIcon, {}))] }, tool.name)))] }));
};
