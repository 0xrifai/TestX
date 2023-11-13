import type { Token } from '@lifi/sdk';
import type { BoxProps } from '@mui/material';
import type { ReactNode } from 'react';
import type { FormTypeProps } from '../../providers';
export declare const AmountInput: React.FC<FormTypeProps & BoxProps>;
export declare const AmountInputBase: React.FC<FormTypeProps & BoxProps & {
    token?: Token;
    startAdornment?: ReactNode;
    endAdornment?: ReactNode;
    bottomAdornment?: ReactNode;
    disabled?: boolean;
}>;
