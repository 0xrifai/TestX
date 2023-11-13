import type { EVMChain, LifiStep, Process } from '@lifi/sdk';
import type { TFunction } from 'i18next';
import type { WidgetSubvariant } from '../types';
export declare const useProcessMessage: (step?: LifiStep, process?: Process) => {
    title?: string | undefined;
    message?: string | undefined;
};
export declare function getProcessMessage(t: TFunction, getChainById: (chainId: number) => EVMChain | undefined, step: LifiStep, process: Process, subvariant?: WidgetSubvariant): {
    title?: string;
    message?: string;
};
