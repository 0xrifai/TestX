"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useScrollableOverflowHidden = exports.useScrollableContainer = exports.useGetScrollableContainer = exports.getScrollableContainer = void 0;
const react_1 = require("react");
const utils_1 = require("../utils");
const useDefaultElementId_1 = require("./useDefaultElementId");
const getScrollableContainer = (elementId) => document.getElementById((0, utils_1.createElementId)(utils_1.ElementId.ScrollableContainer, elementId));
exports.getScrollableContainer = getScrollableContainer;
const useGetScrollableContainer = () => {
    const elementId = (0, useDefaultElementId_1.useDefaultElementId)();
    const getContainer = (0, react_1.useCallback)(() => (0, exports.getScrollableContainer)(elementId), [elementId]);
    return getContainer;
};
exports.useGetScrollableContainer = useGetScrollableContainer;
const useScrollableContainer = (elementId) => {
    const [containerElement, setContainerElement] = (0, react_1.useState)(() => (0, exports.getScrollableContainer)(elementId));
    (0, react_1.useLayoutEffect)(() => {
        if (!containerElement) {
            setContainerElement((0, exports.getScrollableContainer)(elementId));
        }
    }, [containerElement, elementId]);
    return containerElement;
};
exports.useScrollableContainer = useScrollableContainer;
const useScrollableOverflowHidden = () => {
    const elementId = (0, useDefaultElementId_1.useDefaultElementId)();
    (0, react_1.useLayoutEffect)(() => {
        const element = (0, exports.getScrollableContainer)(elementId);
        if (element) {
            element.style.overflowY = 'hidden';
        }
        return () => {
            if (element) {
                element.style.overflowY = 'auto';
            }
        };
    }, [elementId]);
};
exports.useScrollableOverflowHidden = useScrollableOverflowHidden;
