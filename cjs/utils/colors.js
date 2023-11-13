"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContrastTextColor = exports.getContrastAlphaColor = void 0;
const colors_1 = require("@mui/material/colors");
const styles_1 = require("@mui/material/styles");
const getContrastAlphaColor = (mode, alpha) => mode === 'light' ? `rgb(0 0 0 / ${alpha})` : `rgb(255 255 255 / ${alpha})`;
exports.getContrastAlphaColor = getContrastAlphaColor;
const getContrastTextColor = (theme, background) => (0, styles_1.getContrastRatio)(colors_1.common.white, background ?? theme.palette.primary.main) >= 3
    ? colors_1.common.white
    : colors_1.common.black;
exports.getContrastTextColor = getContrastTextColor;
