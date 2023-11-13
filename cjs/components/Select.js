"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = void 0;
const material_1 = require("@mui/material");
const InputBase_1 = require("@mui/material/InputBase");
const ListItemIcon_1 = require("@mui/material/ListItemIcon");
const OutlinedInput_1 = require("@mui/material/OutlinedInput");
const Select_1 = require("@mui/material/Select");
const styles_1 = require("@mui/material/styles");
exports.Select = (0, styles_1.styled)(material_1.Select, {
    shouldForwardProp: (prop) => prop !== 'dense',
})(({ theme, dense }) => ({
    backgroundColor: theme.palette.mode === 'light'
        ? theme.palette.common.white
        : theme.palette.background.paper,
    [`.${InputBase_1.inputBaseClasses.input}`]: {
        padding: dense ? theme.spacing(1.625, 2, 1.5, 2) : theme.spacing(2),
        display: 'flex',
        alignItems: 'center',
    },
    [`.${Select_1.selectClasses.icon}`]: {
        right: 10,
        color: theme.palette.text.primary,
    },
    [`.${ListItemIcon_1.listItemIconClasses.root}`]: {
        minWidth: 38,
    },
    [`.${OutlinedInput_1.outlinedInputClasses.notchedOutline}`]: {
        display: 'none',
    },
}));
