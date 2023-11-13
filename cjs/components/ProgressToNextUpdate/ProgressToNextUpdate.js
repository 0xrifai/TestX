"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressToNextUpdate = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const getProgressValue = (updatedAt, timeToUpdate) => updatedAt
    ? Math.min(100, ((Date.now() - updatedAt) / timeToUpdate) * 100)
    : 0;
const getSecondsToUpdate = (updatedAt, timeToUpdate) => Math.max(Math.round((timeToUpdate - (Date.now() - updatedAt)) / 1000), 0);
const ProgressToNextUpdate = ({ updatedAt, timeToUpdate, isLoading, onClick, ...other }) => {
    const [value, setValue] = (0, react_1.useState)(() => getProgressValue(updatedAt, timeToUpdate));
    (0, react_1.useEffect)(() => {
        setValue(getProgressValue(updatedAt, timeToUpdate));
        const id = setInterval(() => {
            const time = getProgressValue(updatedAt, timeToUpdate);
            setValue(time);
            if (time >= 100) {
                clearInterval(id);
            }
        }, 1000);
        return () => clearInterval(id);
    }, [timeToUpdate, updatedAt]);
    (0, react_1.useEffect)(() => {
        if (isLoading) {
            setValue(0);
        }
    }, [isLoading]);
    return ((0, jsx_runtime_1.jsx)(material_1.IconButton, { onClick: onClick, disabled: isLoading, ...other, children: (0, jsx_runtime_1.jsx)(material_1.Tooltip, { title: (0, jsx_runtime_1.jsx)(react_i18next_1.Trans, { i18nKey: "tooltip.progressToNextUpdate", values: {
                    value: getSecondsToUpdate(updatedAt, timeToUpdate),
                }, components: [(0, jsx_runtime_1.jsx)("br", {})] }), placement: "top", enterDelay: 400, arrow: true, children: (0, jsx_runtime_1.jsxs)(material_1.Box, { sx: {
                    display: 'grid',
                    position: 'relative',
                    placeItems: 'center',
                    width: 24,
                    height: 24,
                }, children: [(0, jsx_runtime_1.jsx)(material_1.CircularProgress, { variant: "determinate", size: 24, value: 100, sx: (theme) => ({
                            position: 'absolute',
                            color: theme.palette.mode === 'light'
                                ? theme.palette.grey[300]
                                : theme.palette.grey[800],
                        }) }), (0, jsx_runtime_1.jsx)(material_1.CircularProgress, { variant: isLoading ? 'indeterminate' : 'determinate', size: 24, value: value, sx: (theme) => ({
                            opacity: value === 100 && !isLoading ? 0.5 : 1,
                            color: theme.palette.mode === 'light'
                                ? theme.palette.primary.main
                                : theme.palette.primary.light,
                        }) })] }) }) }));
};
exports.ProgressToNextUpdate = ProgressToNextUpdate;
