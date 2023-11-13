import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { Box, Collapse, Tooltip, Typography } from '@mui/material';
import { Fragment, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useWidgetConfig } from '../../providers';
import { formatTokenAmount } from '../../utils';
import { Card, CardIconButton, CardLabel, CardLabelTypography } from '../Card';
import { StepActions } from '../StepActions';
import { Token } from '../Token';
import { RouteCardEssentials } from './RouteCardEssentials';
export const RouteCard = ({ route, active, variant = 'default', expanded, ...other }) => {
    const { t } = useTranslation();
    const { subvariant } = useWidgetConfig();
    const [cardExpanded, setCardExpanded] = useState(expanded);
    const insurable = route.insurance?.state === 'INSURABLE';
    const handleExpand = (e) => {
        e.stopPropagation();
        setCardExpanded((expanded) => !expanded);
    };
    const token = subvariant === 'nft'
        ? { ...route.fromToken, amount: route.fromAmount }
        : { ...route.toToken, amount: route.toAmount };
    const RecommendedTagTooltip = route.tags?.[0] === 'RECOMMENDED' ? RecommendedTooltip : Fragment;
    const cardContent = (_jsxs(Box, { flex: 1, children: [subvariant !== 'refuel' && (insurable || route.tags?.length) ? (_jsxs(Box, { display: "flex", alignItems: "center", mb: 2, children: [insurable ? (_jsx(InsuranceTooltip, { insuredAmount: formatTokenAmount(route.toAmountMin, route.toToken.decimals), insuredTokenSymbol: route.toToken.symbol, children: _jsxs(CardLabel, { type: route.tags?.length && !cardExpanded
                                ? 'insurance-icon'
                                : 'insurance', children: [_jsx(VerifiedUserIcon, { fontSize: "inherit" }), cardExpanded || !route.tags?.length ? (_jsx(CardLabelTypography, { type: "icon", children: t(`main.tags.insurable`) })) : null] }) })) : null, route.tags?.length ? (_jsx(RecommendedTagTooltip, { children: _jsx(CardLabel, { type: active ? 'active' : undefined, children: _jsx(CardLabelTypography, { children: t(`main.tags.${route.tags[0].toLowerCase()}`) }) }) })) : null] })) : null, _jsxs(Box, { display: "flex", justifyContent: "space-between", alignItems: "start", children: [_jsx(Token, { token: token, step: !cardExpanded ? route.steps[0] : undefined }), !expanded ? (_jsx(CardIconButton, { onClick: handleExpand, size: "small", children: cardExpanded ? _jsx(ExpandLessIcon, {}) : _jsx(ExpandMoreIcon, {}) })) : null] }), _jsx(Collapse, { timeout: 225, in: cardExpanded, mountOnEnter: true, unmountOnExit: true, children: route.steps.map((step) => (_jsx(StepActions, { step: step, mt: 2 }, step.id))) }), _jsx(RouteCardEssentials, { route: route })] }));
    return subvariant === 'refuel' || variant === 'cardless' ? (cardContent) : (_jsx(Card, { variant: active ? 'selected' : 'default', selectionColor: "secondary", indented: true, ...other, children: cardContent }));
};
const InsuranceTooltip = ({ insuredAmount, insuredTokenSymbol, children }) => {
    const { t } = useTranslation();
    return (_jsx(Tooltip, { title: _jsxs(Box, { component: "span", children: [_jsx(Typography, { fontSize: 12, fontWeight: "500", children: _jsx(Trans, { i18nKey: "insurance.insure", values: {
                            amount: insuredAmount,
                            tokenSymbol: insuredTokenSymbol,
                        }, components: [_jsx("strong", {})] }) }), _jsxs(Box, { sx: {
                        listStyleType: 'disc',
                        pl: 2,
                    }, children: [_jsx(Typography, { fontSize: 12, fontWeight: "500", display: "list-item", children: t('insurance.bridgeExploits') }), _jsx(Typography, { fontSize: 12, fontWeight: "500", display: "list-item", children: t('insurance.slippageError') })] })] }), placement: "top", enterDelay: 400, arrow: true, children: children }));
};
const RecommendedTooltip = ({ children, }) => {
    const { t } = useTranslation();
    return (_jsx(Tooltip, { title: t('tooltip.recommended'), placement: "top", enterDelay: 400, arrow: true, children: children }));
};
