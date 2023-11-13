"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isItemAllowed = void 0;
const isItemAllowed = (itemId, items) => {
    if (items?.allow?.length) {
        return items.allow.includes(itemId);
    }
    return !items?.deny?.includes(itemId);
};
exports.isItemAllowed = isItemAllowed;
