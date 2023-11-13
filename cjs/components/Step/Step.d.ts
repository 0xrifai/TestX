/// <reference types="react" />
import type { LifiStep, TokenAmount } from '@lifi/sdk';
export declare const Step: React.FC<{
    step: LifiStep;
    fromToken?: TokenAmount;
    toToken?: TokenAmount;
    toAddress?: string;
}>;
