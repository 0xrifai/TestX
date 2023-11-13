"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreviewAvatar = void 0;
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
exports.PreviewAvatar = (0, styles_1.styled)(material_1.Avatar)(({ theme }) => ({
    background: theme.palette.background.paper,
    width: 96,
    height: 96,
    borderRadius: theme.shape.borderRadius,
}));
