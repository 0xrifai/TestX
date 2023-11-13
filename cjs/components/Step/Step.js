"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Step = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const react_i18next_1 = require("react-i18next");
const Card_1 = require("../../components/Card");
const StepActions_1 = require("../../components/StepActions");
const Token_1 = require("../../components/Token");
const hooks_1 = require("../../hooks");
const providers_1 = require("../../providers");
const utils_1 = require("../../utils");
const DestinationWalletAddress_1 = require("./DestinationWalletAddress");
const GasStepProcess_1 = require("./GasStepProcess");
const StepProcess_1 = require("./StepProcess");
const StepTimer_1 = require("./StepTimer");
const Step = ({ step, fromToken, toToken, toAddress }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const { getChainById } = (0, hooks_1.useChains)();
    const { subvariant } = (0, providers_1.useWidgetConfig)();
    const stepHasError = step.execution?.process.some((process) => process.status === 'FAILED');
    const getCardTitle = () => {
        switch (step.type) {
            case 'lifi':
                const hasCrossStep = step.includedSteps.some((step) => step.type === 'cross');
                const hasSwapStep = step.includedSteps.some((step) => step.type === 'swap');
                if (hasCrossStep && hasSwapStep) {
                    return subvariant === 'nft'
                        ? t('main.stepBridgeAndBuy')
                        : t('main.stepSwapAndBridge');
                }
                if (hasCrossStep) {
                    return subvariant === 'nft'
                        ? t('main.stepBridgeAndBuy')
                        : t('main.stepBridge');
                }
                return subvariant === 'nft'
                    ? t('main.stepSwapAndBuy')
                    : t('main.stepSwap');
            default:
                return subvariant === 'nft'
                    ? t('main.stepSwapAndBuy')
                    : t('main.stepSwap');
        }
    };
    const formattedToAddress = (0, utils_1.shortenAddress)(toAddress);
    const toAddressLink = toAddress
        ? `${getChainById(step.action.toChainId)?.metamask
            .blockExplorerUrls[0]}address/${toAddress}`
        : undefined;
    return ((0, jsx_runtime_1.jsxs)(Card_1.Card, { variant: stepHasError ? 'error' : 'default', children: [(0, jsx_runtime_1.jsxs)(material_1.Box, { sx: {
                    display: 'flex',
                    flex: 1,
                }, children: [(0, jsx_runtime_1.jsx)(Card_1.CardTitle, { flex: 1, children: getCardTitle() }), (0, jsx_runtime_1.jsx)(Card_1.CardTitle, { sx: { fontWeight: 500 }, children: (0, jsx_runtime_1.jsx)(StepTimer_1.StepTimer, { step: step }) })] }), (0, jsx_runtime_1.jsxs)(material_1.Box, { py: 1, children: [fromToken ? (0, jsx_runtime_1.jsx)(Token_1.Token, { token: fromToken, px: 2, py: 1 }) : null, (0, jsx_runtime_1.jsx)(StepActions_1.StepActions, { step: step, px: 2, py: 1, dense: true }), step.execution?.process.map((process, index) => ((0, jsx_runtime_1.jsx)(StepProcess_1.StepProcess, { step: step, process: process }, index))), (0, jsx_runtime_1.jsx)(GasStepProcess_1.GasStepProcess, { step: step }), formattedToAddress && toAddressLink ? ((0, jsx_runtime_1.jsx)(DestinationWalletAddress_1.DestinationWalletAddress, { step: step, toAddress: formattedToAddress, toAddressLink: toAddressLink })) : null, toToken ? (0, jsx_runtime_1.jsx)(Token_1.Token, { token: toToken, px: 2, py: 1 }) : null] })] }));
};
exports.Step = Step;
