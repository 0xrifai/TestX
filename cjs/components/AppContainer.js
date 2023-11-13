"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppContainer = exports.FlexContainer = exports.AppExpandedContainer = exports.maxHeight = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const providers_1 = require("../providers");
const utils_1 = require("../utils");
exports.maxHeight = 'unset';
exports.AppExpandedContainer = (0, styles_1.styled)(material_1.Box, {
    shouldForwardProp: (prop) => prop !== 'variant',
})(({ variant }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    flex: 1,
    height: variant === 'drawer' ? 'none' : exports.maxHeight,
}));
const RelativeContainer = (0, styles_1.styled)(material_1.Box, {
    shouldForwardProp: (prop) => prop !== 'variant',
})(({ theme, variant }) => ({
    // position: 'relative',
    boxSizing: 'content-box',
    width: '100%',
    minWidth: 360,
    maxWidth: 440,
    maxHeight: variant === 'drawer' ? 'none' : exports.maxHeight,
    background: theme.palette.background.default,
    overflow: 'auto',
    flex: 1,
    zIndex: 0,
}));
const CssBaselineContainer = (0, styles_1.styled)(material_1.ScopedCssBaseline, {
    shouldForwardProp: (prop) => prop !== 'variant',
})(({ variant }) => ({
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    overflowX: 'clip',
    margin: 0,
    width: '100%',
    maxHeight: variant === 'drawer' ? 'none' : exports.maxHeight,
    overflowY: 'auto',
    height: '100%',
    padding: '0 20px'
}));
exports.FlexContainer = (0, styles_1.styled)(material_1.Container)({
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
});
const AppContainer = ({ children }) => {
    // const ref = useRef<HTMLDivElement>(null);
    const { containerStyle, variant, elementId } = (0, providers_1.useWidgetConfig)();
    return ((0, jsx_runtime_1.jsx)(RelativeContainer, { sx: containerStyle, variant: variant, id: (0, utils_1.createElementId)(utils_1.ElementId.RelativeContainer, elementId), children: (0, jsx_runtime_1.jsx)(CssBaselineContainer, { id: (0, utils_1.createElementId)(utils_1.ElementId.ScrollableContainer, elementId), variant: variant, enableColorScheme: true, children: (0, jsx_runtime_1.jsx)(exports.FlexContainer, { disableGutters: true, children: children }) }) }));
};
exports.AppContainer = AppContainer;
