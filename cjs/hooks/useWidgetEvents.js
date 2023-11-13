"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWidgetEvents = exports.widgetEvents = void 0;
const mitt_1 = require("mitt");
exports.widgetEvents = (0, mitt_1.default)();
const useWidgetEvents = () => {
    return exports.widgetEvents;
};
exports.useWidgetEvents = useWidgetEvents;
