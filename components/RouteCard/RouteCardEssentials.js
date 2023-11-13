import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AccessTimeIcon from '@mui/icons-material/AccessTimeFilled';
import EvStationIcon from '@mui/icons-material/EvStation';
import LayersIcon from '@mui/icons-material/Layers';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { Box, Tooltip, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { IconTypography } from './RouteCard.style';
import { getFeeCostsBreakdown, getGasCostsBreakdown } from './utils';
export const RouteCardEssentials = ({ route, dense, }) => {
    const { t } = useTranslation();
    const executionTimeMinutes = Math.ceil(route.steps
        .map((step) => step.estimate.executionDuration)
        .reduce((duration, x) => duration + x, 0) / 60);
    const gasCostUSD = parseFloat(route.gasCostUSD ?? '') || 0.01;
    const gasCosts = getGasCostsBreakdown(route);
    const feeCosts = getFeeCostsBreakdown(route, false);
    return (_jsxs(Box, { display: "flex", justifyContent: 'space-between', flex: 1, mt: 2, children: [_jsx(Tooltip, { title: _jsxs(Box, { component: "span", children: [t(`tooltip.estimatedNetworkFee`), gasCosts.map((gas, index) => (_jsxs(Typography, { fontSize: 12, fontWeight: "500", children: [gas.amount?.toFixed(9), " ", gas.token.symbol, " (", t(`format.currency`, { value: gas.amountUSD }), ")"] }, `${gas.token.address}${index}`)))] }), placement: "top", enterDelay: 400, arrow: true, children: _jsxs(Box, { display: "flex", alignItems: "center", mr: dense ? 0 : 2, children: [_jsx(IconTypography, { children: _jsx(EvStationIcon, { fontSize: "small" }) }), _jsx(Typography, { fontSize: 14, color: "text.primary", fontWeight: "500", lineHeight: 1, children: t(`format.currency`, { value: gasCostUSD }) })] }) }), _jsx(Tooltip, { title: _jsxs(Box, { component: "span", children: [t(`tooltip.additionalProviderFee`), feeCosts.map((fee, index) => (_jsxs(Typography, { fontSize: 12, fontWeight: "500", children: [fee.amount?.toFixed(9), " ", fee.token.symbol, " (", t(`format.currency`, { value: fee.amountUSD }), ")"] }, `${fee.token.address}${index}`)))] }), placement: "top", enterDelay: 400, arrow: true, children: _jsxs(Box, { display: "flex", alignItems: "center", mr: dense ? 0 : 2, children: [_jsx(IconTypography, { children: _jsx(MonetizationOnIcon, { fontSize: "small" }) }), _jsx(Typography, { fontSize: 14, color: "text.primary", fontWeight: "500", lineHeight: 1, children: t(`format.currency`, {
                                value: feeCosts.reduce((sum, feeCost) => sum + feeCost.amountUSD, 0),
                            }) })] }) }), _jsx(Tooltip, { title: t(`tooltip.estimatedTime`), placement: "top", enterDelay: 400, arrow: true, children: _jsxs(Box, { display: "flex", alignItems: "center", mr: dense ? 0 : 2, children: [_jsx(IconTypography, { children: _jsx(AccessTimeIcon, { fontSize: "small" }) }), _jsx(Typography, { fontSize: 14, color: "text.primary", fontWeight: "500", lineHeight: 1, children: t('main.estimatedTime', {
                                value: executionTimeMinutes,
                            }) })] }) }), _jsx(Tooltip, { title: t(`tooltip.numberOfSteps`), placement: "top", enterDelay: 400, arrow: true, children: _jsxs(Box, { display: "flex", alignItems: "center", children: [_jsx(IconTypography, { children: _jsx(LayersIcon, { fontSize: "small" }) }), _jsx(Typography, { fontSize: 14, color: "text.primary", fontWeight: "500", lineHeight: 1, children: route.steps.length })] }) })] }));
};
