"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircularProgressPending = exports.CircularIcon = void 0;
const material_1 = require("@mui/material");
const CircularProgress_1 = require("@mui/material/CircularProgress");
const styles_1 = require("@mui/material/styles");
const getStatusColor = (theme, status, substatus) => {
    switch (status) {
        case 'ACTION_REQUIRED':
            return (0, styles_1.alpha)(theme.palette.info.main, 0.12);
        case 'DONE':
            if (substatus === 'PARTIAL' || substatus === 'REFUNDED') {
                return (0, styles_1.alpha)(theme.palette.warning.main, 0.48);
            }
            return (0, styles_1.alpha)(theme.palette.success.main, 0.12);
        case 'FAILED':
            return (0, styles_1.alpha)(theme.palette.error.main, 0.12);
        default:
            return theme.palette.grey[theme.palette.mode === 'light' ? 300 : 800];
    }
};
exports.CircularIcon = (0, styles_1.styled)(material_1.Box, {
    shouldForwardProp: (prop) => !['status', 'substatus'].includes(prop),
})(({ theme, status, substatus }) => ({
    backgroundColor: ['ACTION_REQUIRED', 'DONE', 'FAILED'].includes(status)
        ? getStatusColor(theme, status, substatus)
        : theme.palette.background.paper,
    borderStyle: 'solid',
    borderColor: getStatusColor(theme, status, substatus),
    borderWidth: !['ACTION_REQUIRED', 'DONE', 'FAILED'].includes(status)
        ? 2
        : 0,
    display: 'grid',
    position: 'relative',
    placeItems: 'center',
    width: 32,
    height: 32,
    borderRadius: '50%',
}));
const circleAnimation = (0, styles_1.keyframes) `
  0% {
    stroke-dashoffset: 129;
    transform: rotate(0);
  }
  50% {
    stroke-dashoffset: 56;
    transform: rotate(45deg);
  };
  100% {
    stroke-dashoffset: 129;
    transform: rotate(360deg);
  }
`;
// This `styled()` function invokes keyframes. `styled-components` only supports keyframes
// in string templates. Do not convert these styles in JS object as it will break.
exports.CircularProgressPending = (0, styles_1.styled)(material_1.CircularProgress) `
  color: ${({ theme }) => theme.palette.mode === 'light'
    ? theme.palette.primary.main
    : theme.palette.primary.light};
  animation-duration: 3s;
  position: absolute;
  left: -2px;
  .${CircularProgress_1.circularProgressClasses.circle} {
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-name: ${circleAnimation};
    stroke-dasharray: 129;
    stroke-dashoffset: 129;
    stroke-linecap: round;
    transform-origin: 100% 100%;
  }
`;
