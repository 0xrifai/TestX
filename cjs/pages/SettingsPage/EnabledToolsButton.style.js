"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListItemText = exports.ListItemButton = void 0;
const material_1 = require("@mui/material");
const ListItemText_1 = require("@mui/material/ListItemText");
const styles_1 = require("@mui/material/styles");
const ListItemButton_1 = require("../../components/ListItemButton");
exports.ListItemButton = (0, styles_1.styled)(ListItemButton_1.ListItemButton)(({ theme }) => ({
    height: 48,
    paddingRight: theme.spacing(0.5),
}));
exports.ListItemText = (0, styles_1.styled)(material_1.ListItemText)({
    [`.${ListItemText_1.listItemTextClasses.primary}`]: {
        fontWeight: 400,
        fontSize: '1rem',
    },
});
