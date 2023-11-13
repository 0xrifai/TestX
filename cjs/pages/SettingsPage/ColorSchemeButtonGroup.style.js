"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToggleButton = void 0;
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const ToggleButton_1 = require("@mui/material/ToggleButton");
exports.ToggleButton = (0, styles_1.styled)(material_1.ToggleButton)(({ theme }) => ({
    textTransform: 'none',
    borderRadius: theme.shape.borderRadius,
    borderColor: theme.palette.mode === 'light'
        ? theme.palette.grey[300]
        : theme.palette.grey[800],
    [`&.${ToggleButton_1.toggleButtonClasses.selected}`]: {
        color: theme.palette.mode === 'light'
            ? theme.palette.primary.main
            : theme.palette.primary.light,
        borderColor: 'currentColor !important',
    },
}));
