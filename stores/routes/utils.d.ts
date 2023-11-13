import type { Process, Route } from '@lifi/sdk';
export declare const isRouteDone: (route: Route) => boolean;
export declare const isRoutePartiallyDone: (route: Route) => boolean;
export declare const isRouteRefunded: (route: Route) => boolean;
export declare const isRouteFailed: (route: Route) => boolean;
export declare const isRouteActive: (route?: Route) => boolean;
export declare const doesRouteHaveCustomTool: (route: Route) => boolean;
export declare const getUpdatedProcess: (currentRoute: Route, updatedRoute: Route) => Process | undefined;
