"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiFiLogo = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const icons_1 = require("../icons");
const LiFiLogo = ({ variant = 'icon', style }) => {
    const Component = variant === 'icon' ? icons_1.LiFiLogo : icons_1.LiFiFullLogo;
    return (0, jsx_runtime_1.jsx)(Component, { style: style, fill: "currentColor", color: "currentColor" });
};
exports.LiFiLogo = LiFiLogo;
