import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useRef, useState, useCallback, useImperativeHandle, forwardRef } from 'react';
import { Dialog, Drawer, useMediaQuery, useTheme } from '@mui/material';
import { useGetScrollableContainer } from '../../hooks';
import { backdropProps, modalProps, paperProps } from '../Dialog';
// eslint-disable-next-line react/display-name
export const BottomSheet = forwardRef(({ elementRef, children, open: propOpen = false, onClose, }, ref) => {
    const getContainer = useGetScrollableContainer();
    const openRef = useRef(propOpen);
    const [drawerOpen, setDrawerOpen] = useState(propOpen);
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
    const close = useCallback(() => {
        setDrawerOpen(false);
        openRef.current = false;
        onClose?.();
    }, [onClose]);
    useImperativeHandle(ref, () => ({
        isOpen: () => openRef.current,
        open: () => {
            setDrawerOpen(true);
            openRef.current = true;
        },
        close,
    }), [close]);
    return (_jsx(_Fragment, { children: !isDesktop ? (_jsx(Drawer
        // container={getContainer}
        , { 
            // container={getContainer}
            ref: elementRef, anchor: "bottom", open: drawerOpen, onClose: close, ModalProps: modalProps, PaperProps: paperProps, BackdropProps: backdropProps, disableAutoFocus: true, children: children })) : (_jsx(Dialog
        // container={getContainer}
        , { 
            // container={getContainer}
            ref: elementRef, open: drawerOpen, onClose: close, PaperProps: paperProps, BackdropProps: backdropProps, disableAutoFocus: true, children: children })) }));
});
