import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';
import { Avatar, Container, IconButton, List, ListItemAvatar, } from '@mui/material';
import { useEffect } from 'react';
import { shallow } from 'zustand/shallow';
import { ListItemText } from '../../components/ListItemText';
import { useTools } from '../../hooks';
import { useHeaderStoreContext, useSettingsStore } from '../../stores';
import { ListItemButton } from './SelectEnabledToolsPage.style';
export const SelectEnabledToolsPage = ({ type }) => {
    const typeKey = type.toLowerCase();
    const { tools } = useTools();
    const [enabledTools, setTools] = useSettingsStore((state) => [state[`enabled${type}`], state.setTools], shallow);
    const headerStoreContext = useHeaderStoreContext();
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
    useEffect(() => {
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
        return headerStoreContext.getState().setAction(_jsx(IconButton, { size: "medium", edge: "end", onClick: toggleCheckboxes, children: allToolsSelected ? (_jsx(CheckBoxOutlinedIcon, {})) : enabledTools.length ? (_jsx(IndeterminateCheckBoxOutlinedIcon, {})) : (_jsx(CheckBoxOutlineBlankOutlinedIcon, {})) }));
    }, [enabledTools.length, headerStoreContext, setTools, tools, type, typeKey]);
    return (_jsx(Container, { disableGutters: true, children: _jsx(List, { sx: {
                paddingLeft: 1.5,
                paddingRight: 1.5,
            }, children: tools?.[typeKey].map((tool) => (_jsxs(ListItemButton, { onClick: () => handleClick(tool.key), children: [_jsx(ListItemAvatar, { children: _jsx(Avatar, { src: tool.logoURI, alt: tool.name, children: tool.name[0] }) }), _jsx(ListItemText, { primary: tool.name }), enabledTools?.includes(tool.key) ? (_jsx(CheckBoxIcon, { color: "primary" })) : (_jsx(CheckBoxOutlineBlankOutlinedIcon, {}))] }, tool.name))) }) }));
};
