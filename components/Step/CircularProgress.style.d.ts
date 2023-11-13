/// <reference types="react" />
import type { Status, Substatus } from '@lifi/sdk';
import type { Theme } from '@mui/material';
export declare const CircularIcon: import("@emotion/styled").StyledComponent<import("@mui/system").BoxOwnProps<Theme> & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: import("react").RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void) | null | undefined;
}, keyof import("@mui/system").BoxOwnProps<Theme>> & import("@mui/system").MUIStyledCommonProps<Theme> & {
    status: Status;
    substatus?: Substatus | undefined;
}, {}, {}>;
export declare const CircularProgressPending: import("@emotion/styled").StyledComponent<import("@mui/material").CircularProgressProps & import("@mui/system").MUIStyledCommonProps<Theme>, {}, {}>;
