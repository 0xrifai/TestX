"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepProcess = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const LinkRounded_1 = require("@mui/icons-material/LinkRounded");
const material_1 = require("@mui/material");
const hooks_1 = require("../../hooks");
const CircularProgress_1 = require("./CircularProgress");
const StepProcess_style_1 = require("./StepProcess.style");
const StepProcess = ({ step, process }) => {
    const { title, message } = (0, hooks_1.useProcessMessage)(step, process);
    return ((0, jsx_runtime_1.jsxs)(material_1.Box, { px: 2, py: 1, children: [(0, jsx_runtime_1.jsxs)(material_1.Box, { sx: {
                    display: 'flex',
                    alignItems: 'center',
                }, children: [(0, jsx_runtime_1.jsx)(CircularProgress_1.CircularProgress, { process: process }), (0, jsx_runtime_1.jsx)(material_1.Typography, { mx: 2, flex: 1, fontSize: 14, fontWeight: process.error ? 600 : 400, children: title }), process.txLink ? ((0, jsx_runtime_1.jsx)(StepProcess_style_1.LinkButton, { size: "small", edge: "end", LinkComponent: material_1.Link, href: process.txLink, target: "_blank", rel: "nofollow noreferrer", children: (0, jsx_runtime_1.jsx)(LinkRounded_1.default, {}) })) : null] }), message ? ((0, jsx_runtime_1.jsx)(material_1.Typography, { ml: 6, fontSize: 14, fontWeight: 500, color: "text.secondary", children: message })) : null] }));
};
exports.StepProcess = StepProcess;
