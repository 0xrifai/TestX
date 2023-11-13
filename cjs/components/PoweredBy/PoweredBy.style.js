"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = void 0;
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
exports.Link = (0, styles_1.styled)(material_1.Link)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    border: 'none',
    ':hover': {
        color: theme.palette.primary.main,
    },
}));
