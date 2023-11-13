"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Initializer = void 0;
const hooks_1 = require("../hooks");
const Initializer = () => {
    (0, hooks_1.useInitializer)();
    return null;
};
exports.Initializer = Initializer;
