"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormContainer = void 0;
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
exports.FormContainer = (0, styles_1.styled)(material_1.Container)({
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    position: 'relative',
});
