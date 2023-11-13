import { jsx as _jsx } from "react/jsx-runtime";
import { LiFiFullLogo, LiFiLogo as LiFiIconLogo } from '../icons';
export const LiFiLogo = ({ variant = 'icon', style }) => {
    const Component = variant === 'icon' ? LiFiIconLogo : LiFiFullLogo;
    return _jsx(Component, { style: style, fill: "currentColor", color: "currentColor" });
};
