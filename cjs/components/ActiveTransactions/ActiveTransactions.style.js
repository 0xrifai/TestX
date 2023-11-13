"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowAllButton = exports.ListItem = exports.ListItemButton = void 0;
const material_1 = require("@mui/material");
const ListItemSecondaryAction_1 = require("@mui/material/ListItemSecondaryAction");
const styles_1 = require("@mui/material/styles");
const utils_1 = require("../../utils");
exports.ListItemButton = (0, styles_1.styled)(material_1.ListItemButton)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(1.5),
    height: 64,
    '&:hover': {
        backgroundColor: (0, utils_1.getContrastAlphaColor)(theme.palette.mode, '4%'),
    },
}));
exports.ListItem = (0, styles_1.styled)(material_1.ListItem, {
    shouldForwardProp: (prop) => prop !== 'disableRipple',
})(({ theme }) => ({
    padding: theme.spacing(0, 1.5),
    [`.${ListItemSecondaryAction_1.listItemSecondaryActionClasses.root}`]: {
        right: theme.spacing(3),
    },
    '&:hover': {
        cursor: 'pointer',
    },
}));
exports.ShowAllButton = (0, styles_1.styled)(material_1.Button)(({ theme }) => ({
    background: 'none',
    '&:hover': {
        background: 'none',
        opacity: 0.5
    },
    padding: theme.spacing(1.75, 0, 0, 0),
    width: '120px',
    fontSize: '0.875rem',
}));
