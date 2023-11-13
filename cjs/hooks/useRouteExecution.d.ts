import type { ExchangeRateUpdateParams, Route } from '@lifi/sdk';
interface RouteExecutionProps {
    routeId: string;
    executeInBackground?: boolean;
    onAcceptExchangeRateUpdate?(resolver: (value: boolean) => void, data: ExchangeRateUpdateParams): void;
}
export declare const useRouteExecution: ({ routeId, executeInBackground, onAcceptExchangeRateUpdate, }: RouteExecutionProps) => {
    executeRoute: () => void;
    restartRoute: () => void;
    deleteRoute: () => void;
    route: Route | undefined;
    status: import("../stores").RouteExecutionStatus | undefined;
};
export {};
