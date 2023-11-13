import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box } from '@mui/material';
import { useRef } from 'react';
import { useWatch } from 'react-hook-form';
import { useChain, useDebouncedWatch, useTokenBalances, useTokenSearch, } from '../../hooks';
import { FormKey, FormKeyHelper, useWallet } from '../../providers';
import { TokenNotFound } from './TokenNotFound';
import { VirtualizedTokenList } from './VirtualizedTokenList';
import { useTokenSelect } from './useTokenSelect';
export const TokenList = ({ formType, height, onClick, }) => {
    const parentRef = useRef(null);
    const { account } = useWallet();
    const [selectedChainId] = useWatch({
        name: [FormKeyHelper.getChainKey(formType)],
    });
    const [tokenSearchFilter] = useDebouncedWatch([FormKey.TokenSearchFilter], 320);
    const { chain, isLoading: isChainLoading } = useChain(selectedChainId);
    const { tokens: chainTokens, tokensWithBalance, isLoading: isTokensLoading, isBalanceLoading, featuredTokens, } = useTokenBalances(selectedChainId);
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
    const { token: searchedToken, isLoading: isSearchedTokenLoading } = useTokenSearch(selectedChainId, tokenSearchFilter, tokenSearchEnabled);
    const isLoading = isTokensLoading ||
        isChainLoading ||
        (tokenSearchEnabled && isSearchedTokenLoading);
    const tokens = filteredTokens.length
        ? filteredTokens
        : searchedToken
            ? [searchedToken]
            : filteredTokens;
    const handleTokenClick = useTokenSelect(formType, onClick);
    return (_jsxs(Box, { ref: parentRef, style: { height, overflow: 'auto' }, sx: {
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
        }, children: [!tokens.length && !isLoading ? (_jsx(TokenNotFound, { formType: formType })) : null, _jsx(VirtualizedTokenList, { tokens: tokens, featuredTokensLength: featuredTokens?.length, scrollElementRef: parentRef, chainId: selectedChainId, chain: chain, isLoading: isLoading, isBalanceLoading: isBalanceLoading, showBalance: account.isActive, showFeatured: !tokenSearchFilter, onClick: handleTokenClick })] }));
};
