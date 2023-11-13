"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useExpandableVariant = void 0;
const material_1 = require("@mui/material");
const providers_1 = require("../providers");
const defaultExpandableWidth = 852;
const useExpandableVariant = () => {
    const { variant, useRecommendedRoute } = (0, providers_1.useWidgetConfig)();
    const expandableAllowed = (0, material_1.useMediaQuery)((theme) => theme.breakpoints.up(defaultExpandableWidth));
    return variant === 'expandable' && expandableAllowed && !useRecommendedRoute;
};
exports.useExpandableVariant = useExpandableVariant;
