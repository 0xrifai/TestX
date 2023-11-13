"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenList = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const react_1 = require("react");
const react_hook_form_1 = require("react-hook-form");
const hooks_1 = require("../../hooks");
const providers_1 = require("../../providers");
const TokenNotFound_1 = require("./TokenNotFound");
const VirtualizedTokenList_1 = require("./VirtualizedTokenList");
const useTokenSelect_1 = require("./useTokenSelect");
const TokenList = ({ formType, height, onClick, }) => {
    const parentRef = (0, react_1.useRef)(null);
    const { account } = (0, providers_1.useWallet)();
    const [selectedChainId] = (0, react_hook_form_1.useWatch)({
        name: [providers_1.FormKeyHelper.getChainKey(formType)],
    });
    const [tokenSearchFilter] = (0, hooks_1.useDebouncedWatch)([providers_1.FormKey.TokenSearchFilter], 320);
    const { chain, isLoading: isChainLoading } = (0, hooks_1.useChain)(selectedChainId);
    const { tokens: chainTokens, tokensWithBalance, isLoading: isTokensLoading, isBalanceLoading, featuredTokens, } = (0, hooks_1.useTokenBalances)(selectedChainId);
    let filteredTokens = (tokensWithBalance ??
        chainTokens ??
        []);
    const searchFilter = tokenSearchFilter?.toUpperCase() ?? '';
    filteredTokens = tokenSearchFilter
        ? filteredTokens.filter((token) => token.name.toUpperCase().includes(searchFilter) ||
            token.symbol.toUpperCase().includes(searchFilter) ||
            token.address.toUpperCase().includes(searchFilter))
        : filteredTokens;
    const tokenSearchEnabled = !isTokensLoading &&
        !filteredTokens.length &&
        !!tokenSearchFilter &&
        !!selectedChainId;
    const { token: searchedToken, isLoading: isSearchedTokenLoading } = (0, hooks_1.useTokenSearch)(selectedChainId, tokenSearchFilter, tokenSearchEnabled);
    const isLoading = isTokensLoading ||
        isChainLoading ||
        (tokenSearchEnabled && isSearchedTokenLoading);
    const tokens = filteredTokens.length
        ? filteredTokens
        : searchedToken
            ? [searchedToken]
            : filteredTokens;
    const handleTokenClick = (0, useTokenSelect_1.useTokenSelect)(formType, onClick);
    return ((0, jsx_runtime_1.jsxs)(material_1.Box, { ref: parentRef, style: { height, overflow: 'auto' }, sx: {
            '&::-webkit-scrollbar': {
                width: '0'
            },
            '&:hover::-webkit-scrollbar': {
                width: '10px'
            },
            '&::-webkit-scrollbar-track': {
                background: 'none'
            },
            '&::-webkit-scrollbar-thumb': {
                background: '#4242423d',
                borderRadius: 20
            },
        }, children: [!tokens.length && !isLoading ? ((0, jsx_runtime_1.jsx)(TokenNotFound_1.TokenNotFound, { formType: formType })) : null, (0, jsx_runtime_1.jsx)(VirtualizedTokenList_1.VirtualizedTokenList, { tokens: tokens, featuredTokensLength: featuredTokens?.length, scrollElementRef: parentRef, chainId: selectedChainId, chain: chain, isLoading: isLoading, isBalanceLoading: isBalanceLoading, showBalance: account.isActive, showFeatured: !tokenSearchFilter, onClick: handleTokenClick })] }));
};
exports.TokenList = TokenList;
