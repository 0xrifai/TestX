"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepDivider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const StepDivider_style_1 = require("./StepDivider.style");
const StepDivider = () => {
    return ((0, jsx_runtime_1.jsx)(StepDivider_style_1.Container, { children: (0, jsx_runtime_1.jsx)(material_1.Divider, { orientation: "vertical", flexItem: true }) }));
};
exports.StepDivider = StepDivider;
