"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconButton = exports.ListItem = exports.ListItemButton = void 0;
const material_1 = require("@mui/material");
const ListItemSecondaryAction_1 = require("@mui/material/ListItemSecondaryAction");
const ListItemText_1 = require("@mui/material/ListItemText");
const styles_1 = require("@mui/material/styles");
const ListItemButton_1 = require("../ListItemButton");
exports.ListItemButton = (0, styles_1.styled)(ListItemButton_1.ListItemButton)(({ theme }) => ({
    // paddingLeft: theme.spacing(1.5),
    // paddingRight: theme.spacing(1.5),
    height: 64,
    width: '100%',
}));
exports.ListItem = (0, styles_1.styled)(material_1.ListItem)(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    height: 64,
    flexDirection: 'column',
    alignItems: 'flex-start',
    // padding: theme.spacing(0, 1.5),
    [`.${ListItemSecondaryAction_1.listItemSecondaryActionClasses.root}`]: {
        right: theme.spacing(3),
    },
    [`& .${ListItemText_1.listItemTextClasses.primary}`]: {
        height: 22,
    },
    [`& .${ListItemText_1.listItemTextClasses.primary}, & .${ListItemText_1.listItemTextClasses.secondary}`]: {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
    },
}));
exports.IconButton = (0, styles_1.styled)(material_1.IconButton)(({ theme }) => ({
    lineHeight: 1,
    fontSize: '0.75rem',
    fontWeight: 400,
    // padding: theme.spacing(0.375, 0.375),
    marginLeft: theme.spacing(0.25),
    color: 'inherit',
    backgroundColor: 'unset',
    minWidth: 'unset',
    borderRadius: '50%',
    '&:hover': {
        backgroundColor: theme.palette.mode === 'light'
            ? (0, styles_1.alpha)(theme.palette.common.black, 0.04)
            : (0, styles_1.alpha)(theme.palette.common.white, 0.08),
    },
    svg: {
        fontSize: '0.875rem',
    },
}));
