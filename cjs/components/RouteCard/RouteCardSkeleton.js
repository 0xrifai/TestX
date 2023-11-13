"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteCardSkeleton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const providers_1 = require("../../providers");
const Card_1 = require("../Card");
const RouteCardSkeleton = ({ variant, ...other }) => {
    const { subvariant } = (0, providers_1.useWidgetConfig)();
    const cardContent = ((0, jsx_runtime_1.jsxs)(material_1.Box, { flex: 1, children: [subvariant !== 'refuel' && subvariant !== 'nft' ? ((0, jsx_runtime_1.jsx)(material_1.Box, { display: "flex", alignItems: "center", mb: 2, children: (0, jsx_runtime_1.jsx)(material_1.Skeleton, { variant: "rectangular", width: 112, height: 24, sx: (theme) => ({
                        borderRadius: `${theme.shape.borderRadius}px`,
                    }) }) })) : null, (0, jsx_runtime_1.jsxs)(material_1.Box, { children: [(0, jsx_runtime_1.jsxs)(material_1.Box, { display: "flex", alignItems: "center", children: [(0, jsx_runtime_1.jsx)(material_1.Box, { mr: 2, children: (0, jsx_runtime_1.jsx)(material_1.Skeleton, { variant: "circular", width: 32, height: 32 }) }), (0, jsx_runtime_1.jsx)(material_1.Skeleton, { variant: "text", width: 96, height: 32 })] }), (0, jsx_runtime_1.jsxs)(material_1.Box, { ml: 6, display: "flex", alignItems: "center", children: [(0, jsx_runtime_1.jsx)(material_1.Skeleton, { variant: "text", width: 102, height: 16 }), (0, jsx_runtime_1.jsx)(material_1.Skeleton, { variant: "text", width: 72, height: 16, sx: { marginLeft: 1 } })] })] }), (0, jsx_runtime_1.jsxs)(material_1.Box, { mt: 2, display: "flex", justifyContent: "space-between", children: [(0, jsx_runtime_1.jsx)(material_1.Skeleton, { variant: "text", width: 64, height: 20 }), (0, jsx_runtime_1.jsx)(material_1.Skeleton, { variant: "text", width: 64, height: 20 }), (0, jsx_runtime_1.jsx)(material_1.Skeleton, { variant: "text", width: 48, height: 20 }), (0, jsx_runtime_1.jsx)(material_1.Skeleton, { variant: "text", width: 32, height: 20 })] })] }));
    return subvariant === 'refuel' || variant === 'cardless' ? (cardContent) : ((0, jsx_runtime_1.jsx)(Card_1.Card, { indented: true, ...other, children: cardContent }));
};
exports.RouteCardSkeleton = RouteCardSkeleton;
