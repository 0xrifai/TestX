"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkButton = void 0;
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
exports.LinkButton = (0, styles_1.styled)(material_1.IconButton)(({ theme }) => ({
    padding: theme.spacing(0.5),
}));
