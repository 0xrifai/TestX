"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtocolStepDetailsLabel = exports.SwapStepDetailsLabel = exports.CrossStepDetailsLabel = exports.CustomStepDetailsLabel = exports.StepDetailsContent = exports.IncludedSteps = exports.StepActions = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ArrowForward_1 = require("@mui/icons-material/ArrowForward");
const ExpandLess_1 = require("@mui/icons-material/ExpandLess");
const ExpandMore_1 = require("@mui/icons-material/ExpandMore");
const material_1 = require("@mui/material");
const big_js_1 = require("big.js");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const hooks_1 = require("../../hooks");
const icons_1 = require("../../icons");
const providers_1 = require("../../providers");
const utils_1 = require("../../utils");
const Card_1 = require("../Card");
const SmallAvatar_1 = require("../SmallAvatar");
const StepActions_style_1 = require("./StepActions.style");
const StepActions = ({ step, dense, ...other }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const { subvariant } = (0, providers_1.useWidgetConfig)();
    const [cardExpanded, setCardExpanded] = (0, react_1.useState)(false);
    const handleExpand = (e) => {
        e.stopPropagation();
        setCardExpanded((expanded) => !expanded);
    };
    const hasCollapsedSteps = dense && step.includedSteps?.length > 1;
    // FIXME: step transaction request overrides step tool details, but not included step tool details
    const toolDetails = subvariant === 'nft'
        ? step.includedSteps.find((step) => step.tool === 'custom' && step.toolDetails.key !== 'custom')?.toolDetails || step.toolDetails
        : step.toolDetails;
    return ((0, jsx_runtime_1.jsxs)(material_1.Box, { ...other, children: [(0, jsx_runtime_1.jsxs)(material_1.Box, { display: "flex", alignItems: "center", children: [(0, jsx_runtime_1.jsx)(material_1.Badge, { overlap: "circular", anchorOrigin: { vertical: 'bottom', horizontal: 'right' }, badgeContent: (0, jsx_runtime_1.jsx)(SmallAvatar_1.SmallAvatar, { children: (0, jsx_runtime_1.jsx)(icons_1.LiFiToolLogo, {}) }), children: (0, jsx_runtime_1.jsx)(StepActions_style_1.StepAvatar, { variant: "circular", src: toolDetails.logoURI, alt: toolDetails.name, children: toolDetails.name[0] }) }), (0, jsx_runtime_1.jsx)(material_1.Typography, { ml: 2, fontSize: 18, fontWeight: "500", flex: 1, children: t(`main.stepDetails`, {
                            tool: toolDetails.name,
                        }) }), hasCollapsedSteps ? ((0, jsx_runtime_1.jsx)(Card_1.CardIconButton, { onClick: handleExpand, size: "small", children: cardExpanded ? (0, jsx_runtime_1.jsx)(ExpandLess_1.default, {}) : (0, jsx_runtime_1.jsx)(ExpandMore_1.default, {}) })) : null] }), hasCollapsedSteps ? ((0, jsx_runtime_1.jsx)(material_1.Collapse, { timeout: 225, in: cardExpanded, mountOnEnter: true, unmountOnExit: true, children: (0, jsx_runtime_1.jsx)(exports.IncludedSteps, { step: step, subvariant: subvariant }) })) : ((0, jsx_runtime_1.jsx)(exports.IncludedSteps, { step: step, subvariant: subvariant }))] }));
};
exports.StepActions = StepActions;
const IncludedSteps = ({ step, subvariant }) => {
    // eslint-disable-next-line react/no-unstable-nested-components
    const StepIconComponent = ({ icon }) => {
        const tool = step.includedSteps?.[Number(icon) - 1];
        return tool ? ((0, jsx_runtime_1.jsx)(SmallAvatar_1.SmallAvatar, { src: tool.toolDetails.logoURI, alt: tool.toolDetails.name, sx: {
                boxSizing: 'content-box',
            }, children: tool.toolDetails.name[0] })) : null;
    };
    const StepDetailsLabel = step.tool === 'custom' && subvariant === 'nft'
        ? exports.CustomStepDetailsLabel
        : step.type === 'lifi' &&
            step.includedSteps.some((step) => step.type === 'cross')
            ? exports.CrossStepDetailsLabel
            : exports.SwapStepDetailsLabel;
    return step.includedSteps.length > 1 ? ((0, jsx_runtime_1.jsx)(material_1.Box, { mt: 1.5, children: (0, jsx_runtime_1.jsx)(material_1.Stepper, { orientation: "vertical", connector: (0, jsx_runtime_1.jsx)(StepActions_style_1.StepConnector, {}), activeStep: -1, children: step.includedSteps.map((step, i) => ((0, jsx_runtime_1.jsxs)(material_1.Step, { expanded: true, children: [(0, jsx_runtime_1.jsx)(StepActions_style_1.StepLabel, { StepIconComponent: StepIconComponent, children: step.type === 'custom' && subvariant === 'nft' ? ((0, jsx_runtime_1.jsx)(exports.CustomStepDetailsLabel, { step: step, subvariant: subvariant })) : step.type === 'cross' ? ((0, jsx_runtime_1.jsx)(exports.CrossStepDetailsLabel, { step: step })) : step.type === 'protocol' ? ((0, jsx_runtime_1.jsx)(exports.ProtocolStepDetailsLabel, { step: step })) : ((0, jsx_runtime_1.jsx)(exports.SwapStepDetailsLabel, { step: step })) }), (0, jsx_runtime_1.jsx)(StepActions_style_1.StepContent, { children: (0, jsx_runtime_1.jsx)(exports.StepDetailsContent, { step: step, subvariant: subvariant }) })] }, step.id))) }) })) : ((0, jsx_runtime_1.jsxs)(material_1.Box, { ml: 6, children: [(0, jsx_runtime_1.jsx)(StepDetailsLabel, { step: step, subvariant: subvariant === 'nft' ? subvariant : undefined }), (0, jsx_runtime_1.jsx)(exports.StepDetailsContent, { step: step, subvariant: subvariant })] }));
};
exports.IncludedSteps = IncludedSteps;
const StepDetailsContent = ({ step, subvariant }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const sameTokenProtocolStep = step.action.fromToken.chainId === step.action.toToken.chainId &&
        step.action.fromToken.address === step.action.toToken.address;
    let fromAmount;
    if (sameTokenProtocolStep) {
        const estimatedFromAmount = (0, big_js_1.default)(step.estimate.fromAmount)
            .div(10 ** step.action.fromToken.decimals)
            .minus((0, big_js_1.default)(step.estimate.toAmount).div(10 ** step.action.toToken.decimals));
        fromAmount = estimatedFromAmount.gt(0)
            ? estimatedFromAmount.toString()
            : (0, big_js_1.default)(step.estimate.fromAmount)
                .div(10 ** step.action.fromToken.decimals)
                .toString();
    }
    else {
        fromAmount = (0, utils_1.formatTokenAmount)(step.estimate.fromAmount, step.action.fromToken.decimals);
    }
    const showToAmount = step.type !== 'custom' && step.tool !== 'custom' && !sameTokenProtocolStep;
    return ((0, jsx_runtime_1.jsxs)(material_1.Typography, { fontSize: 12, fontWeight: "500", color: "text.secondary", alignItems: "center", display: "flex", children: [t('format.number', {
                value: fromAmount,
            }), ' ', step.action.fromToken.symbol, showToAmount ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(ArrowForward_1.default, { sx: { fontSize: 18, paddingX: 0.5 } }), t('format.number', {
                        value: (0, utils_1.formatTokenAmount)(step.execution?.toAmount ?? step.estimate.toAmount, step.execution?.toToken?.decimals ?? step.action.toToken.decimals),
                    }), ' ', step.execution?.toToken?.symbol ?? step.action.toToken.symbol] })) : null] }));
};
exports.StepDetailsContent = StepDetailsContent;
const CustomStepDetailsLabel = ({ step, subvariant, }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    if (!subvariant) {
        return null;
    }
    // FIXME: step transaction request overrides step tool details, but not included step tool details
    const toolDetails = subvariant === 'nft' &&
        step.includedSteps?.length > 0
        ? step.includedSteps.find((step) => step.tool === 'custom' && step.toolDetails.key !== 'custom')?.toolDetails || step.toolDetails
        : step.toolDetails;
    return ((0, jsx_runtime_1.jsx)(material_1.Typography, { fontSize: 12, fontWeight: "500", color: "text.secondary", children: t(`main.${subvariant}StepDetails`, {
            tool: toolDetails.name,
        }) }));
};
exports.CustomStepDetailsLabel = CustomStepDetailsLabel;
const CrossStepDetailsLabel = ({ step }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const { getChainById } = (0, hooks_1.useChains)();
    return ((0, jsx_runtime_1.jsx)(material_1.Typography, { fontSize: 12, fontWeight: "500", color: "text.secondary", children: t('main.crossStepDetails', {
            from: getChainById(step.action.fromChainId)?.name,
            to: getChainById(step.action.toChainId)?.name,
            tool: step.toolDetails.name,
        }) }));
};
exports.CrossStepDetailsLabel = CrossStepDetailsLabel;
const SwapStepDetailsLabel = ({ step }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const { getChainById } = (0, hooks_1.useChains)();
    return ((0, jsx_runtime_1.jsx)(material_1.Typography, { fontSize: 12, fontWeight: "500", color: "text.secondary", children: t('main.swapStepDetails', {
            chain: getChainById(step.action.fromChainId)?.name,
            tool: step.toolDetails.name,
        }) }));
};
exports.SwapStepDetailsLabel = SwapStepDetailsLabel;
const ProtocolStepDetailsLabel = ({ step }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    return ((0, jsx_runtime_1.jsx)(material_1.Typography, { fontSize: 12, fontWeight: "500", color: "text.secondary", children: step.toolDetails.key === 'lifuelProtocol'
            ? t('main.refuelStepDetails', {
                tool: step.toolDetails.name,
            })
            : step.toolDetails.name }));
};
exports.ProtocolStepDetailsLabel = ProtocolStepDetailsLabel;
