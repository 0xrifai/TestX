import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CloseIcon from '@mui/icons-material/CloseRounded';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Drawer } from '@mui/material';
import { forwardRef, useCallback, useImperativeHandle, useMemo, useRef, useState, } from 'react';
import { useTranslation } from 'react-i18next';
import { AppDefault } from './App';
import { CloseButtonLayout, DrawerButton, DrawerButtonTypography, } from './AppDrawer.style';
import { AppProvider } from './AppProvider';
import { HiddenUI } from './types';
// eslint-disable-next-line react/display-name
export const AppDrawer = forwardRef(({ elementRef, open, integrator, config }, ref) => {
    const openRef = useRef(open);
    const [drawerOpen, setDrawerOpen] = useState(Boolean(open));
    const toggleDrawer = useCallback(() => {
        setDrawerOpen((open) => !open);
    }, []);
    const openDrawer = useCallback(() => {
        setDrawerOpen(true);
    }, []);
    const closeDrawer = useCallback(() => {
        setDrawerOpen(false);
    }, []);
    useImperativeHandle(ref, () => ({
        isOpen: () => openRef.current,
        toggleDrawer,
        openDrawer,
        closeDrawer,
    }), [closeDrawer, openDrawer, toggleDrawer]);
    const widgetConfig = useMemo(() => ({
        ...config,
        integrator,
        containerStyle: {
            ...config?.containerStyle,
            height: '100%',
        },
    }), [config, integrator]);
    return (_jsxs(AppProvider, { config: widgetConfig, children: [!widgetConfig.hiddenUI?.includes(HiddenUI.DrawerButton) ? (_jsxs(DrawerButton, { variant: "contained", onClick: toggleDrawer, open: drawerOpen, drawerProps: config?.containerStyle, children: [drawerOpen ? (_jsx(KeyboardArrowRightIcon, {})) : (_jsx(KeyboardArrowLeftIcon, {})), _jsx(DrawerButtonText, { open: drawerOpen, subvariant: config?.subvariant })] })) : null, _jsxs(Drawer, { ref: elementRef, anchor: "right", open: drawerOpen, onClose: closeDrawer, BackdropProps: {
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
                }, keepMounted: true, children: [_jsx(CloseButtonLayout, { onClick: closeDrawer, edge: "end", children: _jsx(CloseIcon, {}) }), _jsx(AppDefault, {})] })] }));
});
export const DrawerButtonText = ({ open, subvariant, }) => {
    const { t } = useTranslation();
    return (_jsx(DrawerButtonTypography, { children: open
            ? t('button.hide')
            : subvariant === 'nft'
                ? t('button.lifiCheckout')
                : t('button.lifiExchange') }));
};
