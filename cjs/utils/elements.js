"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createElementId = exports.ElementId = void 0;
var ElementId;
(function (ElementId) {
    ElementId["AppExpandedContainer"] = "widget-app-expanded-container";
    ElementId["Header"] = "widget-header";
    ElementId["RelativeContainer"] = "widget-relative-container";
    ElementId["ScrollableContainer"] = "widget-scrollable-container";
})(ElementId || (exports.ElementId = ElementId = {}));
const createElementId = (ElementId, elementId) => elementId ? `${ElementId}-${elementId}` : ElementId;
exports.createElementId = createElementId;
