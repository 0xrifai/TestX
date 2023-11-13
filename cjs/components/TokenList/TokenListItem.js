"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenAmountSkeleton = exports.TokenListItemSkeleton = exports.TokenListItemButton = exports.TokenListItem = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const OpenInNewRounded_1 = require("@mui/icons-material/OpenInNewRounded");
const material_1 = require("@mui/material");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const utils_1 = require("../../utils");
const TokenList_style_1 = require("./TokenList.style");
// eslint-disable-next-line react/display-name
exports.TokenListItem = (0, react_1.memo)(({ onClick, size, start, token, chain, showBalance, isBalanceLoading, startAdornment, endAdornment, }) => {
    const handleClick = () => onClick?.(token.address);
    return ((0, jsx_runtime_1.jsxs)(TokenList_style_1.ListItem, { disablePadding: true, style: {
            height: `${size}px`,
            transform: `translateY(${start}px)`,
        }, children: [startAdornment, (0, jsx_runtime_1.jsx)(exports.TokenListItemButton, { token: token, chain: chain, showBalance: showBalance, isBalanceLoading: isBalanceLoading, onClick: handleClick }), endAdornment] }));
});
const TokenListItemButton = ({ onClick, token, chain, showBalance, isBalanceLoading, }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const tokenPrice = (0, utils_1.formatTokenPrice)(token.amount, token.priceUSD);
    const container = (0, react_1.useRef)(null);
    const timeoutId = (0, react_1.useRef)();
    const [showAddress, setShowAddress] = (0, react_1.useState)(false);
    const onMouseEnter = () => {
        timeoutId.current = setTimeout(() => setShowAddress(true), 350);
    };
    const onMouseLeave = () => {
        clearTimeout(timeoutId.current);
        if (showAddress) {
            setShowAddress(false);
        }
    };
    return ((0, jsx_runtime_1.jsxs)(TokenList_style_1.ListItemButton, { onClick: onClick, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, dense: true, children: [(0, jsx_runtime_1.jsx)(material_1.ListItemAvatar, { children: (0, jsx_runtime_1.jsx)(material_1.Avatar, { src: token.logoURI, alt: token.symbol, children: token.symbol?.[0] }) }), (0, jsx_runtime_1.jsx)(material_1.ListItemText, { primary: token.symbol, secondaryTypographyProps: {
                    component: 'div',
                }, secondary: (0, jsx_runtime_1.jsxs)(material_1.Box, { position: "relative", height: 20, ref: container, children: [(0, jsx_runtime_1.jsx)(material_1.Slide, { direction: "down", in: !showAddress, container: container.current, style: {
                                position: 'absolute',
                            }, appear: false, children: (0, jsx_runtime_1.jsx)(material_1.Box, { pt: 0.25, children: token.name }) }), (0, jsx_runtime_1.jsx)(material_1.Slide, { direction: "up", in: showAddress, container: container.current, style: {
                                position: 'absolute',
                            }, appear: false, mountOnEnter: true, children: (0, jsx_runtime_1.jsxs)(material_1.Box, { display: "flex", children: [(0, jsx_runtime_1.jsx)(material_1.Box, { display: "flex", alignItems: "center", pt: 0.125, children: (0, utils_1.shortenAddress)(token.address) }), (0, jsx_runtime_1.jsx)(TokenList_style_1.IconButton, { size: "small", LinkComponent: material_1.Link, href: `${chain?.metamask.blockExplorerUrls[0]}address/${token.address}`, target: "_blank", rel: "nofollow noreferrer", onClick: (e) => e.stopPropagation(), children: (0, jsx_runtime_1.jsx)(OpenInNewRounded_1.default, {}) })] }) })] }) }), showBalance ? (isBalanceLoading ? ((0, jsx_runtime_1.jsx)(exports.TokenAmountSkeleton, {})) : ((0, jsx_runtime_1.jsxs)(material_1.Box, { sx: { textAlign: 'right' }, children: [Number(token.amount) ? ((0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "body1", noWrap: true, children: t('format.number', {
                            value: (0, utils_1.formatTokenAmount)(token.amount),
                        }) })) : null, tokenPrice ? ((0, jsx_runtime_1.jsx)(material_1.Typography, { fontWeight: 400, fontSize: 12, color: "text.secondary", "data-price": token.priceUSD, children: t(`format.currency`, {
                            value: tokenPrice,
                        }) })) : null] }))) : null] }));
};
exports.TokenListItemButton = TokenListItemButton;
const TokenListItemSkeleton = () => {
    return ((0, jsx_runtime_1.jsxs)(TokenList_style_1.ListItem, { secondaryAction: (0, jsx_runtime_1.jsx)(exports.TokenAmountSkeleton, {}), disablePadding: true, sx: { position: 'relative', flexDirection: 'row', alignItems: 'center' }, children: [(0, jsx_runtime_1.jsx)(material_1.ListItemAvatar, { children: (0, jsx_runtime_1.jsx)(material_1.Skeleton, { variant: "circular", width: 32, height: 32, sx: { marginLeft: 1.5, marginRight: 2 } }) }), (0, jsx_runtime_1.jsx)(material_1.ListItemText, { primary: (0, jsx_runtime_1.jsx)(material_1.Skeleton, { variant: "text", width: 48, height: 20 }), secondary: (0, jsx_runtime_1.jsx)(material_1.Skeleton, { variant: "text", width: 96, height: 20 }) })] }));
};
exports.TokenListItemSkeleton = TokenListItemSkeleton;
const TokenAmountSkeleton = () => {
    return ((0, jsx_runtime_1.jsxs)(material_1.Box, { sx: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
        }, children: [(0, jsx_runtime_1.jsx)(material_1.Skeleton, { variant: "text", width: 56, height: 24 }), (0, jsx_runtime_1.jsx)(material_1.Skeleton, { variant: "text", width: 48, height: 18 })] }));
};
exports.TokenAmountSkeleton = TokenAmountSkeleton;
