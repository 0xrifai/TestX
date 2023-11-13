/// <reference types="react" />
import type { TokenAmount } from '@lifi/sdk';
import type { FormTypeProps } from '../../providers';
export declare const FormPriceHelperText: React.FC<FormTypeProps>;
export declare const FormPriceHelperTextBase: React.FC<FormTypeProps & {
    isLoading?: boolean;
    tokenAddress?: string;
    token?: TokenAmount;
}>;
