"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletMenu = void 0;
const material_1 = require("@mui/material");
const Menu_1 = require("@mui/material/Menu");
const MenuItem_1 = require("@mui/material/MenuItem");
const styles_1 = require("@mui/material/styles");
const SvgIcon_1 = require("@mui/material/SvgIcon");
exports.WalletMenu = (0, styles_1.styled)(material_1.Menu)(({ theme }) => ({
    [`& .${Menu_1.menuClasses.paper}`]: {
        borderRadius: theme.shape.borderRadius,
        color: theme.palette.text.primary,
        boxShadow: '0px 2px 4px rgb(0 0 0 / 8%), 0px 8px 16px rgb(0 0 0 / 8%)',
        padding: theme.spacing(2),
        [`& .${Menu_1.menuClasses.list}`]: {
            padding: 0,
        },
        [`& .${MenuItem_1.menuItemClasses.root}`]: {
            borderRadius: theme.shape.borderRadiusSecondary,
            padding: theme.spacing(1, 2, 1, 1),
            [`& .${SvgIcon_1.svgIconClasses.root}`]: {
                fontSize: 20,
                color: theme.palette.text.primary,
                marginRight: theme.spacing(1.5),
            },
        },
    },
}));
