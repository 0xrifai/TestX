import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Card, CardTitle } from '../../components/Card';
import { StepActions } from '../../components/StepActions';
import { Token } from '../../components/Token';
import { useChains } from '../../hooks';
import { useWidgetConfig } from '../../providers';
import { shortenAddress } from '../../utils';
import { DestinationWalletAddress } from './DestinationWalletAddress';
import { GasStepProcess } from './GasStepProcess';
import { StepProcess } from './StepProcess';
import { StepTimer } from './StepTimer';
export const Step = ({ step, fromToken, toToken, toAddress }) => {
    const { t } = useTranslation();
    const { getChainById } = useChains();
    const { subvariant } = useWidgetConfig();
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
    const formattedToAddress = shortenAddress(toAddress);
    const toAddressLink = toAddress
        ? `${getChainById(step.action.toChainId)?.metamask
            .blockExplorerUrls[0]}address/${toAddress}`
        : undefined;
    return (_jsxs(Card, { variant: stepHasError ? 'error' : 'default', children: [_jsxs(Box, { sx: {
                    display: 'flex',
                    flex: 1,
                }, children: [_jsx(CardTitle, { flex: 1, children: getCardTitle() }), _jsx(CardTitle, { sx: { fontWeight: 500 }, children: _jsx(StepTimer, { step: step }) })] }), _jsxs(Box, { py: 1, children: [fromToken ? _jsx(Token, { token: fromToken, px: 2, py: 1 }) : null, _jsx(StepActions, { step: step, px: 2, py: 1, dense: true }), step.execution?.process.map((process, index) => (_jsx(StepProcess, { step: step, process: process }, index))), _jsx(GasStepProcess, { step: step }), formattedToAddress && toAddressLink ? (_jsx(DestinationWalletAddress, { step: step, toAddress: formattedToAddress, toAddressLink: toAddressLink })) : null, toToken ? _jsx(Token, { token: toToken, px: 2, py: 1 }) : null] })] }));
};
