"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDefaultElementId = void 0;
const providers_1 = require("../providers");
const useDefaultElementId = () => {
    const { elementId } = (0, providers_1.useWidgetConfig)();
    return elementId;
};
exports.useDefaultElementId = useDefaultElementId;
