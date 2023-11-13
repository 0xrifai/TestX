import { jsx as _jsx } from "react/jsx-runtime";
import { List, Typography } from '@mui/material';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { TokenListItem, TokenListItemSkeleton } from './TokenListItem';
export const VirtualizedTokenList = ({ tokens, featuredTokensLength, scrollElementRef, chainId, chain, isLoading, isBalanceLoading, showBalance, showFeatured, onClick, }) => {
    const { t } = useTranslation();
    const hasFeaturedTokens = !!featuredTokensLength && showFeatured;
    const featuredTokensLastIndex = (featuredTokensLength ?? 0) - 1;
    const tokensLastIndex = tokens.length - 1;
    const { getVirtualItems, getTotalSize, scrollToIndex } = useVirtualizer({
        count: tokens.length,
        getScrollElement: () => scrollElementRef.current,
        overscan: 10,
        paddingEnd: 12,
        estimateSize: (index) => {
            // heigth of TokenListItem
            let size = 64;
            if (!hasFeaturedTokens) {
                return size;
            }
            if (index === 0 && tokens[index]?.featured) {
                // height of startAdornment
                size += 24;
            }
            if (index === featuredTokensLastIndex &&
                index !== tokensLastIndex &&
                tokens[index]?.featured) {
                // height of endAdornment
                size += 32;
            }
            return size;
        },
        getItemKey: (index) => `${tokens[index].address}-${index}`,
    });
    useEffect(() => {
        if (getVirtualItems().length) {
            scrollToIndex(0, { align: 'start' });
        }
    }, [scrollToIndex, chainId, getVirtualItems]);
    if (isLoading) {
        return (_jsx(List, { disablePadding: true, children: Array.from({ length: 3 }).map((_, index) => (
            // eslint-disable-next-line react/no-array-index-key
            _jsx(TokenListItemSkeleton, {}, index))) }));
    }
    return (_jsx(List, { style: { height: getTotalSize() }, disablePadding: true, children: getVirtualItems().map((item) => {
            const token = tokens[item.index];
            return (_jsx(TokenListItem, { onClick: onClick, size: item.size, start: item.start, token: token, chain: chain, isBalanceLoading: isBalanceLoading, showBalance: showBalance, startAdornment: hasFeaturedTokens && token.featured && item.index === 0 ? (_jsx(Typography, { fontSize: 14, fontWeight: 600, lineHeight: 1, 
                    // px={2}
                    pb: 1.25, children: t('main.featuredTokens') })) : null, endAdornment: hasFeaturedTokens &&
                    token.featured &&
                    item.index === featuredTokensLastIndex &&
                    item.index !== tokensLastIndex ? (_jsx(Typography, { fontSize: 14, fontWeight: 600, lineHeight: 1, px: 2, py: 1.25, children: t('main.otherTokens') })) : null }, item.key));
        }) }));
};
