"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavbarTab = exports.NavbarTabs = void 0;
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
exports.NavbarTabs = (0, styles_1.styled)(material_1.Tabs)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark'
        ? theme.palette.background.paper
        : (0, styles_1.alpha)(theme.palette.common.black, 0.04),
    borderRadius: Math.max(theme.shape.borderRadius, theme.shape.borderRadiusSecondary),
    padding: theme.spacing(0.5),
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    height: 56,
    [`.${material_1.tabsClasses.flexContainer}`]: {
        alignItems: 'center',
    },
    [`.${material_1.tabsClasses.scroller}`]: {
        overflow: 'initial !important',
    },
    [`.${material_1.tabsClasses.indicator}`]: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        height: 48,
        backgroundColor: theme.palette.mode === 'dark'
            ? theme.palette.background.default
            : theme.palette.common.white,
        borderRadius: theme.shape.borderRadiusSecondary,
        boxShadow: `0px 2px 4px ${(0, styles_1.alpha)(theme.palette.common.black, 0.04)}`,
    },
}));
exports.NavbarTab = (0, styles_1.styled)(material_1.Tab, {
    shouldForwardProp: (prop) => prop !== 'isDarkMode',
})(({ theme }) => ({
    zIndex: 1,
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    textTransform: 'none',
    height: 48,
    minHeight: 48,
    fontSize: '1rem',
    fontWeight: 700,
    color: theme.palette.mode === 'dark'
        ? theme.palette.common.white
        : theme.palette.common.black,
    textDecoration: 'none',
    [`&.${material_1.tabClasses.selected}`]: {
        color: theme.palette.mode === 'dark'
            ? theme.palette.common.white
            : theme.palette.common.black,
        backgroundColor: 'transparent',
    },
    [`.${material_1.tabClasses.iconWrapper}`]: {
        margin: theme.spacing(0, 1, 0, 0),
    },
}));
