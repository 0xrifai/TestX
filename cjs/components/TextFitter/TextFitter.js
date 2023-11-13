"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextFitter = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const react_1 = require("react");
const react_intersection_observer_1 = require("react-intersection-observer");
const initialState = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
};
const TextFitter = ({ children, width = '100%', height, maxHeight, preserveAspectRatio = 'xMinYMid meet', textStyle, svgStyle, cropTop, cropBottom, onFit, }) => {
    const theme = (0, styles_1.useTheme)();
    const textRef = (0, react_1.useRef)(null);
    const [viewBox, setViewBox] = (0, react_1.useState)(initialState);
    const [ref] = (0, react_intersection_observer_1.useInView)({
        onChange(inView) {
            if (inView) {
                calculateBox();
            }
        },
    });
    const calculateBox = (0, react_1.useCallback)(() => {
        if (!textRef.current) {
            return;
        }
        const box = textRef.current.getBBox();
        if (cropTop) {
            box.y += box.height * cropTop;
            box.height -= box.height * cropTop;
        }
        if (cropBottom) {
            box.height -= box.height * cropBottom;
        }
        setViewBox(box);
        onFit?.();
    }, [cropBottom, cropTop, onFit]);
    (0, react_1.useLayoutEffect)(() => {
        calculateBox();
    }, [calculateBox, children]);
    (0, react_1.useLayoutEffect)(() => {
        if (document.fonts) {
            document.fonts.ready.then(() => {
                calculateBox();
            });
        }
    }, [calculateBox]);
    return ((0, jsx_runtime_1.jsx)("svg", { style: svgStyle, viewBox: `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`, width: width, height: height, 
        // height={
        //   textRect.height && maxHeight && textRect.height >= maxHeight
        //     ? maxHeight
        //     : height
        // }
        preserveAspectRatio: preserveAspectRatio, fill: theme.palette.text.primary, ref: ref, children: (0, jsx_runtime_1.jsx)("text", { x: 0, y: 0, style: textStyle, ref: textRef, children: children }) }));
};
exports.TextFitter = TextFitter;
