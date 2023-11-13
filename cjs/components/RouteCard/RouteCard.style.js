"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconTypography = void 0;
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
exports.IconTypography = (0, styles_1.styled)(material_1.Typography)(({ theme }) => ({
    color: theme.palette.mode === 'light'
        ? (0, styles_1.alpha)(theme.palette.common.black, 0.24)
        : (0, styles_1.alpha)(theme.palette.common.white, 0.32),
    lineHeight: 0,
    marginRight: theme.spacing(0.5),
}));
