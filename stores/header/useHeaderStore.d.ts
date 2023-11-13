/// <reference types="react" />
import type { PersistStoreProps, PersistStoreProviderProps } from '../types';
import type { HeaderState, HeaderStore } from './types';
export declare const HeaderStoreContext: import("react").Context<HeaderStore | null>;
export declare function HeaderStoreProvider({ children, ...props }: PersistStoreProviderProps): import("react/jsx-runtime").JSX.Element;
export declare function useHeaderStore<T>(selector: (state: HeaderState) => T, equalityFn?: (left: T, right: T) => boolean): T;
export declare function useHeaderStoreContext(): HeaderStore;
export declare const createHeaderStore: ({ namePrefix }: PersistStoreProps) => import("zustand/traditional").UseBoundStoreWithEqualityFn<import("zustand").StoreApi<HeaderState>>;
