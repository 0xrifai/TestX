"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NFTBase = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const react_i18next_1 = require("react-i18next");
const Token_1 = require("../Token");
const NFT_style_1 = require("./NFT.style");
const NFTBase = ({ imageUrl, isLoading, collectionName, assetName, owner, token, }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    return ((0, jsx_runtime_1.jsxs)(material_1.Box, { p: 2, children: [(0, jsx_runtime_1.jsxs)(material_1.Box, { display: "flex", children: [isLoading ? ((0, jsx_runtime_1.jsx)(material_1.Skeleton, { width: 96, height: 96, variant: "rectangular", sx: { borderRadius: 1 } })) : ((0, jsx_runtime_1.jsx)(NFT_style_1.PreviewAvatar, { src: imageUrl })), (0, jsx_runtime_1.jsxs)(material_1.Box, { ml: 2, children: [isLoading ? ((0, jsx_runtime_1.jsx)(material_1.Skeleton, { width: 144, height: 21, variant: "text" })) : ((0, jsx_runtime_1.jsx)(material_1.Typography, { fontSize: 14, color: "text.secondary", children: collectionName })), isLoading ? ((0, jsx_runtime_1.jsx)(material_1.Skeleton, { width: 112, height: 27, variant: "text" })) : ((0, jsx_runtime_1.jsx)(material_1.Typography, { fontSize: 18, fontWeight: 600, children: assetName })), isLoading ? ((0, jsx_runtime_1.jsx)(material_1.Skeleton, { width: 128, height: 21, variant: "text" })) : owner ? ((0, jsx_runtime_1.jsxs)(material_1.Typography, { fontSize: 14, color: "text.secondary", children: [t('main.ownedBy'), ' ', (0, jsx_runtime_1.jsx)(material_1.Link, { href: owner.url, target: "_blank", underline: "none", color: "primary", children: owner.name })] })) : null] })] }), (0, jsx_runtime_1.jsx)(Token_1.Token, { token: token, isLoading: isLoading, mt: 2 })] }));
};
exports.NFTBase = NFTBase;
