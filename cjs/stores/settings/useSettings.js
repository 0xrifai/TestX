"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSettings = void 0;
const shallow_1 = require("zustand/shallow");
const useSettingsStore_1 = require("./useSettingsStore");
const useSettings = (keys) => {
    return (0, useSettingsStore_1.useSettingsStore)((state) => keys.reduce((values, key) => {
        values[key] = state[key];
        return values;
    }, {}), shallow_1.shallow);
};
exports.useSettings = useSettings;
