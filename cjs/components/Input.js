"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
const material_1 = require("@mui/material");
const InputBase_1 = require("@mui/material/InputBase");
const styles_1 = require("@mui/material/styles");
exports.Input = (0, styles_1.styled)(material_1.InputBase)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light'
        ? theme.palette.common.white
        : theme.palette.background.paper,
    paddingRight: theme.spacing(2),
    [`.${InputBase_1.inputBaseClasses.input}`]: {
        padding: theme.spacing(1.5, 1, 1.5, 2),
        height: '2.875em',
        boxSizing: 'inherit',
    },
}));
