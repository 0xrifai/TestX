import { jsx as _jsx } from "react/jsx-runtime";
import { Avatar, Badge, Skeleton } from '@mui/material';
import { useChain, useToken } from '../../hooks';
import { SmallAvatar, SmallAvatarSkeleton } from '../SmallAvatar';
import { AvatarDefault, AvatarDefaultBadge } from './TokenAvatar.style';
export const TokenAvatarFallback = ({ token, isLoading, sx }) => {
    const { chain } = useChain(token?.chainId);
    const { token: chainToken, isLoading: isLoadingToken } = useToken(token?.chainId, token?.address);
    return (_jsx(TokenAvatarBase, { token: chainToken ?? token, isLoading: isLoading || isLoadingToken, chain: chain, sx: sx }));
};
export const TokenAvatarBase = ({ token, chain, isLoading, sx }) => {
    return (_jsx(Badge, { overlap: "circular", anchorOrigin: { vertical: 'bottom', horizontal: 'right' }, badgeContent: chain && !isLoading ? (_jsx(SmallAvatar, { src: chain.logoURI, alt: chain.name, children: chain.name[0] })) : (_jsx(SmallAvatarSkeleton, {})), sx: sx, children: isLoading ? (_jsx(Skeleton, { width: 32, height: 32, variant: "circular" })) : (_jsx(Avatar, { src: token?.logoURI, alt: token?.symbol, children: token?.symbol?.[0] })) }));
};
export const TokenAvatar = ({ token, chain, isLoading, sx }) => {
    if (!chain || !token?.logoURI) {
        return _jsx(TokenAvatarFallback, { token: token, isLoading: isLoading, sx: sx });
    }
    return (_jsx(TokenAvatarBase, { token: token, chain: chain, isLoading: isLoading, sx: sx }));
};
export const TokenAvatarDefault = ({ sx }) => {
    return (_jsx(Badge, { overlap: "circular", anchorOrigin: { vertical: 'bottom', horizontal: 'right' }, badgeContent: _jsx(AvatarDefaultBadge, { width: 16, height: 16 }), sx: sx, children: _jsx(AvatarDefault, { width: 32, height: 32 }) }));
};
