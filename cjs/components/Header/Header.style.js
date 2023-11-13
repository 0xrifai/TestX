"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawerWalletContainer = exports.WalletButton = exports.Container = exports.HeaderAppBar = void 0;
const material_1 = require("@mui/material");
const Button_1 = require("@mui/material/Button");
const styles_1 = require("@mui/material/styles");
exports.HeaderAppBar = (0, styles_1.styled)(material_1.Box)(({ theme }) => ({
    backgroundColor: 'transparent',
    color: theme.palette.text.primary,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    minHeight: 40,
    // padding: theme.spacing(0, 3, 0, 3),
    ':first-of-type': {
        paddingTop: theme.spacing(1.5),
        paddingBottom: theme.spacing(0.5),
    },
}));
exports.Container = (0, styles_1.styled)(material_1.Box, {
    shouldForwardProp: (prop) => prop !== 'sticky',
})(({ theme, sticky }) => ({
    backgroundColor: theme.palette.background.default,
    backdropFilter: 'blur(12px)',
    position: sticky ? 'sticky' : 'relative',
    top: 0,
    zIndex: 1200,
}));
exports.WalletButton = (0, styles_1.styled)(material_1.Button)(({ theme }) => ({
    color: theme.palette.text.primary,
    backgroundColor: 'transparent',
    padding: theme.spacing(1, 1.5),
    maxHeight: 40,
    fontSize: '0.875rem',
    fontWeight: 600,
    borderRadius: theme.shape.borderRadius * 2,
    '&:hover': {
        backgroundColor: theme.palette.mode === 'light'
            ? (0, styles_1.alpha)(theme.palette.common.black, 0.04)
            : (0, styles_1.alpha)(theme.palette.common.white, 0.08),
    },
    [`.${Button_1.buttonClasses.endIcon} > *:nth-of-type(1)`]: {
        fontSize: '24px',
    },
    [`.${Button_1.buttonClasses.startIcon} > *:nth-of-type(1)`]: {
        fontSize: '24px',
    },
}));
exports.DrawerWalletContainer = (0, styles_1.styled)(material_1.Box)(() => ({
    width: '100%',
    display: 'flex',
    justifyItems: 'start',
    '& > button': {
        marginLeft: '-0.5rem',
    },
}));
