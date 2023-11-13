"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardTitle = void 0;
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
exports.CardTitle = (0, styles_1.styled)(material_1.Typography, {
    shouldForwardProp: (prop) => !['required'].includes(prop),
})(({ theme, required }) => ({
    fontSize: '0.875rem',
    lineHeight: '1.286',
    letterSpacing: '0.01071em',
    fontWeight: 700,
    // paddingLeft: 16,
    padding: theme.spacing(1.75, 2, 0, 2),
    '&:after': {
        content: required ? '" *"' : 'none',
        color: theme.palette.error.main,
    },
}));
