"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = exports.FormControl = void 0;
const material_1 = require("@mui/material");
const InputBase_1 = require("@mui/material/InputBase");
const styles_1 = require("@mui/material/styles");
exports.FormControl = (0, styles_1.styled)(material_1.FormControl)(({ theme }) => ({
    padding: theme.spacing(1.5, 2, 1.5, 0),
}));
exports.Input = (0, styles_1.styled)(material_1.InputBase)(({ theme }) => ({
    [`.${InputBase_1.inputBaseClasses.input}`]: {
        height: 32,
        padding: theme.spacing(0, 0, 0, 2),
    },
    [`&.${InputBase_1.inputBaseClasses.disabled}`]: {
        color: 'inherit',
    },
    [`.${InputBase_1.inputBaseClasses.input}.${InputBase_1.inputBaseClasses.disabled}`]: {
        WebkitTextFillColor: 'unset',
    },
}));
