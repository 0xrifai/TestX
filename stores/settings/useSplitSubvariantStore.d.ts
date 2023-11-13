/// <reference types="react" />
import type { SplitSubvariantProps, SplitSubvariantProviderProps, SplitSubvariantState, SplitSubvariantStore } from './types';
export declare const SplitSubvariantStoreContext: import("react").Context<SplitSubvariantStore | null>;
export declare function SplitSubvariantStoreProvider({ children, ...props }: SplitSubvariantProviderProps): import("react/jsx-runtime").JSX.Element;
export declare function useSplitSubvariantStore<T>(selector: (state: SplitSubvariantState) => T, equalityFn?: (left: T, right: T) => boolean): T;
export declare function useSplitSubvariantStoreContext(): SplitSubvariantStore;
export declare const createSplitSubvariantStore: ({ state }: SplitSubvariantProps) => import("zustand/traditional").UseBoundStoreWithEqualityFn<import("zustand").StoreApi<SplitSubvariantState>>;
