import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import OpenInNewIcon from '@mui/icons-material/OpenInNewRounded';
import { Avatar, Box, Link, ListItemAvatar, ListItemText, Skeleton, Slide, Typography, } from '@mui/material';
import { memo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { formatTokenAmount, formatTokenPrice, shortenAddress, } from '../../utils';
import { IconButton, ListItem, ListItemButton } from './TokenList.style';
// eslint-disable-next-line react/display-name
export const TokenListItem = memo(({ onClick, size, start, token, chain, showBalance, isBalanceLoading, startAdornment, endAdornment, }) => {
    const handleClick = () => onClick?.(token.address);
    return (_jsxs(ListItem, { disablePadding: true, style: {
            height: `${size}px`,
            transform: `translateY(${start}px)`,
        }, children: [startAdornment, _jsx(TokenListItemButton, { token: token, chain: chain, showBalance: showBalance, isBalanceLoading: isBalanceLoading, onClick: handleClick }), endAdornment] }));
});
export const TokenListItemButton = ({ onClick, token, chain, showBalance, isBalanceLoading, }) => {
    const { t } = useTranslation();
    const tokenPrice = formatTokenPrice(token.amount, token.priceUSD);
    const container = useRef(null);
    const timeoutId = useRef();
    const [showAddress, setShowAddress] = useState(false);
    const onMouseEnter = () => {
        timeoutId.current = setTimeout(() => setShowAddress(true), 350);
    };
    const onMouseLeave = () => {
        clearTimeout(timeoutId.current);
        if (showAddress) {
            setShowAddress(false);
        }
    };
    return (_jsxs(ListItemButton, { onClick: onClick, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, dense: true, children: [_jsx(ListItemAvatar, { children: _jsx(Avatar, { src: token.logoURI, alt: token.symbol, children: token.symbol?.[0] }) }), _jsx(ListItemText, { primary: token.symbol, secondaryTypographyProps: {
                    component: 'div',
                }, secondary: _jsxs(Box, { position: "relative", height: 20, ref: container, children: [_jsx(Slide, { direction: "down", in: !showAddress, container: container.current, style: {
                                position: 'absolute',
                            }, appear: false, children: _jsx(Box, { pt: 0.25, children: token.name }) }), _jsx(Slide, { direction: "up", in: showAddress, container: container.current, style: {
                                position: 'absolute',
                            }, appear: false, mountOnEnter: true, children: _jsxs(Box, { display: "flex", children: [_jsx(Box, { display: "flex", alignItems: "center", pt: 0.125, children: shortenAddress(token.address) }), _jsx(IconButton, { size: "small", LinkComponent: Link, href: `${chain?.metamask.blockExplorerUrls[0]}address/${token.address}`, target: "_blank", rel: "nofollow noreferrer", onClick: (e) => e.stopPropagation(), children: _jsx(OpenInNewIcon, {}) })] }) })] }) }), showBalance ? (isBalanceLoading ? (_jsx(TokenAmountSkeleton, {})) : (_jsxs(Box, { sx: { textAlign: 'right' }, children: [Number(token.amount) ? (_jsx(Typography, { variant: "body1", noWrap: true, children: t('format.number', {
                            value: formatTokenAmount(token.amount),
                        }) })) : null, tokenPrice ? (_jsx(Typography, { fontWeight: 400, fontSize: 12, color: "text.secondary", "data-price": token.priceUSD, children: t(`format.currency`, {
                            value: tokenPrice,
                        }) })) : null] }))) : null] }));
};
export const TokenListItemSkeleton = () => {
    return (_jsxs(ListItem, { secondaryAction: _jsx(TokenAmountSkeleton, {}), disablePadding: true, sx: { position: 'relative', flexDirection: 'row', alignItems: 'center' }, children: [_jsx(ListItemAvatar, { children: _jsx(Skeleton, { variant: "circular", width: 32, height: 32, sx: { marginLeft: 1.5, marginRight: 2 } }) }), _jsx(ListItemText, { primary: _jsx(Skeleton, { variant: "text", width: 48, height: 20 }), secondary: _jsx(Skeleton, { variant: "text", width: 96, height: 20 }) })] }));
};
export const TokenAmountSkeleton = () => {
    return (_jsxs(Box, { sx: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
        }, children: [_jsx(Skeleton, { variant: "text", width: 56, height: 24 }), _jsx(Skeleton, { variant: "text", width: 48, height: 18 })] }));
};
