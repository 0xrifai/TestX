"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Switch = void 0;
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const Switch_1 = require("@mui/material/Switch");
exports.Switch = (0, styles_1.styled)(material_1.Switch)(({ theme }) => ({
    width: 42,
    height: 24,
    padding: 0,
    [`.${Switch_1.switchClasses.switchBase}`]: {
        padding: 0,
        margin: theme.spacing(0.25),
        transitionDuration: theme.transitions.duration.standard,
        [`&.${Switch_1.switchClasses.checked}`]: {
            transform: 'translateX(18px)',
            color: theme.palette.common.white,
            [`& + .${Switch_1.switchClasses.track}`]: {
                backgroundColor: theme.palette.primary.main,
                opacity: 1,
                border: 0,
            },
            [`&.${Switch_1.switchClasses.disabled} + .${Switch_1.switchClasses.track}`]: {
                opacity: 0.5,
            },
        },
        [`&.Mui-focusVisible .${Switch_1.switchClasses.thumb}`]: {
            color: theme.palette.primary.main,
            border: '6px solid',
            borderColor: theme.palette.common.white,
        },
        [`&.${Switch_1.switchClasses.disabled} .${Switch_1.switchClasses.thumb}`]: {
            color: theme.palette.mode === 'light'
                ? (0, styles_1.alpha)(theme.palette.common.black, 0.12)
                : (0, styles_1.alpha)(theme.palette.common.white, 0.12),
        },
        [`&.${Switch_1.switchClasses.disabled} + .${Switch_1.switchClasses.track}`]: {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
        },
    },
    [`.${Switch_1.switchClasses.thumb}`]: {
        boxSizing: 'border-box',
        width: 20,
        height: 20,
    },
    [`.${Switch_1.switchClasses.track}`]: {
        borderRadius: 24 / 2,
        backgroundColor: theme.palette.mode === 'light'
            ? (0, styles_1.alpha)(theme.palette.common.black, 0.16)
            : (0, styles_1.alpha)(theme.palette.common.white, 0.16),
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: theme.transitions.duration.standard,
        }),
    },
}));
