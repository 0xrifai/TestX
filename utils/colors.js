import { common } from '@mui/material/colors';
import { getContrastRatio } from '@mui/material/styles';
export const getContrastAlphaColor = (mode, alpha) => mode === 'light' ? `rgb(0 0 0 / ${alpha})` : `rgb(255 255 255 / ${alpha})`;
export const getContrastTextColor = (theme, background) => getContrastRatio(common.white, background ?? theme.palette.primary.main) >= 3
    ? common.white
    : common.black;
