import { shallow } from 'zustand/shallow';
import { useSettingsStore } from './useSettingsStore';
export const useSettings = (keys) => {
    return useSettingsStore((state) => keys.reduce((values, key) => {
        values[key] = state[key];
        return values;
    }, {}), shallow);
};
