"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmallAvatarSkeleton = exports.SmallAvatarSkeletonContainer = exports.SmallAvatarSkeletonBase = exports.SmallAvatar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
exports.SmallAvatar = (0, styles_1.styled)(material_1.Avatar)(({ theme }) => ({
    background: theme.palette.background.paper,
    width: 16,
    height: 16,
    border: `2px solid ${theme.palette.background.paper}`,
}));
exports.SmallAvatarSkeletonBase = (0, styles_1.styled)(material_1.Skeleton)(({ theme }) => ({
    border: `2px solid ${theme.palette.background.paper}`,
    width: 16,
    height: 16,
}));
exports.SmallAvatarSkeletonContainer = (0, styles_1.styled)(material_1.Box)(({ theme }) => ({
    background: theme.palette.background.paper,
    borderRadius: '50%',
}));
const SmallAvatarSkeleton = () => {
    return ((0, jsx_runtime_1.jsx)(exports.SmallAvatarSkeletonContainer, { children: (0, jsx_runtime_1.jsx)(exports.SmallAvatarSkeletonBase, { variant: "circular" }) }));
};
exports.SmallAvatarSkeleton = SmallAvatarSkeleton;
