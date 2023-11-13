import type { PersistStoreProps } from '../types';
import type { RouteExecutionState } from './types';
export declare const createRouteExecutionStore: ({ namePrefix }: PersistStoreProps) => import("zustand/traditional").UseBoundStoreWithEqualityFn<import("zustand").StoreApi<RouteExecutionState>>;
