"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardIconButton = void 0;
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
exports.CardIconButton = (0, styles_1.styled)(material_1.IconButton)(({ theme }) => {
    const backgroundColor = theme.palette.mode === 'light'
        ? theme.palette.common.black
        : theme.palette.common.white;
    return {
        padding: theme.spacing(0.5),
        backgroundColor: (0, styles_1.alpha)(backgroundColor, 0.04),
        '&:hover': {
            backgroundColor: (0, styles_1.alpha)(backgroundColor, 0.08),
        },
    };
});
