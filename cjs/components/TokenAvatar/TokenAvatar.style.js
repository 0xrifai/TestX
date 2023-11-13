"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarDefaultBadge = exports.AvatarDefault = exports.TokenAvatarGroup = void 0;
const material_1 = require("@mui/material");
const Avatar_1 = require("@mui/material/Avatar");
const Badge_1 = require("@mui/material/Badge");
const styles_1 = require("@mui/material/styles");
exports.TokenAvatarGroup = (0, styles_1.styled)(material_1.AvatarGroup)(({ theme }) => ({
    [`& .${Badge_1.badgeClasses.badge}:last-child .${Avatar_1.avatarClasses.root}`]: {
        marginLeft: theme.spacing(-1),
        boxSizing: 'border-box',
    },
    [`& .${Badge_1.badgeClasses.root}:last-child`]: {
        marginLeft: theme.spacing(1),
    },
}));
exports.AvatarDefault = (0, styles_1.styled)(material_1.Box)(({ theme }) => ({
    background: theme.palette.mode === 'light'
        ? theme.palette.grey[300]
        : theme.palette.grey[800],
    borderRadius: '50%',
}));
exports.AvatarDefaultBadge = (0, styles_1.styled)(material_1.Box)(({ theme }) => ({
    background: theme.palette.mode === 'light'
        ? theme.palette.grey[300]
        : theme.palette.grey[800],
    border: `2px solid ${theme.palette.background.paper}`,
    borderRadius: '50%',
}));
