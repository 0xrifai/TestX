"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectEnabledToolsPage = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const CheckBox_1 = require("@mui/icons-material/CheckBox");
const CheckBoxOutlineBlankOutlined_1 = require("@mui/icons-material/CheckBoxOutlineBlankOutlined");
const CheckBoxOutlined_1 = require("@mui/icons-material/CheckBoxOutlined");
const IndeterminateCheckBoxOutlined_1 = require("@mui/icons-material/IndeterminateCheckBoxOutlined");
const material_1 = require("@mui/material");
const react_1 = require("react");
const shallow_1 = require("zustand/shallow");
const ListItemText_1 = require("../../components/ListItemText");
const hooks_1 = require("../../hooks");
const stores_1 = require("../../stores");
const SelectEnabledToolsPage_style_1 = require("./SelectEnabledToolsPage.style");
const SelectEnabledToolsPage = ({ type }) => {
    const typeKey = type.toLowerCase();
    const { tools } = (0, hooks_1.useTools)();
    const [enabledTools, setTools] = (0, stores_1.useSettingsStore)((state) => [state[`enabled${type}`], state.setTools], shallow_1.shallow);
    const headerStoreContext = (0, stores_1.useHeaderStoreContext)();
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
    (0, react_1.useEffect)(() => {
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
        return headerStoreContext.getState().setAction((0, jsx_runtime_1.jsx)(material_1.IconButton, { size: "medium", edge: "end", onClick: toggleCheckboxes, children: allToolsSelected ? ((0, jsx_runtime_1.jsx)(CheckBoxOutlined_1.default, {})) : enabledTools.length ? ((0, jsx_runtime_1.jsx)(IndeterminateCheckBoxOutlined_1.default, {})) : ((0, jsx_runtime_1.jsx)(CheckBoxOutlineBlankOutlined_1.default, {})) }));
    }, [enabledTools.length, headerStoreContext, setTools, tools, type, typeKey]);
    return ((0, jsx_runtime_1.jsx)(material_1.Container, { disableGutters: true, children: (0, jsx_runtime_1.jsx)(material_1.List, { sx: {
                paddingLeft: 1.5,
                paddingRight: 1.5,
            }, children: tools?.[typeKey].map((tool) => ((0, jsx_runtime_1.jsxs)(SelectEnabledToolsPage_style_1.ListItemButton, { onClick: () => handleClick(tool.key), children: [(0, jsx_runtime_1.jsx)(material_1.ListItemAvatar, { children: (0, jsx_runtime_1.jsx)(material_1.Avatar, { src: tool.logoURI, alt: tool.name, children: tool.name[0] }) }), (0, jsx_runtime_1.jsx)(ListItemText_1.ListItemText, { primary: tool.name }), enabledTools?.includes(tool.key) ? ((0, jsx_runtime_1.jsx)(CheckBox_1.default, { color: "primary" })) : ((0, jsx_runtime_1.jsx)(CheckBoxOutlineBlankOutlined_1.default, {}))] }, tool.name))) }) }));
};
exports.SelectEnabledToolsPage = SelectEnabledToolsPage;
