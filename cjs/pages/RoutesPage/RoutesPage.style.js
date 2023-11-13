"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
exports.Stack = (0, styles_1.styled)(material_1.Stack)(({ theme }) => ({
    position: 'relative',
    padding: theme.spacing(1, 3),
}));
