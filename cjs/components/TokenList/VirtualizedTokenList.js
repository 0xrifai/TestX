"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VirtualizedTokenList = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const react_virtual_1 = require("@tanstack/react-virtual");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const TokenListItem_1 = require("./TokenListItem");
const VirtualizedTokenList = ({ tokens, featuredTokensLength, scrollElementRef, chainId, chain, isLoading, isBalanceLoading, showBalance, showFeatured, onClick, }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const hasFeaturedTokens = !!featuredTokensLength && showFeatured;
    const featuredTokensLastIndex = (featuredTokensLength ?? 0) - 1;
    const tokensLastIndex = tokens.length - 1;
    const { getVirtualItems, getTotalSize, scrollToIndex } = (0, react_virtual_1.useVirtualizer)({
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
    (0, react_1.useEffect)(() => {
        if (getVirtualItems().length) {
            scrollToIndex(0, { align: 'start' });
        }
    }, [scrollToIndex, chainId, getVirtualItems]);
    if (isLoading) {
        return ((0, jsx_runtime_1.jsx)(material_1.List, { disablePadding: true, children: Array.from({ length: 3 }).map((_, index) => (
            // eslint-disable-next-line react/no-array-index-key
            (0, jsx_runtime_1.jsx)(TokenListItem_1.TokenListItemSkeleton, {}, index))) }));
    }
    return ((0, jsx_runtime_1.jsx)(material_1.List, { style: { height: getTotalSize() }, disablePadding: true, children: getVirtualItems().map((item) => {
            const token = tokens[item.index];
            return ((0, jsx_runtime_1.jsx)(TokenListItem_1.TokenListItem, { onClick: onClick, size: item.size, start: item.start, token: token, chain: chain, isBalanceLoading: isBalanceLoading, showBalance: showBalance, startAdornment: hasFeaturedTokens && token.featured && item.index === 0 ? ((0, jsx_runtime_1.jsx)(material_1.Typography, { fontSize: 14, fontWeight: 600, lineHeight: 1, 
                    // px={2}
                    pb: 1.25, children: t('main.featuredTokens') })) : null, endAdornment: hasFeaturedTokens &&
                    token.featured &&
                    item.index === featuredTokensLastIndex &&
                    item.index !== tokensLastIndex ? ((0, jsx_runtime_1.jsx)(material_1.Typography, { fontSize: 14, fontWeight: 600, lineHeight: 1, px: 2, py: 1.25, children: t('main.otherTokens') })) : null }, item.key));
        }) }));
};
exports.VirtualizedTokenList = VirtualizedTokenList;
