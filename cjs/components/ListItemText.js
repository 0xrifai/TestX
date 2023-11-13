"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListItemText = void 0;
const material_1 = require("@mui/material");
const ListItemText_1 = require("@mui/material/ListItemText");
const styles_1 = require("@mui/material/styles");
exports.ListItemText = (0, styles_1.styled)(material_1.ListItemText)(({ theme }) => ({
    [`.${ListItemText_1.listItemTextClasses.primary}`]: {
        fontWeight: 400,
    },
}));
