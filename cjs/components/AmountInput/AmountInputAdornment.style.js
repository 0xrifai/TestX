"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
exports.Button = (0, styles_1.styled)(material_1.Button)(({ theme }) => ({
    padding: theme.spacing(0.5, 1, 0.625, 1),
    lineHeight: 1.0715,
    fontSize: '0.875rem',
    minWidth: 'unset',
}));
