"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Settings = exports.Header = exports.Content = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const material_1 = require("@mui/material");
const Settings_1 = require("@mui/icons-material/Settings");
const Close_1 = require("@mui/icons-material/Close");
const ColorSchemeButtonGroup_1 = require("./ColorSchemeButtonGroup");
const EnabledToolsButton_1 = require("./EnabledToolsButton");
const GasPriceSelect_1 = require("./GasPriceSelect");
const LanguageSelect_1 = require("./LanguageSelect");
const ResetSettingsButton_1 = require("./ResetSettingsButton");
const RoutePrioritySelect_1 = require("./RoutePrioritySelect");
const ShowDestinationWallet_1 = require("./ShowDestinationWallet");
const SlippageInput_1 = require("./SlippageInput");
const Dialog_1 = require("../../components/Dialog");
const Dialog_2 = require("../../components/Dialog");
const SelectEnabledTools_1 = require("../SelectEnabledTools");
const KeyboardArrowLeft_1 = require("@mui/icons-material/KeyboardArrowLeft");
function Content({ toggleDialog }) {
    const theme = (0, material_1.useTheme)();
    const [screen, setScreen] = (0, react_1.useState)("base");
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Header, { toggleDialog: toggleDialog, screen: screen, onBack: () => {
                    setScreen("base");
                } }), (0, jsx_runtime_1.jsx)(material_1.Box, { sx: {
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
                }, children: screen === "sBridges" ? ((0, jsx_runtime_1.jsx)(SelectEnabledTools_1.SelectEnabledTools, { type: "Bridges" })) : screen === "sExchanges" ? ((0, jsx_runtime_1.jsx)(SelectEnabledTools_1.SelectEnabledTools, { type: "Exchanges" })) : ((0, jsx_runtime_1.jsxs)(material_1.Stack, { direction: 'column', spacing: 2, children: [(0, jsx_runtime_1.jsx)(ColorSchemeButtonGroup_1.ColorSchemeButtonGroup, {}), (0, jsx_runtime_1.jsx)(LanguageSelect_1.LanguageSelect, {}), (0, jsx_runtime_1.jsx)(RoutePrioritySelect_1.RoutePrioritySelect, {}), (0, jsx_runtime_1.jsxs)(material_1.Box, { sx: { display: 'flex', alignItems: 'center' }, children: [(0, jsx_runtime_1.jsx)(material_1.Box, { pr: 2, flex: 1, children: (0, jsx_runtime_1.jsx)(SlippageInput_1.SlippageInput, {}) }), (0, jsx_runtime_1.jsx)(GasPriceSelect_1.GasPriceSelect, {})] }), (0, jsx_runtime_1.jsx)(ShowDestinationWallet_1.ShowDestinationWallet, {}), (0, jsx_runtime_1.jsx)(EnabledToolsButton_1.EnabledToolsButton, { type: "Bridges", handleClick: () => { setScreen("sBridges"); } }), (0, jsx_runtime_1.jsx)(EnabledToolsButton_1.EnabledToolsButton, { type: "Exchanges", handleClick: () => { setScreen("sExchanges"); } }), (0, jsx_runtime_1.jsx)(ResetSettingsButton_1.ResetSettingsButton, {})] })) })] }));
}
exports.Content = Content;
function Header({ toggleDialog, onBack, sx, screen }) {
    return ((0, jsx_runtime_1.jsx)(material_1.Box, { px: '20px', py: '10px', display: "flex", justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid', borderColor: '#4242423d', sx: sx, children: screen === "base" ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { fontSize: 18, align: 'left', fontWeight: "700", flex: 1, noWrap: true, children: "Setting" }), (0, jsx_runtime_1.jsx)(material_1.IconButton, { size: "medium", onClick: toggleDialog, sx: {
                        marginRight: -1.25,
                    }, children: (0, jsx_runtime_1.jsx)(Close_1.default, {}) })] })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(material_1.IconButton, { size: "medium", onClick: onBack, sx: {
                        background: '#1c1c1e'
                    }, children: (0, jsx_runtime_1.jsx)(KeyboardArrowLeft_1.default, {}) }), (0, jsx_runtime_1.jsx)(material_1.Typography, { fontSize: 18, align: 'left', fontWeight: "700", noWrap: true, sx: {
                        transform: 'translate(-50%, -50%)',
                        top: '28px',
                        left: '50%',
                        position: 'absolute'
                    }, children: screen === "sBridges" ? 'Bridges' : screen === "sExchanges" && 'Exchanges' })] })) }));
}
exports.Header = Header;
const Settings = () => {
    const [open, setOpen] = react_1.default.useState(false);
    const toggleDialog = (0, react_1.useCallback)(() => {
        setOpen((open) => !open);
    }, []);
    const theme = (0, material_1.useTheme)();
    const isDesktop = (0, material_1.useMediaQuery)(theme.breakpoints.up('sm'));
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(material_1.IconButton, { size: "medium", onClick: toggleDialog, sx: {
                    marginRight: -1.25,
                }, children: (0, jsx_runtime_1.jsx)(Settings_1.default, {}) }), !isDesktop ? ((0, jsx_runtime_1.jsx)(material_1.Drawer, { anchor: "bottom", open: open, onClose: toggleDialog, ModalProps: Dialog_2.modalProps, PaperProps: Dialog_2.paperProps, BackdropProps: Dialog_2.backdropProps, disableAutoFocus: true, children: (0, jsx_runtime_1.jsx)(Content, { toggleDialog: toggleDialog }) })) : ((0, jsx_runtime_1.jsx)(Dialog_1.Dialog, { open: open, onClose: toggleDialog, PaperProps: Dialog_2.paperProps, children: (0, jsx_runtime_1.jsx)(Content, { toggleDialog: toggleDialog }) }))] }));
};
exports.Settings = Settings;
