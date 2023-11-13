"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const react_1 = require("react");
const theme_1 = require("../../config/theme");
const stores_1 = require("../../stores");
const WidgetProvider_1 = require("../WidgetProvider");
const ThemeProvider = ({ children, }) => {
    const { appearance: colorSchemeMode, theme: themeConfig } = (0, WidgetProvider_1.useWidgetConfig)();
    const prefersDarkMode = (0, material_1.useMediaQuery)('(prefers-color-scheme: dark)');
    const [appearance, setAppearance] = (0, stores_1.useAppearance)();
    const [mode, setMode] = (0, react_1.useState)(colorSchemeMode ?? appearance === 'auto'
        ? prefersDarkMode
            ? 'dark'
            : 'light'
        : appearance);
    (0, react_1.useEffect)(() => {
        if (appearance === 'auto') {
            setMode(prefersDarkMode ? 'dark' : 'light');
        }
        else {
            setMode(appearance);
        }
    }, [appearance, prefersDarkMode]);
    (0, react_1.useEffect)(() => {
        if (colorSchemeMode) {
            setAppearance(colorSchemeMode);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [colorSchemeMode]);
    const theme = (0, react_1.useMemo)(() => (0, theme_1.createTheme)(mode, themeConfig), [mode, themeConfig]);
    return (0, jsx_runtime_1.jsx)(styles_1.ThemeProvider, { theme: theme, children: children });
};
exports.ThemeProvider = ThemeProvider;
