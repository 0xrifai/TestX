/// <reference types="react" />
import type { StyledComponent } from '@emotion/styled';
import type { IconButtonProps, LinkProps } from '@mui/material';
export declare const ListItemButton: StyledComponent<import("@mui/material").ListItemButtonOwnProps & Omit<import("@mui/material").ButtonBaseOwnProps, "classes"> & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: import("react").RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void) | null | undefined;
}, "className" | "style" | "classes" | "action" | "centerRipple" | "children" | "disabled" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "sx" | "tabIndex" | "TouchRippleProps" | "touchRippleRef" | "autoFocus" | "alignItems" | "divider" | "dense" | "selected" | "disableGutters"> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
export declare const ListItem: StyledComponent<{
    button?: false | undefined;
} & import("@mui/material").ListItemOwnProps & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<import("react").DetailedHTMLProps<import("react").LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & {
    ref?: ((instance: HTMLLIElement | null) => void) | import("react").RefObject<HTMLLIElement> | null | undefined;
}, "button" | "className" | "style" | "classes" | "children" | "disabled" | "sx" | "autoFocus" | "alignItems" | "divider" | "components" | "dense" | "componentsProps" | "slots" | "slotProps" | "selected" | "disableGutters" | "ContainerComponent" | "ContainerProps" | "disablePadding" | "secondaryAction"> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
export declare const IconButton: StyledComponent<IconButtonProps & LinkProps>;
