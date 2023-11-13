import type { EVMChain, Route, Token } from '@lifi/sdk';
import Big from 'big.js';
export interface GasSufficiency {
    gasAmount: Big;
    tokenAmount?: Big;
    insufficientAmount?: Big;
    insufficient?: boolean;
    token: Token;
    chain?: EVMChain;
}
export declare const useGasSufficiency: (route?: Route) => {
    insufficientGas: GasSufficiency[] | undefined;
    isInitialLoading: boolean;
};
