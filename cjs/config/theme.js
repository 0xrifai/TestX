"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTheme = void 0;
const LoadingButton_1 = require("@mui/lab/LoadingButton");
const ButtonBase_1 = require("@mui/material/ButtonBase");
const DialogActions_1 = require("@mui/material/DialogActions");
const colors_1 = require("@mui/material/colors");
const styles_1 = require("@mui/material/styles");
const palette = {
    primary: {
        main: '#3F49E1',
        light: (0, styles_1.lighten)('#3F49E1', 0.5),
        dark: (0, styles_1.darken)('#3F49E1', 0.2),
    },
    secondary: {
        main: '#F5B5FF',
        light: (0, styles_1.lighten)('#F5B5FF', 0.5),
        dark: (0, styles_1.darken)('#F5B5FF', 0.2),
    },
    success: {
        main: '#0AA65B',
    },
    warning: {
        main: '#FFCC00',
    },
    error: {
        main: '#E5452F',
    },
    info: {
        main: '#297EFF',
    },
};
const paletteLight = {
    text: {
        primary: '#000000',
        secondary: '#747474',
    },
};
const paletteDark = {
    background: {
        paper: '#212121',
    },
};
const shape = {
    borderRadius: 12,
    borderRadiusSecondary: 8,
};
const enterKeyframe = (0, styles_1.keyframes) `
  0% {
    transform: scale(0);
    opacity: 0.05;
  }
  100% {
    transform: scale(1);
    opacity: 0.1;
  }
`;
const createTheme = (mode, theme = {}) => {
    const primaryMainColor = theme.palette?.primary?.main ??
        palette.primary.main;
    const primaryLightColor = (0, styles_1.lighten)(theme.palette?.primary?.main ??
        palette.primary.main, 0.5);
    const primaryDarkColor = (0, styles_1.darken)(theme.palette?.primary?.main ??
        palette.primary.main, 0.2);
    const contrastButtonColor = (0, styles_1.getContrastRatio)(colors_1.common.white, primaryMainColor) >= 3
        ? colors_1.common.white
        : colors_1.common.black;
    const contrastTextButtonColor = (0, styles_1.getContrastRatio)(colors_1.common.white, (0, styles_1.alpha)(primaryMainColor, 0.08)) >= 3
        ? colors_1.common.white
        : colors_1.common.black;
    return (0, styles_1.createTheme)({
        typography: {
            fontFamily: 'Inter var, Inter, sans-serif',
            ...theme.typography,
        },
        palette: {
            mode,
            ...palette,
            ...(mode === 'light' ? paletteLight : paletteDark),
            ...theme.palette,
            primary: {
                main: primaryMainColor,
                light: primaryLightColor,
                dark: primaryDarkColor,
            },
            secondary: {
                main: theme.palette?.secondary?.main ??
                    palette.secondary.main,
                light: (0, styles_1.lighten)(theme.palette?.secondary?.main ??
                    palette.secondary.main, 0.5),
                dark: (0, styles_1.darken)(theme.palette?.secondary?.main ??
                    palette.secondary.main, 0.2),
            },
        },
        shape: {
            ...shape,
            ...theme.shape,
        },
        breakpoints: {
            values: {
                xs: 0,
                sm: 640,
                md: 768,
                lg: 992,
                xl: 1280,
                mobile: 440,
                tablet: 641,
            },
        },
        components: {
            MuiScopedCssBaseline: {
                styleOverrides: {
                    root: {
                        fontFamily: 'Inter, sans-serif',
                        ...theme.typography,
                        '@supports (font-variation-settings: normal)': {
                            fontFamily: 'Inter var, sans-serif',
                            ...theme.typography,
                        },
                    },
                },
            },
            MuiButtonBase: {
                styleOverrides: {
                    // This `css()` function invokes keyframes. `styled-components` only supports keyframes
                    // in string templates. Do not convert these styles in JS object as it will break.
                    root: (0, styles_1.css) `
            &
              .${ButtonBase_1.touchRippleClasses.ripple}.${ButtonBase_1.touchRippleClasses.rippleVisible} {
              opacity: 0.1;
              animation-name: ${enterKeyframe};
            }
          `,
                },
            },
            MuiButton: {
                defaultProps: {
                    disableElevation: true,
                },
                styleOverrides: {
                    root: {
                        borderRadius: theme.shape?.borderRadiusSecondary ?? shape.borderRadiusSecondary,
                        textTransform: 'none',
                        fontSize: '1rem',
                        [`&.Mui-disabled, &.Mui-disabled:hover`]: {
                            color: mode === 'light'
                                ? (0, styles_1.alpha)(colors_1.common.black, 0.56)
                                : (0, styles_1.alpha)(colors_1.common.white, 0.56),
                            cursor: 'not-allowed',
                            pointerEvents: 'auto',
                        },
                        [`&.${LoadingButton_1.loadingButtonClasses.loading}.Mui-disabled`]: {
                            backgroundColor: primaryMainColor,
                            color: contrastButtonColor,
                            cursor: 'auto',
                            pointerEvents: 'auto',
                        },
                        [`.${LoadingButton_1.loadingButtonClasses.loadingIndicator}`]: {
                            color: contrastButtonColor,
                        },
                        [`&.${LoadingButton_1.loadingButtonClasses.root}.${LoadingButton_1.loadingButtonClasses.loading}`]: {
                            color: 'transparent',
                        },
                    },
                    text: {
                        backgroundColor: mode === 'light'
                            ? (0, styles_1.alpha)(primaryMainColor, 0.08)
                            : (0, styles_1.alpha)(primaryMainColor, 0.42),
                        '&:hover': {
                            backgroundColor: mode === 'light'
                                ? (0, styles_1.alpha)(primaryMainColor, 0.12)
                                : (0, styles_1.alpha)(primaryMainColor, 0.56),
                        },
                        color: mode === 'light' ? primaryMainColor : contrastTextButtonColor,
                    },
                    contained: {
                        '&:hover': {
                            color: contrastButtonColor,
                        },
                    },
                    sizeMedium: {
                        padding: '10px 14px',
                        [`.${DialogActions_1.dialogActionsClasses.root} &`]: {
                            padding: '6px 12px',
                        },
                    },
                },
            },
            MuiIconButton: {
                styleOverrides: {
                    root: {
                        color: 'inherit',
                        '&:hover': {
                            color: 'inherit',
                        },
                    },
                },
            },
            MuiAvatar: {
                styleOverrides: {
                    root: {
                        height: 32,
                        width: 32,
                    },
                },
                ...theme.components?.MuiAvatar,
            },
            MuiListItemAvatar: {
                styleOverrides: {
                    root: {
                        minWidth: 48,
                    },
                },
            },
            MuiListItemText: {
                styleOverrides: {
                    primary: ({ theme }) => ({
                        fontWeight: '500',
                        fontSize: '1.125rem',
                        lineHeight: '1.2778',
                        color: theme.palette.text.primary,
                    }),
                    secondary: ({ theme }) => ({
                        fontWeight: '400',
                        fontSize: '0.75rem',
                        color: theme.palette.text.secondary,
                    }),
                },
            },
            MuiTooltip: {
                styleOverrides: {
                    tooltip: ({ theme }) => ({
                        backgroundColor: 'rgb(0 0 0 / 64%)',
                        backdropFilter: 'blur(3px)',
                        fontSize: '0.75rem',
                        padding: theme.spacing(1, 1.5),
                    }),
                    arrow: {
                        color: 'rgb(0 0 0 / 64%)',
                    },
                },
            },
        },
    });
};
exports.createTheme = createTheme;
