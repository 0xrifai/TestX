"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
const styles_1 = require("@mui/material/styles");
const Input_1 = require("../../components/Input");
exports.Input = (0, styles_1.styled)(Input_1.Input)(({ theme }) => ({
    paddingRight: theme.spacing(1.5),
}));
