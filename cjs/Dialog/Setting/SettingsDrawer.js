"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsDrawer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const material_1 = require("@mui/material");
const Settings_1 = require("@mui/icons-material/Settings");
const ColorSchemeButtonGroup_1 = require("./ColorSchemeButtonGroup");
const EnabledToolsButton_1 = require("./EnabledToolsButton");
const GasPriceSelect_1 = require("./GasPriceSelect");
const LanguageSelect_1 = require("./LanguageSelect");
const ResetSettingsButton_1 = require("./ResetSettingsButton");
const RoutePrioritySelect_1 = require("./RoutePrioritySelect");
const ShowDestinationWallet_1 = require("./ShowDestinationWallet");
const SlippageInput_1 = require("./SlippageInput");
const useScrollableContainer_1 = require("../../hooks/useScrollableContainer");
const SettingsDrawer = () => {
    const [open, setOpen] = react_1.default.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const getContainer = (0, useScrollableContainer_1.useGetScrollableContainer)();
    const theme = (0, material_1.useTheme)();
    const isDesktop = (0, material_1.useMediaQuery)(theme.breakpoints.up('sm'));
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(material_1.IconButton, { size: "medium", onClick: handleOpen, sx: {
                    marginRight: -1.25,
                }, children: (0, jsx_runtime_1.jsx)(Settings_1.default, {}) }), (0, jsx_runtime_1.jsx)(material_1.Drawer
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
                }, hideBackdrop: true, children: (0, jsx_runtime_1.jsxs)(material_1.Box, { py: 3, children: [(0, jsx_runtime_1.jsxs)(material_1.Box, { px: 3, children: [(0, jsx_runtime_1.jsx)(ColorSchemeButtonGroup_1.ColorSchemeButtonGroup, {}), (0, jsx_runtime_1.jsx)(LanguageSelect_1.LanguageSelect, {}), (0, jsx_runtime_1.jsx)(RoutePrioritySelect_1.RoutePrioritySelect, {}), (0, jsx_runtime_1.jsxs)(material_1.Box, { sx: { display: 'flex', alignItems: 'center' }, mt: 2, children: [(0, jsx_runtime_1.jsx)(material_1.Box, { pr: 2, flex: 1, children: (0, jsx_runtime_1.jsx)(SlippageInput_1.SlippageInput, {}) }), (0, jsx_runtime_1.jsx)(GasPriceSelect_1.GasPriceSelect, {})] })] }), (0, jsx_runtime_1.jsx)(ShowDestinationWallet_1.ShowDestinationWallet, {}), (0, jsx_runtime_1.jsxs)(material_1.Box, { px: 1.5, children: [(0, jsx_runtime_1.jsx)(EnabledToolsButton_1.EnabledToolsButton, { type: "Bridges" }), (0, jsx_runtime_1.jsx)(EnabledToolsButton_1.EnabledToolsButton, { type: "Exchanges" })] }), (0, jsx_runtime_1.jsx)(ResetSettingsButton_1.ResetSettingsButton, {})] }) })] }));
};
exports.SettingsDrawer = SettingsDrawer;
