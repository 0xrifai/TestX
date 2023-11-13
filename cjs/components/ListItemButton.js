"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListItemButton = void 0;
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const utils_1 = require("../utils");
exports.ListItemButton = (0, styles_1.styled)(material_1.ListItemButton)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    paddingLeft: theme.spacing(1.5),
    height: 56,
    '&:hover': {
        backgroundColor: (0, utils_1.getContrastAlphaColor)(theme.palette.mode, '4%'),
    },
}));
