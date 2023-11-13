"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconCircle = exports.CenterContainer = void 0;
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const stores_1 = require("../../stores");
const getStatusColor = (status, theme) => {
    switch (status) {
        case stores_1.RouteExecutionStatus.Done:
            return { color: theme.palette.success.main, alpha: 0.12, darken: 0 };
        case stores_1.RouteExecutionStatus.Failed:
            return { color: theme.palette.error.main, alpha: 0.12, darken: 0 };
        case stores_1.RouteExecutionStatus.Done | stores_1.RouteExecutionStatus.Partial:
        case stores_1.RouteExecutionStatus.Done | stores_1.RouteExecutionStatus.Refunded:
        case 'warning':
            return {
                color: theme.palette.warning.main,
                alpha: 0.48,
                darken: theme.palette.mode === 'light' ? 0.32 : 0,
            };
        default:
            return { color: theme.palette.primary.main, alpha: 0.12, darken: 0 };
    }
};
exports.CenterContainer = (0, styles_1.styled)(material_1.Box)(({ theme }) => ({
    display: 'grid',
    placeItems: 'center',
    position: 'relative',
}));
exports.IconCircle = (0, styles_1.styled)(material_1.Box, {
    shouldForwardProp: (prop) => prop !== 'status',
})(({ theme, status }) => {
    const { color, alpha: alphaValue, darken: darkenValue, } = getStatusColor(status, theme);
    return {
        backgroundColor: (0, styles_1.alpha)(color, alphaValue),
        borderRadius: '50%',
        width: 64,
        height: 64,
        display: 'grid',
        position: 'relative',
        placeItems: 'center',
        '& > svg': {
            color: (0, styles_1.darken)(color, darkenValue),
            width: 32,
            height: 32,
        },
    };
});
