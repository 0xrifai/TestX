import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Tooltip, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { version } from '../../config/version';
import { useWidgetConfig } from '../../providers';
import { HiddenUI } from '../../types';
import { navigationRoutes } from '../../utils';
import { Link } from './PoweredBy.style';
export const PoweredBy = () => {
    const { hiddenUI } = useWidgetConfig();
    const { pathname } = useLocation();
    if (pathname.includes(navigationRoutes.fromToken) ||
        pathname.includes(navigationRoutes.toToken)) {
        return null;
    }
    return (_jsx(Box, { px: 3, pt: 1, pb: hiddenUI?.includes(HiddenUI.PoweredBy) ? 1 : 2, sx: {
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
        }, children: !hiddenUI?.includes(HiddenUI.PoweredBy) ? (_jsx(Tooltip, { title: `v${version}`, placement: "top", enterDelay: 1000, arrow: true, children: _jsxs(Link, { href: "https://li.fi", target: "_blank", underline: "none", color: "text.primary", children: [_jsx(Typography, { color: "text.secondary", fontSize: 12, fontWeight: 500, px: 0.5, children: "Powered by" }), _jsx(Typography, { color: "text.primary", fontSize: 12, fontWeight: 500, children: "LI.FI" })] }) })) : null }));
};
