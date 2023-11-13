import { jsx as _jsx } from "react/jsx-runtime";
import { Dialog as MuiDialog } from '@mui/material';
import { useGetScrollableContainer } from '../hooks';
export const modalProps = {
    sx: {
        position: 'fixed',
        overflow: 'hidden',
    },
};
export const paperProps = {
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
export const backdropProps = {
    sx: {
        position: 'absolute',
        backgroundColor: 'rgb(0 0 0 / 32%)',
        backdropFilter: 'blur(5px)',
    },
};
export const Dialog = ({ children, open, onClose, }) => {
    const getContainer = useGetScrollableContainer();
    return (_jsx(MuiDialog
    // container={getContainer}
    , { 
        // container={getContainer}
        open: open, onClose: onClose, sx: modalProps.sx, PaperProps: paperProps, BackdropProps: backdropProps, children: children }));
};
