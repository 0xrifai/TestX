import type { BoxProps, Theme } from '@mui/material';
import type { MouseEventHandler } from 'react';
type CardVariant = 'default' | 'selected' | 'error';
export type CardProps = {
    variant?: CardVariant;
    selectionColor?: 'primary' | 'secondary';
    indented?: boolean;
    onClick?: MouseEventHandler<HTMLDivElement>;
    pointerEvents?: 'auto' | 'none';
} & BoxProps;
export declare const Card: import("@emotion/styled").StyledComponent<import("@mui/system").BoxOwnProps<Theme> & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: import("react").RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void) | null | undefined;
}, keyof import("@mui/system").BoxOwnProps<Theme>> & import("@mui/system").MUIStyledCommonProps<Theme> & {
    variant?: CardVariant | undefined;
    selectionColor?: "primary" | "secondary" | undefined;
    indented?: boolean | undefined;
    onClick?: MouseEventHandler<HTMLDivElement> | undefined;
    pointerEvents?: "none" | "auto" | undefined;
} & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: import("react").RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void) | null | undefined;
}, keyof import("@mui/material/OverridableComponent").CommonProps | keyof import("@mui/system").BoxOwnProps<Theme>>, {}, {}>;
export {};
