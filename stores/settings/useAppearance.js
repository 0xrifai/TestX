import { shallow } from 'zustand/shallow';
import { useSettingsStore } from './useSettingsStore';
export const useAppearance = () => {
    const [appearance, setValue] = useSettingsStore((state) => [state.appearance, state.setValue], shallow);
    const setAppearance = (appearance) => {
        setValue('appearance', appearance);
    };
    return [appearance, setAppearance];
};
