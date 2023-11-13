/// <reference types="react" />
import type { StyledComponent } from '@emotion/styled';
import type { TabsProps } from '@mui/material';
export declare const NavbarTabs: StyledComponent<TabsProps>;
export declare const NavbarTab: StyledComponent<import("@mui/material").TabOwnProps & Omit<import("@mui/material").ButtonBaseOwnProps, "classes"> & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: import("react").RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void) | null | undefined;
}, "className" | "style" | "classes" | "action" | "centerRipple" | "children" | "disabled" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "sx" | "tabIndex" | "TouchRippleProps" | "touchRippleRef" | "label" | "disableFocusRipple" | "value" | "icon" | "iconPosition" | "wrapped"> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme> & {
    component?: import("react").ElementType<any> | undefined;
}, {}, {}>;
