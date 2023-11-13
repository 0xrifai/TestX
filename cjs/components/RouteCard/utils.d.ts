import type { Route, Token } from '@lifi/sdk';
import Big from 'big.js';
export declare const getGasCostsBreakdown: (route: Route) => {
    amount: Big;
    amountUSD: number;
    token: Token;
}[];
export declare const getFeeCostsBreakdown: (route: Route, included?: boolean) => {
    amount: Big;
    amountUSD: number;
    token: Token;
}[];
