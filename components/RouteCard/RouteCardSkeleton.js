import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Skeleton } from '@mui/material';
import { useWidgetConfig } from '../../providers';
import { Card } from '../Card';
export const RouteCardSkeleton = ({ variant, ...other }) => {
    const { subvariant } = useWidgetConfig();
    const cardContent = (_jsxs(Box, { flex: 1, children: [subvariant !== 'refuel' && subvariant !== 'nft' ? (_jsx(Box, { display: "flex", alignItems: "center", mb: 2, children: _jsx(Skeleton, { variant: "rectangular", width: 112, height: 24, sx: (theme) => ({
                        borderRadius: `${theme.shape.borderRadius}px`,
                    }) }) })) : null, _jsxs(Box, { children: [_jsxs(Box, { display: "flex", alignItems: "center", children: [_jsx(Box, { mr: 2, children: _jsx(Skeleton, { variant: "circular", width: 32, height: 32 }) }), _jsx(Skeleton, { variant: "text", width: 96, height: 32 })] }), _jsxs(Box, { ml: 6, display: "flex", alignItems: "center", children: [_jsx(Skeleton, { variant: "text", width: 102, height: 16 }), _jsx(Skeleton, { variant: "text", width: 72, height: 16, sx: { marginLeft: 1 } })] })] }), _jsxs(Box, { mt: 2, display: "flex", justifyContent: "space-between", children: [_jsx(Skeleton, { variant: "text", width: 64, height: 20 }), _jsx(Skeleton, { variant: "text", width: 64, height: 20 }), _jsx(Skeleton, { variant: "text", width: 48, height: 20 }), _jsx(Skeleton, { variant: "text", width: 32, height: 20 })] })] }));
    return subvariant === 'refuel' || variant === 'cardless' ? (cardContent) : (_jsx(Card, { indented: true, ...other, children: cardContent }));
};
