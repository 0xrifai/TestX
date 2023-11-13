"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSwapOnly = void 0;
const stores_1 = require("../stores");
const useSwapOnly = () => {
    const state = (0, stores_1.useSplitSubvariantStore)((state) => state.state);
    return state === 'swap';
};
exports.useSwapOnly = useSwapOnly;
