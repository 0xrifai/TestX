"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenDivider = exports.TextSecondary = exports.TextSecondaryContainer = void 0;
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
exports.TextSecondaryContainer = (0, styles_1.styled)(material_1.Box, {
    shouldForwardProp: (prop) => prop !== 'connected',
})(({ theme, connected }) => ({
    borderLeftWidth: connected ? 2 : 0,
    borderLeftStyle: 'solid',
    borderColor: theme.palette.mode === 'light'
        ? theme.palette.grey[300]
        : theme.palette.grey[800],
    margin: connected
        ? theme.spacing(0.5, 0, 0, 1.875)
        : theme.spacing(0, 0, 0, 6),
    padding: connected
        ? theme.spacing(0, 0, 0, 3.875)
        : theme.spacing(0, 0, 0, 0),
    display: 'flex',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
}));
exports.TextSecondary = (0, styles_1.styled)(material_1.Typography, {
    shouldForwardProp: (prop) => !['connected', 'dot'].includes(prop),
})(({ theme, connected, dot }) => ({
    fontSize: 12,
    lineHeight: 1,
    fontWeight: 500,
    color: dot
        ? (0, styles_1.alpha)(theme.palette.text.secondary, 0.56)
        : theme.palette.text.secondary,
    marginTop: connected ? 0 : theme.spacing(0.5),
}));
exports.TokenDivider = (0, styles_1.styled)(material_1.Box)(({ theme }) => ({
    height: 12,
    borderLeftWidth: 2,
    borderLeftStyle: 'solid',
    borderColor: theme.palette.mode === 'light'
        ? theme.palette.grey[300]
        : theme.palette.grey[800],
    margin: theme.spacing(0, 0, 0, 3.875),
    padding: theme.spacing(0, 0, 0, 3.875),
}));
