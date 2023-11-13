import type { SettingsState } from '.';
export declare const useSettings: <K extends keyof SettingsState>(keys: K[]) => Pick<SettingsState, K>;
