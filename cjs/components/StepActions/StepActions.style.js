"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepAvatar = exports.StepContent = exports.StepLabel = exports.StepConnector = exports.StepIcon = void 0;
const material_1 = require("@mui/material");
const StepConnector_1 = require("@mui/material/StepConnector");
const StepContent_1 = require("@mui/material/StepContent");
const StepLabel_1 = require("@mui/material/StepLabel");
const styles_1 = require("@mui/material/styles");
exports.StepIcon = (0, styles_1.styled)('span', {
    shouldForwardProp: (prop) => !['active', 'completed', 'error'].includes(prop),
})(({ theme }) => ({
    width: 12,
    height: 12,
    borderRadius: '50%',
    border: `2px solid ${theme.palette.mode === 'light'
        ? theme.palette.grey[300]
        : theme.palette.grey[800]}`,
}));
exports.StepConnector = (0, styles_1.styled)(material_1.StepConnector, {
    shouldForwardProp: (prop) => !['active', 'completed', 'error'].includes(prop),
})(({ theme }) => ({
    marginLeft: theme.spacing(1.875),
    [`.${StepConnector_1.stepConnectorClasses.line}`]: {
        minHeight: 8,
        borderLeftWidth: 2,
        borderColor: theme.palette.mode === 'light'
            ? theme.palette.grey[300]
            : theme.palette.grey[800],
    },
}));
exports.StepLabel = (0, styles_1.styled)(material_1.StepLabel, {
    shouldForwardProp: (prop) => !['active', 'completed', 'error', 'disabled'].includes(prop),
})(({ theme }) => ({
    padding: 0,
    [`.${StepLabel_1.stepLabelClasses.iconContainer}`]: {
        paddingLeft: theme.spacing(0.75),
        paddingRight: theme.spacing(2.75),
    },
    [`&.${StepLabel_1.stepLabelClasses.disabled}`]: {
        cursor: 'inherit',
    },
}));
exports.StepContent = (0, styles_1.styled)(material_1.StepContent, {
    shouldForwardProp: (prop) => !['active', 'completed', 'error'].includes(prop),
})(({ theme }) => ({
    borderLeft: `2px solid ${theme.palette.mode === 'light'
        ? theme.palette.grey[300]
        : theme.palette.grey[800]}`,
    marginLeft: theme.spacing(1.875),
    paddingLeft: theme.spacing(3.875),
    [`&.${StepContent_1.stepContentClasses.last}`]: {
        borderLeft: 'none',
        paddingLeft: theme.spacing(4.1875),
    },
}));
exports.StepAvatar = (0, styles_1.styled)(material_1.Avatar)(({ theme, variant }) => ({
    color: theme.palette.text.primary,
    backgroundColor: 'transparent',
}));
