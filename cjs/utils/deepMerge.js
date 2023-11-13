"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepMerge = void 0;
const isObject = (obj) => obj && typeof obj === 'object';
const deepMerge = (...objects) => {
    return objects.reduce((prev, obj) => {
        for (const key in obj) {
            if (isObject(prev[key]) && isObject(obj[key])) {
                prev[key] = (0, exports.deepMerge)(prev[key], obj[key]);
            }
            else {
                prev[key] = obj[key];
            }
        }
        return prev;
    }, {});
};
exports.deepMerge = deepMerge;
