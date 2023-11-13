"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetButtonContainer = void 0;
const utils_1 = require("../../utils");
const material_1 = require("@mui/material");
exports.ResetButtonContainer = (0, material_1.styled)(material_1.Box)(({ theme }) => ({
    background: (0, utils_1.getContrastAlphaColor)(theme.palette.mode, '4%'),
    borderRadius: '16px',
    padding: '16px',
    [`svg`]: {
        fill: (0, utils_1.getContrastAlphaColor)(theme.palette.mode, '40%'),
    },
}));
