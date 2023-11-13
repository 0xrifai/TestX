import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Skeleton } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useChain, useToken } from '../../hooks';
import { formatTokenAmount, formatTokenPrice } from '../../utils';
import { SmallAvatar } from '../SmallAvatar';
import { TextFitter } from '../TextFitter';
import { TokenAvatar } from '../TokenAvatar';
import { TextSecondary, TextSecondaryContainer } from './Token.style';
export const Token = ({ token, ...other }) => {
    if (!token?.priceUSD || !token.logoURI) {
        return _jsx(TokenFallback, { token: token, ...other });
    }
    return _jsx(TokenBase, { token: token, ...other });
};
export const TokenFallback = ({ token, isLoading, ...other }) => {
    const { token: chainToken, isLoading: isLoadingToken } = useToken(token?.chainId, token?.address);
    return (_jsx(TokenBase, { token: { ...token, ...chainToken }, isLoading: isLoading || isLoadingToken, ...other }));
};
export const TokenBase = ({ token, connected, step, disableDescription, isLoading, ...other }) => {
    const { t } = useTranslation();
    const { chain } = useChain(token?.chainId);
    const formattedTokenAmount = formatTokenAmount(token?.amount, token?.decimals);
    const formattedTokenPrice = formatTokenPrice(formattedTokenAmount, token?.priceUSD);
    return (_jsxs(Box, { flex: 1, ...other, children: [_jsxs(Box, { display: "flex", flex: 1, alignItems: "center", children: [_jsx(TokenAvatar, { token: token, chain: chain, isLoading: isLoading, sx: { marginRight: 2 } }), isLoading ? (_jsx(Skeleton, { width: 112, height: 32, variant: "text" })) : (_jsx(TextFitter, { height: 30, textStyle: {
                            fontWeight: 700,
                        }, children: t('format.number', {
                            value: formattedTokenAmount,
                        }) }))] }), _jsxs(TextSecondaryContainer, { connected: connected, component: "span", children: [isLoading ? (_jsx(Skeleton, { width: 48, height: 12, variant: "rounded", sx: { marginTop: 0.5 } })) : (_jsx(TextSecondary, { connected: connected, children: t(`format.currency`, {
                            value: formattedTokenPrice,
                        }) })), !disableDescription ? (_jsx(TextSecondary, { connected: connected, px: 0.5, dot: true, children: "\u2022" })) : null, !step && !disableDescription ? (isLoading ? (_jsx(Skeleton, { width: 96, height: 12, variant: "rounded", sx: { marginTop: 0.5 } })) : (_jsx(TextSecondary, { connected: connected, children: t(`main.tokenOnChain`, {
                            tokenSymbol: token?.symbol,
                            chainName: chain?.name,
                        }) }))) : null, step ? (_jsxs(Box, { display: "flex", alignItems: "flex-end", height: 12, mt: 0.5, children: [_jsx(Box, { pr: 0.75, children: _jsx(SmallAvatar, { src: step.toolDetails.logoURI, alt: step.toolDetails.name, sx: {
                                        border: 0,
                                        marginBottom: -0.25,
                                    }, children: step.toolDetails.name[0] }) }), _jsx(TextSecondary, { connected: true, children: step.toolDetails.name })] })) : null] })] }));
};
