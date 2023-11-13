"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenBase = exports.TokenFallback = exports.Token = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const react_i18next_1 = require("react-i18next");
const hooks_1 = require("../../hooks");
const utils_1 = require("../../utils");
const SmallAvatar_1 = require("../SmallAvatar");
const TextFitter_1 = require("../TextFitter");
const TokenAvatar_1 = require("../TokenAvatar");
const Token_style_1 = require("./Token.style");
const Token = ({ token, ...other }) => {
    if (!token?.priceUSD || !token.logoURI) {
        return (0, jsx_runtime_1.jsx)(exports.TokenFallback, { token: token, ...other });
    }
    return (0, jsx_runtime_1.jsx)(exports.TokenBase, { token: token, ...other });
};
exports.Token = Token;
const TokenFallback = ({ token, isLoading, ...other }) => {
    const { token: chainToken, isLoading: isLoadingToken } = (0, hooks_1.useToken)(token?.chainId, token?.address);
    return ((0, jsx_runtime_1.jsx)(exports.TokenBase, { token: { ...token, ...chainToken }, isLoading: isLoading || isLoadingToken, ...other }));
};
exports.TokenFallback = TokenFallback;
const TokenBase = ({ token, connected, step, disableDescription, isLoading, ...other }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const { chain } = (0, hooks_1.useChain)(token?.chainId);
    const formattedTokenAmount = (0, utils_1.formatTokenAmount)(token?.amount, token?.decimals);
    const formattedTokenPrice = (0, utils_1.formatTokenPrice)(formattedTokenAmount, token?.priceUSD);
    return ((0, jsx_runtime_1.jsxs)(material_1.Box, { flex: 1, ...other, children: [(0, jsx_runtime_1.jsxs)(material_1.Box, { display: "flex", flex: 1, alignItems: "center", children: [(0, jsx_runtime_1.jsx)(TokenAvatar_1.TokenAvatar, { token: token, chain: chain, isLoading: isLoading, sx: { marginRight: 2 } }), isLoading ? ((0, jsx_runtime_1.jsx)(material_1.Skeleton, { width: 112, height: 32, variant: "text" })) : ((0, jsx_runtime_1.jsx)(TextFitter_1.TextFitter, { height: 30, textStyle: {
                            fontWeight: 700,
                        }, children: t('format.number', {
                            value: formattedTokenAmount,
                        }) }))] }), (0, jsx_runtime_1.jsxs)(Token_style_1.TextSecondaryContainer, { connected: connected, component: "span", children: [isLoading ? ((0, jsx_runtime_1.jsx)(material_1.Skeleton, { width: 48, height: 12, variant: "rounded", sx: { marginTop: 0.5 } })) : ((0, jsx_runtime_1.jsx)(Token_style_1.TextSecondary, { connected: connected, children: t(`format.currency`, {
                            value: formattedTokenPrice,
                        }) })), !disableDescription ? ((0, jsx_runtime_1.jsx)(Token_style_1.TextSecondary, { connected: connected, px: 0.5, dot: true, children: "\u2022" })) : null, !step && !disableDescription ? (isLoading ? ((0, jsx_runtime_1.jsx)(material_1.Skeleton, { width: 96, height: 12, variant: "rounded", sx: { marginTop: 0.5 } })) : ((0, jsx_runtime_1.jsx)(Token_style_1.TextSecondary, { connected: connected, children: t(`main.tokenOnChain`, {
                            tokenSymbol: token?.symbol,
                            chainName: chain?.name,
                        }) }))) : null, step ? ((0, jsx_runtime_1.jsxs)(material_1.Box, { display: "flex", alignItems: "flex-end", height: 12, mt: 0.5, children: [(0, jsx_runtime_1.jsx)(material_1.Box, { pr: 0.75, children: (0, jsx_runtime_1.jsx)(SmallAvatar_1.SmallAvatar, { src: step.toolDetails.logoURI, alt: step.toolDetails.name, sx: {
                                        border: 0,
                                        marginBottom: -0.25,
                                    }, children: step.toolDetails.name[0] }) }), (0, jsx_runtime_1.jsx)(Token_style_1.TextSecondary, { connected: true, children: step.toolDetails.name })] })) : null] })] }));
};
exports.TokenBase = TokenBase;
