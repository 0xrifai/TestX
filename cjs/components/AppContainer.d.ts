import type { PropsWithChildren } from 'react';
import type { WidgetVariant } from '../types';
export declare const maxHeight = "unset";
export declare const AppExpandedContainer: import("@emotion/styled").StyledComponent<import("@mui/system").BoxOwnProps<import("@mui/material").Theme> & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: import("react").RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void) | null | undefined;
}, keyof import("@mui/system").BoxOwnProps<import("@mui/material").Theme>> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme> & {
    variant?: WidgetVariant | undefined;
}, {}, {}>;
export declare const FlexContainer: import("@emotion/styled").StyledComponent<import("@mui/material").ContainerOwnProps & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: import("react").RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void) | null | undefined;
}, "className" | "style" | "classes" | "children" | "sx" | "maxWidth" | "fixed" | "disableGutters"> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
export declare const AppContainer: React.FC<PropsWithChildren<{}>>;
