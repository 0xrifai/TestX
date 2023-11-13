"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectTokenCardHeader = void 0;
const CardHeader_1 = require("@mui/material/CardHeader");
const styles_1 = require("@mui/material/styles");
const Card_1 = require("../Card");
exports.SelectTokenCardHeader = (0, styles_1.styled)(Card_1.CardHeader, {
    shouldForwardProp: (prop) => !['selected', 'compact'].includes(prop),
})(({ theme, selected, compact }) => ({
    height: 64,
    [`.${CardHeader_1.cardHeaderClasses.title}`]: {
        color: selected
            ? theme.palette.text.primary
            : theme.palette.text.secondary,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        width: compact ? 92 : 256,
        fontWeight: selected ? 500 : 400,
        fontSize: compact && !selected ? '1rem' : '1.125rem',
        [theme.breakpoints.down(392)]: {
            width: compact ? 92 : 224,
        },
    },
    [`.${CardHeader_1.cardHeaderClasses.subheader}`]: {
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        width: compact ? 92 : 256,
        [theme.breakpoints.down(392)]: {
            width: compact ? 92 : 224,
        },
    },
}));
