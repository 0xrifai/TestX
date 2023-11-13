"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainContainer = exports.ChainCard = void 0;
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const Card_1 = require("../../components/Card");
exports.ChainCard = (0, styles_1.styled)(Card_1.Card)({
    display: 'grid',
    placeItems: 'center',
    minWidth: 52,
    height: 56,
});
exports.ChainContainer = (0, styles_1.styled)(material_1.Box)(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(52px, 1fr))',
    gridAutoRows: '56px',
    justifyContent: 'space-between',
    gap: theme.spacing(1.5),
}));
