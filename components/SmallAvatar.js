import { jsx as _jsx } from "react/jsx-runtime";
import { Avatar, Box, Skeleton } from '@mui/material';
import { styled } from '@mui/material/styles';
export const SmallAvatar = styled(Avatar)(({ theme }) => ({
    background: theme.palette.background.paper,
    width: 16,
    height: 16,
    border: `2px solid ${theme.palette.background.paper}`,
}));
export const SmallAvatarSkeletonBase = styled(Skeleton)(({ theme }) => ({
    border: `2px solid ${theme.palette.background.paper}`,
    width: 16,
    height: 16,
}));
export const SmallAvatarSkeletonContainer = styled(Box)(({ theme }) => ({
    background: theme.palette.background.paper,
    borderRadius: '50%',
}));
export const SmallAvatarSkeleton = () => {
    return (_jsx(SmallAvatarSkeletonContainer, { children: _jsx(SmallAvatarSkeletonBase, { variant: "circular" }) }));
};
