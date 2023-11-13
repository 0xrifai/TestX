"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAppearance = void 0;
const shallow_1 = require("zustand/shallow");
const useSettingsStore_1 = require("./useSettingsStore");
const useAppearance = () => {
    const [appearance, setValue] = (0, useSettingsStore_1.useSettingsStore)((state) => [state.appearance, state.setValue], shallow_1.shallow);
    const setAppearance = (appearance) => {
        setValue('appearance', appearance);
    };
    return [appearance, setAppearance];
};
exports.useAppearance = useAppearance;
