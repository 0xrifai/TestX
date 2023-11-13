"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSetContentHeight = exports.useContentHeight = void 0;
const react_1 = require("react");
const utils_1 = require("../utils");
const useDefaultElementId_1 = require("./useDefaultElementId");
const useScrollableContainer_1 = require("./useScrollableContainer");
const getContentHeight = (elementId) => {
    const containerElement = document.getElementById((0, utils_1.createElementId)(utils_1.ElementId.ScrollableContainer, elementId));
    const headerElement = document.getElementById((0, utils_1.createElementId)(utils_1.ElementId.Header, elementId));
    if (!containerElement || !headerElement) {
        console.warn(`Can't find ${utils_1.ElementId.ScrollableContainer} or ${utils_1.ElementId.Header} id.`);
        return 0;
    }
    const { height: containerHeight } = containerElement.getBoundingClientRect();
    const { height: headerHeight } = headerElement.getBoundingClientRect();
    return containerHeight - headerHeight;
};
const useContentHeight = () => {
    const elementId = (0, useDefaultElementId_1.useDefaultElementId)();
    const [contentHeight, setContentHeight] = (0, react_1.useState)(0);
    (0, react_1.useLayoutEffect)(() => {
        setContentHeight(getContentHeight(elementId));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return contentHeight;
};
exports.useContentHeight = useContentHeight;
const useSetContentHeight = (ref) => {
    const elementId = (0, useDefaultElementId_1.useDefaultElementId)();
    (0, react_1.useLayoutEffect)(() => {
        const scrollableContainer = (0, useScrollableContainer_1.getScrollableContainer)(elementId);
        if (!scrollableContainer ||
            !ref.current ||
            ref.current?.clientHeight <= scrollableContainer?.clientHeight) {
            return;
        }
        scrollableContainer.style.height = `${ref.current.clientHeight}px`;
        return () => {
            scrollableContainer.style.removeProperty('height');
        };
    }, [elementId, ref]);
};
exports.useSetContentHeight = useSetContentHeight;
