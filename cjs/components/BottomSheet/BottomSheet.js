"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BottomSheet = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const material_1 = require("@mui/material");
const hooks_1 = require("../../hooks");
const Dialog_1 = require("../Dialog");
// eslint-disable-next-line react/display-name
exports.BottomSheet = (0, react_1.forwardRef)(({ elementRef, children, open: propOpen = false, onClose, }, ref) => {
    const getContainer = (0, hooks_1.useGetScrollableContainer)();
    const openRef = (0, react_1.useRef)(propOpen);
    const [drawerOpen, setDrawerOpen] = (0, react_1.useState)(propOpen);
    const theme = (0, material_1.useTheme)();
    const isDesktop = (0, material_1.useMediaQuery)(theme.breakpoints.up('sm'));
    const close = (0, react_1.useCallback)(() => {
        setDrawerOpen(false);
        openRef.current = false;
        onClose?.();
    }, [onClose]);
    (0, react_1.useImperativeHandle)(ref, () => ({
        isOpen: () => openRef.current,
        open: () => {
            setDrawerOpen(true);
            openRef.current = true;
        },
        close,
    }), [close]);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: !isDesktop ? ((0, jsx_runtime_1.jsx)(material_1.Drawer
        // container={getContainer}
        , { 
            // container={getContainer}
            ref: elementRef, anchor: "bottom", open: drawerOpen, onClose: close, ModalProps: Dialog_1.modalProps, PaperProps: Dialog_1.paperProps, BackdropProps: Dialog_1.backdropProps, disableAutoFocus: true, children: children })) : ((0, jsx_runtime_1.jsx)(material_1.Dialog
        // container={getContainer}
        , { 
            // container={getContainer}
            ref: elementRef, open: drawerOpen, onClose: close, PaperProps: Dialog_1.paperProps, BackdropProps: Dialog_1.backdropProps, disableAutoFocus: true, children: children })) }));
});
