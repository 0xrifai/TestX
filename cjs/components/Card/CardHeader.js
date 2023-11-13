"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardHeader = void 0;
const material_1 = require("@mui/material");
const CardHeader_1 = require("@mui/material/CardHeader");
const styles_1 = require("@mui/material/styles");
exports.CardHeader = (0, styles_1.styled)(material_1.CardHeader)(({ theme }) => ({
    [`.${CardHeader_1.cardHeaderClasses.action}`]: {
        marginTop: -2,
        alignSelf: 'center',
    },
    [`.${CardHeader_1.cardHeaderClasses.title}`]: {
        fontWeight: '500',
        fontSize: '1.125rem',
        lineHeight: '1.2778',
        color: theme.palette.text.primary,
    },
    [`.${CardHeader_1.cardHeaderClasses.subheader}`]: {
        fontWeight: '400',
        fontSize: '0.75rem',
        color: theme.palette.text.secondary,
    },
}));
