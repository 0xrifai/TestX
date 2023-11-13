import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Badge, Box, Collapse, Step as MuiStep, Stepper, Typography, } from '@mui/material';
import Big from 'big.js';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useChains } from '../../hooks';
import { LiFiToolLogo } from '../../icons';
import { useWidgetConfig } from '../../providers';
import { formatTokenAmount } from '../../utils';
import { CardIconButton } from '../Card';
import { SmallAvatar } from '../SmallAvatar';
import { StepAvatar, StepConnector, StepContent, StepLabel, } from './StepActions.style';
export const StepActions = ({ step, dense, ...other }) => {
    const { t } = useTranslation();
    const { subvariant } = useWidgetConfig();
    const [cardExpanded, setCardExpanded] = useState(false);
    const handleExpand = (e) => {
        e.stopPropagation();
        setCardExpanded((expanded) => !expanded);
    };
    const hasCollapsedSteps = dense && step.includedSteps?.length > 1;
    // FIXME: step transaction request overrides step tool details, but not included step tool details
    const toolDetails = subvariant === 'nft'
        ? step.includedSteps.find((step) => step.tool === 'custom' && step.toolDetails.key !== 'custom')?.toolDetails || step.toolDetails
        : step.toolDetails;
    return (_jsxs(Box, { ...other, children: [_jsxs(Box, { display: "flex", alignItems: "center", children: [_jsx(Badge, { overlap: "circular", anchorOrigin: { vertical: 'bottom', horizontal: 'right' }, badgeContent: _jsx(SmallAvatar, { children: _jsx(LiFiToolLogo, {}) }), children: _jsx(StepAvatar, { variant: "circular", src: toolDetails.logoURI, alt: toolDetails.name, children: toolDetails.name[0] }) }), _jsx(Typography, { ml: 2, fontSize: 18, fontWeight: "500", flex: 1, children: t(`main.stepDetails`, {
                            tool: toolDetails.name,
                        }) }), hasCollapsedSteps ? (_jsx(CardIconButton, { onClick: handleExpand, size: "small", children: cardExpanded ? _jsx(ExpandLessIcon, {}) : _jsx(ExpandMoreIcon, {}) })) : null] }), hasCollapsedSteps ? (_jsx(Collapse, { timeout: 225, in: cardExpanded, mountOnEnter: true, unmountOnExit: true, children: _jsx(IncludedSteps, { step: step, subvariant: subvariant }) })) : (_jsx(IncludedSteps, { step: step, subvariant: subvariant }))] }));
};
export const IncludedSteps = ({ step, subvariant }) => {
    // eslint-disable-next-line react/no-unstable-nested-components
    const StepIconComponent = ({ icon }) => {
        const tool = step.includedSteps?.[Number(icon) - 1];
        return tool ? (_jsx(SmallAvatar, { src: tool.toolDetails.logoURI, alt: tool.toolDetails.name, sx: {
                boxSizing: 'content-box',
            }, children: tool.toolDetails.name[0] })) : null;
    };
    const StepDetailsLabel = step.tool === 'custom' && subvariant === 'nft'
        ? CustomStepDetailsLabel
        : step.type === 'lifi' &&
            step.includedSteps.some((step) => step.type === 'cross')
            ? CrossStepDetailsLabel
            : SwapStepDetailsLabel;
    return step.includedSteps.length > 1 ? (_jsx(Box, { mt: 1.5, children: _jsx(Stepper, { orientation: "vertical", connector: _jsx(StepConnector, {}), activeStep: -1, children: step.includedSteps.map((step, i) => (_jsxs(MuiStep, { expanded: true, children: [_jsx(StepLabel, { StepIconComponent: StepIconComponent, children: step.type === 'custom' && subvariant === 'nft' ? (_jsx(CustomStepDetailsLabel, { step: step, subvariant: subvariant })) : step.type === 'cross' ? (_jsx(CrossStepDetailsLabel, { step: step })) : step.type === 'protocol' ? (_jsx(ProtocolStepDetailsLabel, { step: step })) : (_jsx(SwapStepDetailsLabel, { step: step })) }), _jsx(StepContent, { children: _jsx(StepDetailsContent, { step: step, subvariant: subvariant }) })] }, step.id))) }) })) : (_jsxs(Box, { ml: 6, children: [_jsx(StepDetailsLabel, { step: step, subvariant: subvariant === 'nft' ? subvariant : undefined }), _jsx(StepDetailsContent, { step: step, subvariant: subvariant })] }));
};
export const StepDetailsContent = ({ step, subvariant }) => {
    const { t } = useTranslation();
    const sameTokenProtocolStep = step.action.fromToken.chainId === step.action.toToken.chainId &&
        step.action.fromToken.address === step.action.toToken.address;
    let fromAmount;
    if (sameTokenProtocolStep) {
        const estimatedFromAmount = Big(step.estimate.fromAmount)
            .div(10 ** step.action.fromToken.decimals)
            .minus(Big(step.estimate.toAmount).div(10 ** step.action.toToken.decimals));
        fromAmount = estimatedFromAmount.gt(0)
            ? estimatedFromAmount.toString()
            : Big(step.estimate.fromAmount)
                .div(10 ** step.action.fromToken.decimals)
                .toString();
    }
    else {
        fromAmount = formatTokenAmount(step.estimate.fromAmount, step.action.fromToken.decimals);
    }
    const showToAmount = step.type !== 'custom' && step.tool !== 'custom' && !sameTokenProtocolStep;
    return (_jsxs(Typography, { fontSize: 12, fontWeight: "500", color: "text.secondary", alignItems: "center", display: "flex", children: [t('format.number', {
                value: fromAmount,
            }), ' ', step.action.fromToken.symbol, showToAmount ? (_jsxs(_Fragment, { children: [_jsx(ArrowForwardIcon, { sx: { fontSize: 18, paddingX: 0.5 } }), t('format.number', {
                        value: formatTokenAmount(step.execution?.toAmount ?? step.estimate.toAmount, step.execution?.toToken?.decimals ?? step.action.toToken.decimals),
                    }), ' ', step.execution?.toToken?.symbol ?? step.action.toToken.symbol] })) : null] }));
};
export const CustomStepDetailsLabel = ({ step, subvariant, }) => {
    const { t } = useTranslation();
    if (!subvariant) {
        return null;
    }
    // FIXME: step transaction request overrides step tool details, but not included step tool details
    const toolDetails = subvariant === 'nft' &&
        step.includedSteps?.length > 0
        ? step.includedSteps.find((step) => step.tool === 'custom' && step.toolDetails.key !== 'custom')?.toolDetails || step.toolDetails
        : step.toolDetails;
    return (_jsx(Typography, { fontSize: 12, fontWeight: "500", color: "text.secondary", children: t(`main.${subvariant}StepDetails`, {
            tool: toolDetails.name,
        }) }));
};
export const CrossStepDetailsLabel = ({ step }) => {
    const { t } = useTranslation();
    const { getChainById } = useChains();
    return (_jsx(Typography, { fontSize: 12, fontWeight: "500", color: "text.secondary", children: t('main.crossStepDetails', {
            from: getChainById(step.action.fromChainId)?.name,
            to: getChainById(step.action.toChainId)?.name,
            tool: step.toolDetails.name,
        }) }));
};
export const SwapStepDetailsLabel = ({ step }) => {
    const { t } = useTranslation();
    const { getChainById } = useChains();
    return (_jsx(Typography, { fontSize: 12, fontWeight: "500", color: "text.secondary", children: t('main.swapStepDetails', {
            chain: getChainById(step.action.fromChainId)?.name,
            tool: step.toolDetails.name,
        }) }));
};
export const ProtocolStepDetailsLabel = ({ step }) => {
    const { t } = useTranslation();
    return (_jsx(Typography, { fontSize: 12, fontWeight: "500", color: "text.secondary", children: step.toolDetails.key === 'lifuelProtocol'
            ? t('main.refuelStepDetails', {
                tool: step.toolDetails.name,
            })
            : step.toolDetails.name }));
};
