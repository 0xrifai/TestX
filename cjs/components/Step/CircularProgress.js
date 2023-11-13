"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircularProgress = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Done_1 = require("@mui/icons-material/Done");
const ErrorRounded_1 = require("@mui/icons-material/ErrorRounded");
const InfoRounded_1 = require("@mui/icons-material/InfoRounded");
const WarningRounded_1 = require("@mui/icons-material/WarningRounded");
const styles_1 = require("@mui/material/styles");
const CircularProgress_style_1 = require("./CircularProgress.style");
function CircularProgress({ process }) {
    return ((0, jsx_runtime_1.jsxs)(CircularProgress_style_1.CircularIcon, { status: process.status, substatus: process.substatus, children: [process.status === 'STARTED' || process.status === 'PENDING' ? ((0, jsx_runtime_1.jsx)(CircularProgress_style_1.CircularProgressPending, { size: 32, thickness: 3 })) : null, process.status === 'ACTION_REQUIRED' ? ((0, jsx_runtime_1.jsx)(InfoRounded_1.default, { color: "info", sx: {
                    position: 'absolute',
                    fontSize: '1rem',
                } })) : null, process.status === 'DONE' &&
                (process.substatus === 'PARTIAL' || process.substatus === 'REFUNDED') ? ((0, jsx_runtime_1.jsx)(WarningRounded_1.default, { sx: (theme) => ({
                    position: 'absolute',
                    fontSize: '1rem',
                    color: (0, styles_1.darken)(theme.palette.warning.main, 0.32),
                }) })) : process.status === 'DONE' ? ((0, jsx_runtime_1.jsx)(Done_1.default, { color: "success", sx: {
                    position: 'absolute',
                    fontSize: '1rem',
                } })) : null, process.status === 'FAILED' ? ((0, jsx_runtime_1.jsx)(ErrorRounded_1.default, { color: "error", sx: {
                    position: 'absolute',
                    fontSize: '1rem',
                } })) : null] }));
}
exports.CircularProgress = CircularProgress;
