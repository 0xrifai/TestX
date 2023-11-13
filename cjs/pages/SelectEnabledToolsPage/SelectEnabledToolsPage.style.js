"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListItemButton = void 0;
const styles_1 = require("@mui/material/styles");
const ListItemButton_1 = require("../../components/ListItemButton");
exports.ListItemButton = (0, styles_1.styled)(ListItemButton_1.ListItemButton)(({ theme }) => ({
    paddingRight: theme.spacing(1),
}));
