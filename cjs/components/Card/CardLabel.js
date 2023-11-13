"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardLabelTypography = exports.CardLabel = void 0;
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
exports.CardLabel = (0, styles_1.styled)(material_1.Box, {
    shouldForwardProp: (prop) => prop !== 'type',
})(({ theme, type }) => ({
    backgroundColor: type === 'active'
        ? theme.palette.mode === 'light'
            ? theme.palette.secondary.main
            : (0, styles_1.alpha)(theme.palette.secondary.main, 0.32)
        : type?.includes('insurance')
            ? (0, styles_1.alpha)(theme.palette.success.main, theme.palette.mode === 'light' ? 0.12 : 0.24)
            : theme.palette.mode === 'light'
                ? (0, styles_1.alpha)(theme.palette.common.black, 0.12)
                : (0, styles_1.alpha)(theme.palette.common.white, 0.16),
    borderRadius: theme.shape.borderRadius,
    color: type?.includes('insurance')
        ? (0, styles_1.lighten)(theme.palette.success.main, theme.palette.mode === 'light' ? 0 : 0.24)
        : theme.palette.text.primary,
    padding: type === 'insurance' ? theme.spacing(0, 1.5) : 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 24,
    minWidth: 24,
    userSelect: 'none',
    fontSize: '1rem',
    marginRight: theme.spacing(1),
}));
exports.CardLabelTypography = (0, styles_1.styled)(material_1.Typography, {
    shouldForwardProp: (prop) => prop !== 'type',
})(({ theme, type }) => ({
    padding: type === 'icon'
        ? theme.spacing(0.75, 0, 0.75, 0.75)
        : theme.spacing(0.75, 1.5),
    fontSize: 12,
    lineHeight: 1,
    fontWeight: '600',
    textTransform: 'lowercase',
    '&::first-letter': {
        textTransform: 'uppercase',
    },
}));
