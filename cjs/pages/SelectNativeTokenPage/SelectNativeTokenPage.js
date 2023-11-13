"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectNativeTokenPage = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const react_i18next_1 = require("react-i18next");
const ListItemButton_1 = require("../../components/ListItemButton");
const ListItemText_1 = require("../../components/ListItemText");
const TokenAvatar_1 = require("../../components/TokenAvatar");
const TokenList_1 = require("../../components/TokenList");
const hooks_1 = require("../../hooks");
const SelectNativeTokenPage = ({ formType, }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const { navigateBack } = (0, hooks_1.useNavigateBack)();
    const { chains } = (0, hooks_1.useChains)();
    const selectToken = (0, TokenList_1.useTokenSelect)(formType, navigateBack);
    return ((0, jsx_runtime_1.jsx)(material_1.Container, { disableGutters: true, children: (0, jsx_runtime_1.jsx)(material_1.List, { sx: {
                paddingLeft: 1.5,
                paddingRight: 1.5,
            }, children: chains?.map((chain) => ((0, jsx_runtime_1.jsxs)(ListItemButton_1.ListItemButton, { onClick: () => selectToken(chain.nativeToken.address, chain.id), children: [(0, jsx_runtime_1.jsx)(material_1.ListItemAvatar, { children: (0, jsx_runtime_1.jsx)(TokenAvatar_1.TokenAvatar, { token: chain.nativeToken, chain: chain }) }), (0, jsx_runtime_1.jsx)(ListItemText_1.ListItemText, { primary: chain.nativeToken.symbol, secondary: t('main.onChain', { chainName: chain.name }) })] }, chain.id))) }) }));
};
exports.SelectNativeTokenPage = SelectNativeTokenPage;
