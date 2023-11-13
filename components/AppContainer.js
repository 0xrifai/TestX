import { jsx as _jsx } from "react/jsx-runtime";
import { Box, Container, ScopedCssBaseline } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useWidgetConfig } from '../providers';
import { ElementId, createElementId } from '../utils';
export const maxHeight = 'unset';
export const AppExpandedContainer = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'variant',
})(({ variant }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    flex: 1,
    height: variant === 'drawer' ? 'none' : maxHeight,
}));
const RelativeContainer = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'variant',
})(({ theme, variant }) => ({
    // position: 'relative',
    boxSizing: 'content-box',
    width: '100%',
    minWidth: 360,
    maxWidth: 440,
    maxHeight: variant === 'drawer' ? 'none' : maxHeight,
    background: theme.palette.background.default,
    overflow: 'auto',
    flex: 1,
    zIndex: 0,
}));
const CssBaselineContainer = styled(ScopedCssBaseline, {
    shouldForwardProp: (prop) => prop !== 'variant',
})(({ variant }) => ({
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    overflowX: 'clip',
    margin: 0,
    width: '100%',
    maxHeight: variant === 'drawer' ? 'none' : maxHeight,
    overflowY: 'auto',
    height: '100%',
    padding: '0 20px'
}));
export const FlexContainer = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
});
export const AppContainer = ({ children }) => {
    // const ref = useRef<HTMLDivElement>(null);
    const { containerStyle, variant, elementId } = useWidgetConfig();
    return (_jsx(RelativeContainer, { sx: containerStyle, variant: variant, id: createElementId(ElementId.RelativeContainer, elementId), children: _jsx(CssBaselineContainer, { id: createElementId(ElementId.ScrollableContainer, elementId), variant: variant, enableColorScheme: true, children: _jsx(FlexContainer, { disableGutters: true, children: children }) }) }));
};
