"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dialog = exports.backdropProps = exports.paperProps = exports.modalProps = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const hooks_1 = require("../hooks");
exports.modalProps = {
    sx: {
        position: 'fixed',
        overflow: 'hidden',
    },
};
exports.paperProps = {
    sx: (theme) => ({
        position: 'absolute',
        backgroundImage: 'none',
        background: '#121212',
        borderTopLeftRadius: theme.shape.borderRadius,
        borderTopRightRadius: theme.shape.borderRadius,
        overflow: 'hidden',
        [theme.breakpoints.up('sm')]: {
            width: '440px'
        },
    }),
};
exports.backdropProps = {
    sx: {
        position: 'absolute',
        backgroundColor: 'rgb(0 0 0 / 32%)',
        backdropFilter: 'blur(5px)',
    },
};
const Dialog = ({ children, open, onClose, }) => {
    const getContainer = (0, hooks_1.useGetScrollableContainer)();
    return ((0, jsx_runtime_1.jsx)(material_1.Dialog
    // container={getContainer}
    , { 
        // container={getContainer}
        open: open, onClose: onClose, sx: exports.modalProps.sx, PaperProps: exports.paperProps, BackdropProps: exports.backdropProps, children: children }));
};
exports.Dialog = Dialog;
