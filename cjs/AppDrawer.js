"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawerButtonText = exports.AppDrawer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const CloseRounded_1 = require("@mui/icons-material/CloseRounded");
const KeyboardArrowLeft_1 = require("@mui/icons-material/KeyboardArrowLeft");
const KeyboardArrowRight_1 = require("@mui/icons-material/KeyboardArrowRight");
const material_1 = require("@mui/material");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const App_1 = require("./App");
const AppDrawer_style_1 = require("./AppDrawer.style");
const AppProvider_1 = require("./AppProvider");
const types_1 = require("./types");
// eslint-disable-next-line react/display-name
exports.AppDrawer = (0, react_1.forwardRef)(({ elementRef, open, integrator, config }, ref) => {
    const openRef = (0, react_1.useRef)(open);
    const [drawerOpen, setDrawerOpen] = (0, react_1.useState)(Boolean(open));
    const toggleDrawer = (0, react_1.useCallback)(() => {
        setDrawerOpen((open) => !open);
    }, []);
    const openDrawer = (0, react_1.useCallback)(() => {
        setDrawerOpen(true);
    }, []);
    const closeDrawer = (0, react_1.useCallback)(() => {
        setDrawerOpen(false);
    }, []);
    (0, react_1.useImperativeHandle)(ref, () => ({
        isOpen: () => openRef.current,
        toggleDrawer,
        openDrawer,
        closeDrawer,
    }), [closeDrawer, openDrawer, toggleDrawer]);
    const widgetConfig = (0, react_1.useMemo)(() => ({
        ...config,
        integrator,
        containerStyle: {
            ...config?.containerStyle,
            height: '100%',
        },
    }), [config, integrator]);
    return ((0, jsx_runtime_1.jsxs)(AppProvider_1.AppProvider, { config: widgetConfig, children: [!widgetConfig.hiddenUI?.includes(types_1.HiddenUI.DrawerButton) ? ((0, jsx_runtime_1.jsxs)(AppDrawer_style_1.DrawerButton, { variant: "contained", onClick: toggleDrawer, open: drawerOpen, drawerProps: config?.containerStyle, children: [drawerOpen ? ((0, jsx_runtime_1.jsx)(KeyboardArrowRight_1.default, {})) : ((0, jsx_runtime_1.jsx)(KeyboardArrowLeft_1.default, {})), (0, jsx_runtime_1.jsx)(exports.DrawerButtonText, { open: drawerOpen, subvariant: config?.subvariant })] })) : null, (0, jsx_runtime_1.jsxs)(material_1.Drawer, { ref: elementRef, anchor: "right", open: drawerOpen, onClose: closeDrawer, BackdropProps: {
                    sx: {
                        backgroundColor: 'rgb(0 0 0 / 48%)',
                        backdropFilter: 'blur(3px)',
                    },
                }, PaperProps: {
                    sx: {
                        width: config?.containerStyle?.width ?? '100%',
                        minWidth: config?.containerStyle?.minWidth ?? 360,
                        maxWidth: config?.containerStyle?.maxWidth ?? 392,
                    },
                }, keepMounted: true, children: [(0, jsx_runtime_1.jsx)(AppDrawer_style_1.CloseButtonLayout, { onClick: closeDrawer, edge: "end", children: (0, jsx_runtime_1.jsx)(CloseRounded_1.default, {}) }), (0, jsx_runtime_1.jsx)(App_1.AppDefault, {})] })] }));
});
const DrawerButtonText = ({ open, subvariant, }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    return ((0, jsx_runtime_1.jsx)(AppDrawer_style_1.DrawerButtonTypography, { children: open
            ? t('button.hide')
            : subvariant === 'nft'
                ? t('button.lifiCheckout')
                : t('button.lifiExchange') }));
};
exports.DrawerButtonText = DrawerButtonText;
