import type { WidgetConfig } from '../../types';
import type { SettingsProps, SettingsState } from './types';
export declare const defaultConfigurableSettings: Pick<SettingsState, 'routePriority' | 'slippage' | 'gasPrice'>;
export declare const defaultSettings: SettingsProps;
export declare const useSettingsStore: import("zustand/traditional").UseBoundStoreWithEqualityFn<import("zustand").StoreApi<SettingsState>>;
export declare const setDefaultSettings: (config?: WidgetConfig) => void;
