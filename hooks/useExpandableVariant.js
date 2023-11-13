import { useMediaQuery } from '@mui/material';
import { useWidgetConfig } from '../providers';
const defaultExpandableWidth = 852;
export const useExpandableVariant = () => {
    const { variant, useRecommendedRoute } = useWidgetConfig();
    const expandableAllowed = useMediaQuery((theme) => theme.breakpoints.up(defaultExpandableWidth));
    return variant === 'expandable' && expandableAllowed && !useRecommendedRoute;
};
