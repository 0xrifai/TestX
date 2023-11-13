"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectTokenButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const react_hook_form_1 = require("react-hook-form");
const react_i18next_1 = require("react-i18next");
const react_router_dom_1 = require("react-router-dom");
const hooks_1 = require("../../hooks");
const providers_1 = require("../../providers");
const utils_1 = require("../../utils");
const Card_1 = require("../Card");
const TokenAvatar_1 = require("../TokenAvatar");
const SelectTokenButton_style_1 = require("./SelectTokenButton.style");
const SelectTokenButton = ({ formType, compact }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { disabledUI, subvariant } = (0, providers_1.useWidgetConfig)();
    const swapOnly = (0, hooks_1.useSwapOnly)();
    const tokenKey = providers_1.FormKeyHelper.getTokenKey(formType);
    const [chainId, tokenAddress] = (0, react_hook_form_1.useWatch)({
        name: [providers_1.FormKeyHelper.getChainKey(formType), tokenKey],
    });
    const { chain, isLoading: isChainLoading } = (0, hooks_1.useChain)(chainId);
    const { token, isLoading: isTokenLoading } = (0, hooks_1.useToken)(chainId, tokenAddress);
    const handleClick = () => {
        navigate(formType === 'from'
            ? utils_1.navigationRoutes.fromToken
            : subvariant === 'refuel'
                ? utils_1.navigationRoutes.toTokenNative
                : utils_1.navigationRoutes.toToken);
    };
    const isSelected = !!(chain && token);
    const onClick = !disabledUI?.includes(tokenKey) ? handleClick : undefined;
    const defaultPlaceholder = formType === 'to' && subvariant === 'refuel'
        ? t('main.selectChain')
        : formType === 'to' && swapOnly
            ? t('main.selectToken')
            : t('main.selectChainAndToken');
    const cardTitle = formType === 'from' && subvariant === 'nft'
        ? t(`header.payWith`)
        : t(`main.${formType}`);
    return ((0, jsx_runtime_1.jsxs)(Card_1.Card, { flex: 1, onClick: onClick, children: [(0, jsx_runtime_1.jsx)(Card_1.CardTitle, { children: cardTitle }), chainId && tokenAddress && (isChainLoading || isTokenLoading) ? ((0, jsx_runtime_1.jsx)(SelectTokenButton_style_1.SelectTokenCardHeader, { avatar: (0, jsx_runtime_1.jsx)(material_1.Skeleton, { variant: "circular", width: 32, height: 32 }), title: (0, jsx_runtime_1.jsx)(material_1.Skeleton, { variant: "text", width: 64, height: 24 }), subheader: (0, jsx_runtime_1.jsx)(material_1.Skeleton, { variant: "text", width: 64, height: 16 }), compact: compact })) : ((0, jsx_runtime_1.jsx)(SelectTokenButton_style_1.SelectTokenCardHeader, { avatar: isSelected ? ((0, jsx_runtime_1.jsx)(TokenAvatar_1.TokenAvatar, { token: token, chain: chain })) : ((0, jsx_runtime_1.jsx)(TokenAvatar_1.TokenAvatarDefault, {})), title: isSelected ? token.symbol : defaultPlaceholder, subheader: isSelected ? t(`main.onChain`, { chainName: chain.name }) : null, selected: isSelected, compact: compact }))] }));
};
exports.SelectTokenButton = SelectTokenButton;
