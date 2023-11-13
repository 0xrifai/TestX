"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenAvatarDefault = exports.TokenAvatar = exports.TokenAvatarBase = exports.TokenAvatarFallback = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const hooks_1 = require("../../hooks");
const SmallAvatar_1 = require("../SmallAvatar");
const TokenAvatar_style_1 = require("./TokenAvatar.style");
const TokenAvatarFallback = ({ token, isLoading, sx }) => {
    const { chain } = (0, hooks_1.useChain)(token?.chainId);
    const { token: chainToken, isLoading: isLoadingToken } = (0, hooks_1.useToken)(token?.chainId, token?.address);
    return ((0, jsx_runtime_1.jsx)(exports.TokenAvatarBase, { token: chainToken ?? token, isLoading: isLoading || isLoadingToken, chain: chain, sx: sx }));
};
exports.TokenAvatarFallback = TokenAvatarFallback;
const TokenAvatarBase = ({ token, chain, isLoading, sx }) => {
    return ((0, jsx_runtime_1.jsx)(material_1.Badge, { overlap: "circular", anchorOrigin: { vertical: 'bottom', horizontal: 'right' }, badgeContent: chain && !isLoading ? ((0, jsx_runtime_1.jsx)(SmallAvatar_1.SmallAvatar, { src: chain.logoURI, alt: chain.name, children: chain.name[0] })) : ((0, jsx_runtime_1.jsx)(SmallAvatar_1.SmallAvatarSkeleton, {})), sx: sx, children: isLoading ? ((0, jsx_runtime_1.jsx)(material_1.Skeleton, { width: 32, height: 32, variant: "circular" })) : ((0, jsx_runtime_1.jsx)(material_1.Avatar, { src: token?.logoURI, alt: token?.symbol, children: token?.symbol?.[0] })) }));
};
exports.TokenAvatarBase = TokenAvatarBase;
const TokenAvatar = ({ token, chain, isLoading, sx }) => {
    if (!chain || !token?.logoURI) {
        return (0, jsx_runtime_1.jsx)(exports.TokenAvatarFallback, { token: token, isLoading: isLoading, sx: sx });
    }
    return ((0, jsx_runtime_1.jsx)(exports.TokenAvatarBase, { token: token, chain: chain, isLoading: isLoading, sx: sx }));
};
exports.TokenAvatar = TokenAvatar;
const TokenAvatarDefault = ({ sx }) => {
    return ((0, jsx_runtime_1.jsx)(material_1.Badge, { overlap: "circular", anchorOrigin: { vertical: 'bottom', horizontal: 'right' }, badgeContent: (0, jsx_runtime_1.jsx)(TokenAvatar_style_1.AvatarDefaultBadge, { width: 16, height: 16 }), sx: sx, children: (0, jsx_runtime_1.jsx)(TokenAvatar_style_1.AvatarDefault, { width: 32, height: 32 }) }));
};
exports.TokenAvatarDefault = TokenAvatarDefault;
