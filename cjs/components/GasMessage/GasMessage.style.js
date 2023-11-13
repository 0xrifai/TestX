"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfoMessageSwitch = exports.InfoMessageCardTitle = exports.InfoMessageCard = exports.WarningMessageCardTitle = exports.WarningMessageCard = void 0;
const material_1 = require("@mui/material");
const Switch_1 = require("@mui/material/Switch");
const styles_1 = require("@mui/material/styles");
const Switch_2 = require("../Switch");
const MessageCard = (0, styles_1.styled)(material_1.Box)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    position: 'relative',
    whiteSpace: 'pre-line',
}));
exports.WarningMessageCard = (0, styles_1.styled)(MessageCard)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light'
        ? (0, styles_1.alpha)(theme.palette.warning.main, 0.32)
        : (0, styles_1.alpha)(theme.palette.warning.main, 0.16),
}));
exports.WarningMessageCardTitle = (0, styles_1.styled)(material_1.Box)(({ theme }) => ({
    color: theme.palette.mode === 'light'
        ? (0, styles_1.darken)(theme.palette.warning.main, 0.36)
        : (0, styles_1.alpha)(theme.palette.warning.main, 1),
}));
exports.InfoMessageCard = (0, styles_1.styled)(MessageCard)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light'
        ? (0, styles_1.alpha)(theme.palette.info.main, 0.12)
        : (0, styles_1.alpha)(theme.palette.info.main, 0.16),
}));
exports.InfoMessageCardTitle = (0, styles_1.styled)(material_1.Box)(({ theme }) => ({
    color: theme.palette.mode === 'light'
        ? theme.palette.info.main
        : (0, styles_1.lighten)(theme.palette.info.main, 0.24),
}));
exports.InfoMessageSwitch = (0, styles_1.styled)(Switch_2.Switch)(({ theme }) => ({
    [`.${Switch_1.switchClasses.switchBase}`]: {
        [`&.${Switch_1.switchClasses.checked}`]: {
            [`& + .${Switch_1.switchClasses.track}`]: {
                backgroundColor: theme.palette.mode === 'light'
                    ? theme.palette.info.main
                    : (0, styles_1.alpha)(theme.palette.info.main, 0.84),
            },
        },
        [`&.Mui-focusVisible .${Switch_1.switchClasses.thumb}`]: {
            color: theme.palette.mode === 'light'
                ? theme.palette.info.main
                : (0, styles_1.alpha)(theme.palette.info.main, 0.84),
        },
    },
}));
