/// <reference types="react" />
import type { Route } from '@lifi/sdk';
import type { BottomSheetBase } from '../../components/BottomSheet';
interface TokenValueBottomSheetProps {
    route: Route;
    onContinue(): void;
    onCancel?(): void;
}
export declare const TokenValueBottomSheet: import("react").ForwardRefExoticComponent<TokenValueBottomSheetProps & import("react").RefAttributes<BottomSheetBase>>;
export declare const getTokenValueLossThreshold: (route?: Route) => boolean;
export {};
