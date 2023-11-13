"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const material_1 = require("@mui/material");
const Badge_1 = require("@mui/material/Badge");
const styles_1 = require("@mui/material/styles");
const getBackgroundColor = (theme, variant, selectionColor) => variant === 'selected'
    ? selectionColor === 'primary'
        ? theme.palette.mode === 'light'
            ? (0, styles_1.alpha)(theme.palette.primary.main, 0.04)
            : (0, styles_1.alpha)(theme.palette.primary.main, 0.42)
        : (0, styles_1.alpha)(theme.palette.secondary.main, theme.palette.mode === 'light' ? 0.08 : 0.12)
    : theme.palette.background.paper;
exports.Card = (0, styles_1.styled)(material_1.Box, {
    shouldForwardProp: (prop) => !['variant', 'indented', 'selectionColor', 'pointerEvents'].includes(prop),
})(({ theme, variant, selectionColor = 'primary', indented, pointerEvents, onClick, }) => {
    const backgroundColor = getBackgroundColor(theme, variant, selectionColor);
    const backgroundHoverColor = onClick
        ? theme.palette.mode === 'light'
            ? (0, styles_1.darken)(backgroundColor, 0.02)
            : (0, styles_1.lighten)(backgroundColor, 0.02)
        : backgroundColor;
    return {
        backgroundColor,
        border: `1px solid`,
        borderColor: variant === 'error'
            ? theme.palette.error.main
            : variant === 'selected'
                ? selectionColor === 'primary'
                    ? theme.palette.primary.main
                    : (0, styles_1.alpha)(theme.palette.secondary.main, 0.48)
                : theme.palette.mode === 'light'
                    ? theme.palette.grey[300]
                    : theme.palette.grey[800],
        borderRadius: theme.shape.borderRadius,
        overflow: 'hidden',
        position: 'relative',
        padding: indented ? theme.spacing(2) : 0,
        boxSizing: 'border-box',
        '&:hover': {
            cursor: onClick ? 'pointer' : 'default',
            backgroundColor: backgroundHoverColor,
        },
        [`&:hover .${Badge_1.badgeClasses.badge} > div`]: {
            borderColor: backgroundHoverColor,
        },
        transition: theme.transitions.create(['background-color'], {
            duration: theme.transitions.duration.enteringScreen,
            easing: theme.transitions.easing.easeOut,
        }),
        pointerEvents,
    };
});
