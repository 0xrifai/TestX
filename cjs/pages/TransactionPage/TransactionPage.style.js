"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
exports.Container = (0, styles_1.styled)(material_1.Container)(({ theme }) => ({
    padding: theme.spacing(1, 3),
}));
