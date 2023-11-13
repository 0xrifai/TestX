import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { Box, Collapse, Link, Typography } from '@mui/material';
import { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { InsuraceLogo } from '../../icons';
import { RouteExecutionStatus } from '../../stores';
import { Card, CardIconButton, CardLabel, CardLabelTypography } from '../Card';
import { Switch } from '../Switch';
export const InsuranceCard = ({ status, feeAmountUsd, insuredAmount, insuredTokenSymbol, insuranceCoverageId, onChange, ...props }) => {
    const { t } = useTranslation();
    const [enabled, setEnabled] = useState(false);
    const [cardExpanded, setCardExpanded] = useState(status === RouteExecutionStatus.Idle);
    const handleExpand = (e) => {
        e.stopPropagation();
        setCardExpanded((expanded) => !expanded);
    };
    const handleSwitch = (_, checked) => {
        setEnabled(checked);
        onChange?.(checked);
    };
    return (_jsxs(Card, { selectionColor: "secondary", indented: true, ...props, children: [_jsxs(Box, { display: "flex", alignItems: "center", justifyContent: "space-between", children: [_jsxs(CardLabel, { type: 'insurance', children: [_jsx(VerifiedUserIcon, { fontSize: "inherit" }), _jsx(CardLabelTypography, { type: "icon", children: status === RouteExecutionStatus.Idle
                                    ? t('main.tags.insurance')
                                    : t('main.tags.insured') })] }), status === RouteExecutionStatus.Idle ? (_jsx(Switch, { onChange: handleSwitch, value: enabled })) : (_jsx(Box, { my: -0.5, children: _jsx(CardIconButton, { onClick: handleExpand, size: "small", children: cardExpanded ? _jsx(ExpandLessIcon, {}) : _jsx(ExpandMoreIcon, {}) }) }))] }), _jsx(Collapse, { timeout: 225, in: cardExpanded, mountOnEnter: true, unmountOnExit: true, children: _jsxs(Box, { mt: 2, children: [_jsxs(Box, { display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2, children: [_jsx(Typography, { fontSize: 24, fontWeight: 700, lineHeight: 1, children: t('format.currency', {
                                        value: feeAmountUsd,
                                    }) }), _jsx(InsuraceLogo, {})] }), _jsxs(Box, { children: [_jsx(Typography, { fontSize: 14, children: _jsx(Trans, { i18nKey: status === RouteExecutionStatus.Idle
                                            ? 'insurance.insure'
                                            : 'insurance.insured', values: {
                                            amount: insuredAmount,
                                            tokenSymbol: insuredTokenSymbol,
                                        }, components: [_jsx("strong", {})] }) }), _jsx(Collapse, { timeout: 225, in: enabled || status !== RouteExecutionStatus.Idle, mountOnEnter: true, unmountOnExit: true, children: _jsxs(Box, { sx: {
                                            listStyleType: 'disc',
                                            pl: 2,
                                        }, children: [_jsx(Typography, { fontSize: 14, display: "list-item", children: t('insurance.bridgeExploits') }), _jsx(Typography, { fontSize: 14, display: "list-item", children: t('insurance.slippageError') })] }) }), _jsx(Link, { href: status === RouteExecutionStatus.Idle
                                        ? 'https://docs.insurace.io/landing-page/documentation/cover-products/bridge-cover/li.fi'
                                        : `https://app.insurace.io/bridge-cover?search=${insuranceCoverageId}`, target: "_blank", underline: "none", color: "text.primary", children: _jsx(Typography, { pt: 0.5, color: "primary", fontSize: 14, fontWeight: 600, children: status === RouteExecutionStatus.Idle
                                            ? t('button.learnMore')
                                            : t('button.viewCoverage') }) })] })] }) })] }));
};
