import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import EvStationIcon from '@mui/icons-material/EvStation';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { CircularIcon } from './CircularProgress.style';
export const GasStepProcess = ({ step }) => {
    const { t } = useTranslation();
    const isDone = step.execution?.status === 'DONE';
    return (_jsx(Box, { px: 2, py: 1, children: _jsxs(Box, { sx: {
                display: 'flex',
                alignItems: 'center',
            }, children: [_jsx(CircularIcon, { status: isDone ? 'DONE' : 'NOT_STARTED', children: _jsx(EvStationIcon, { color: isDone ? 'success' : 'inherit', sx: {
                            position: 'absolute',
                            fontSize: '1rem',
                        } }) }), _jsxs(Typography, { ml: 2, flex: 1, fontSize: 14, fontWeight: 400, children: [t('format.currency', {
                            value: (step.execution?.gasAmountUSD ||
                                step.estimate.gasCosts?.reduce((amount, gasCost) => amount + parseFloat(gasCost.amountUSD || '0'), 0)) ??
                                0,
                        }), ' ', isDone ? t('main.gasFeePaid') : t('main.gasFeeEstimated')] })] }) }));
};
