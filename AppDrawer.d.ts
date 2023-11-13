/// <reference types="react" />
import type { WidgetConfig, WidgetSubvariant } from './types';
export interface WidgetDrawer {
    isOpen(): void;
    toggleDrawer(): void;
    openDrawer(): void;
    closeDrawer(): void;
}
export declare const AppDrawer: import("react").ForwardRefExoticComponent<import("./types").WidgetDrawerProps & WidgetConfig & import("./types").WidgetConfigPartialProps & import("react").RefAttributes<WidgetDrawer>>;
export declare const DrawerButtonText: ({ open, subvariant, }: {
    open: boolean;
    subvariant?: WidgetSubvariant | undefined;
}) => import("react/jsx-runtime").JSX.Element;
