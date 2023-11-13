"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectChainPage = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const ChainSelect_1 = require("../../components/ChainSelect");
const ListItemButton_1 = require("../../components/ListItemButton");
const ListItemText_1 = require("../../components/ListItemText");
const TokenList_1 = require("../../components/TokenList");
const hooks_1 = require("../../hooks");
const SelectChainPage = ({ formType, selectNativeToken, }) => {
    const { navigateBack } = (0, hooks_1.useNavigateBack)();
    const { chains, setCurrentChain } = (0, ChainSelect_1.useChainSelect)(formType);
    const selectToken = (0, TokenList_1.useTokenSelect)(formType, navigateBack);
    const handleClick = async (chain) => {
        if (selectNativeToken) {
            selectToken(chain.nativeToken.address, chain.id);
        }
        else {
            setCurrentChain(chain.id);
            navigateBack();
        }
    };
    return ((0, jsx_runtime_1.jsx)(material_1.Container, { disableGutters: true, children: (0, jsx_runtime_1.jsx)(material_1.List, { sx: {
                paddingLeft: 1.5,
                paddingRight: 1.5,
            }, children: chains?.map((chain) => ((0, jsx_runtime_1.jsxs)(ListItemButton_1.ListItemButton, { onClick: () => handleClick(chain), children: [(0, jsx_runtime_1.jsx)(material_1.ListItemAvatar, { children: (0, jsx_runtime_1.jsx)(material_1.Avatar, { src: chain.logoURI, alt: chain.name, children: chain.name[0] }) }), (0, jsx_runtime_1.jsx)(ListItemText_1.ListItemText, { primary: chain.name })] }, chain.id))) }) }));
};
exports.SelectChainPage = SelectChainPage;
