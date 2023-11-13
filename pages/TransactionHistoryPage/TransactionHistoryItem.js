import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../components/Card';
import { Token, TokenDivider } from '../../components/Token';
import { navigationRoutes } from '../../utils';
export const TransactionHistoryItem = ({ route }) => {
    const { i18n } = useTranslation();
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(navigationRoutes.transactionDetails, {
            state: { routeId: route.id },
        });
    };
    const startedAt = new Date(route.steps[0].execution?.process[0].startedAt ?? 0);
    const fromToken = { ...route.fromToken, amount: route.fromAmount };
    const toToken = {
        ...(route.steps.at(-1)?.execution?.toToken ?? route.toToken),
        amount: route.steps.at(-1)?.execution?.toAmount ?? route.toAmount,
    };
    return (_jsxs(Card, { onClick: handleClick, children: [_jsxs(Box, { sx: {
                    display: 'flex',
                    flex: 1,
                    justifyContent: 'space-between',
                }, pt: 1.75, px: 2, children: [_jsx(Typography, { fontSize: 12, children: new Intl.DateTimeFormat(i18n.language, { dateStyle: 'long' }).format(startedAt) }), _jsx(Typography, { fontSize: 12, children: new Intl.DateTimeFormat(i18n.language, {
                            timeStyle: 'short',
                        }).format(startedAt) })] }), _jsxs(Box, { py: 1, children: [_jsx(Token, { token: fromToken, px: 2, pt: 1, connected: true }), _jsx(TokenDivider, {}), _jsx(Token, { token: toToken, px: 2, pt: 0.5, pb: 1 })] })] }));
};
