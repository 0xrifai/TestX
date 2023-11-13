/// <reference types="react" />
import type { Route } from '@lifi/sdk';
import type { BoxProps } from '@mui/material';
interface GasMessageProps extends BoxProps {
    route?: Route;
}
export declare const GasMessage: React.FC<GasMessageProps>;
export {};
