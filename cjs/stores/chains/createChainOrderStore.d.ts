import type { PersistStoreProps } from '../types';
import type { ChainOrderState } from './types';
export declare const maxChainToOrder = 9;
export declare const createChainOrderStore: ({ namePrefix }: PersistStoreProps) => import("zustand/traditional").UseBoundStoreWithEqualityFn<import("zustand").StoreApi<ChainOrderState>>;
