/// <reference types="react" />
import type { PaletteMode } from '@mui/material';
import type { ThemeConfig } from '../types';
declare module '@mui/material/styles' {
    interface TypographyVariants {
        '@supports (font-variation-settings: normal)': React.CSSProperties;
    }
    interface TypographyVariantsOptions {
        '@supports (font-variation-settings: normal)'?: React.CSSProperties;
    }
    interface Shape {
        borderRadius: number;
        borderRadiusSecondary: number;
    }
    interface Theme {
        shape: Shape;
    }
    interface ThemeOptions {
        shape?: Partial<Shape>;
    }
    interface BreakpointOverrides {
        xs: true;
        sm: true;
        md: true;
        lg: true;
        xl: true;
        mobile: true;
        tablet: true;
    }
}
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        '@supports (font-variation-settings: normal)': true;
    }
}
export declare const createTheme: (mode: PaletteMode, theme?: ThemeConfig) => import("@mui/material").Theme;
