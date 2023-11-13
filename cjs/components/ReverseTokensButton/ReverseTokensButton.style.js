"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconButton = void 0;
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
exports.IconButton = (0, styles_1.styled)(material_1.IconButton)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    border: `1px solid`,
    borderColor: theme.palette.mode === 'light'
        ? theme.palette.grey[300]
        : theme.palette.grey[800],
    zIndex: 1100,
    padding: theme.spacing(0.5),
    '&:hover': {
        backgroundColor: theme.palette.mode === 'light'
            ? (0, styles_1.darken)(theme.palette.background.paper, 0.02)
            : (0, styles_1.lighten)(theme.palette.background.paper, 0.02),
    },
}));
