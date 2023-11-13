"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GasStepProcess = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const EvStation_1 = require("@mui/icons-material/EvStation");
const material_1 = require("@mui/material");
const react_i18next_1 = require("react-i18next");
const CircularProgress_style_1 = require("./CircularProgress.style");
const GasStepProcess = ({ step }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const isDone = step.execution?.status === 'DONE';
    return ((0, jsx_runtime_1.jsx)(material_1.Box, { px: 2, py: 1, children: (0, jsx_runtime_1.jsxs)(material_1.Box, { sx: {
                display: 'flex',
                alignItems: 'center',
            }, children: [(0, jsx_runtime_1.jsx)(CircularProgress_style_1.CircularIcon, { status: isDone ? 'DONE' : 'NOT_STARTED', children: (0, jsx_runtime_1.jsx)(EvStation_1.default, { color: isDone ? 'success' : 'inherit', sx: {
                            position: 'absolute',
                            fontSize: '1rem',
                        } }) }), (0, jsx_runtime_1.jsxs)(material_1.Typography, { ml: 2, flex: 1, fontSize: 14, fontWeight: 400, children: [t('format.currency', {
                            value: (step.execution?.gasAmountUSD ||
                                step.estimate.gasCosts?.reduce((amount, gasCost) => amount + parseFloat(gasCost.amountUSD || '0'), 0)) ??
                                0,
                        }), ' ', isDone ? t('main.gasFeePaid') : t('main.gasFeeEstimated')] })] }) }));
};
exports.GasStepProcess = GasStepProcess;
