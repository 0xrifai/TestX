"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRouteExecution = void 0;
const react_query_1 = require("@tanstack/react-query");
const react_1 = require("react");
const shallow_1 = require("zustand/shallow");
const providers_1 = require("../providers");
const stores_1 = require("../stores");
const events_1 = require("../types/events");
const useWidgetEvents_1 = require("./useWidgetEvents");
const useRouteExecution = ({ routeId, executeInBackground, onAcceptExchangeRateUpdate, }) => {
    const lifi = (0, providers_1.useLiFi)();
    const queryClient = (0, react_query_1.useQueryClient)();
    const { account, switchChain } = (0, providers_1.useWallet)();
    const resumedAfterMount = (0, react_1.useRef)(false);
    const emitter = (0, useWidgetEvents_1.useWidgetEvents)();
    const routeExecutionStoreContext = (0, stores_1.useRouteExecutionStoreContext)();
    const routeExecution = (0, stores_1.useRouteExecutionStore)((state) => state.routes[routeId]);
    const [updateRoute, restartRoute, deleteRoute] = (0, stores_1.useRouteExecutionStore)((state) => [state.updateRoute, state.restartRoute, state.deleteRoute], shallow_1.shallow);
    const updateRouteHook = (updatedRoute) => {
        const routeExecution = routeExecutionStoreContext.getState().routes[updatedRoute.id];
        if (!routeExecution) {
            return;
        }
        const clonedUpdatedRoute = structuredClone(updatedRoute);
        updateRoute(clonedUpdatedRoute);
        const process = (0, stores_1.getUpdatedProcess)(routeExecution.route, clonedUpdatedRoute);
        if (process) {
            emitter.emit(events_1.WidgetEvent.RouteExecutionUpdated, {
                route: clonedUpdatedRoute,
                process,
            });
        }
        if ((0, stores_1.isRouteDone)(clonedUpdatedRoute)) {
            emitter.emit(events_1.WidgetEvent.RouteExecutionCompleted, clonedUpdatedRoute);
        }
        if ((0, stores_1.isRouteFailed)(clonedUpdatedRoute) && process) {
            emitter.emit(events_1.WidgetEvent.RouteExecutionFailed, {
                route: clonedUpdatedRoute,
                process,
            });
        }
        console.log('Route updated.', clonedUpdatedRoute);
    };
    const switchChainHook = async (requiredChainId) => {
        if (!account.isActive || !account.signer) {
            return account.signer;
        }
        const currentChainId = await account.signer.getChainId();
        if (currentChainId !== requiredChainId) {
            const signer = await switchChain(requiredChainId);
            if (!signer) {
                throw new Error('Chain was not switched.');
            }
            return signer;
        }
        return account.signer;
    };
    const acceptExchangeRateUpdateHook = async (params) => {
        if (!onAcceptExchangeRateUpdate) {
            return false;
        }
        const accepted = await new Promise((resolve) => onAcceptExchangeRateUpdate(resolve, params));
        return accepted;
    };
    const executeRouteMutation = (0, react_query_1.useMutation)(() => {
        if (!account.signer) {
            throw Error('Account signer not found.');
        }
        if (!routeExecution?.route) {
            throw Error('Execution route not found.');
        }
        queryClient.removeQueries(['routes'], { exact: false });
        return lifi.executeRoute(account.signer, routeExecution.route, {
            updateRouteHook,
            switchChainHook,
            acceptExchangeRateUpdateHook,
            infiniteApproval: false,
            executeInBackground,
        });
    }, {
        onMutate: () => {
            console.log('Execution started.', routeId);
            if (routeExecution) {
                emitter.emit(events_1.WidgetEvent.RouteExecutionStarted, routeExecution.route);
            }
        },
    });
    const resumeRouteMutation = (0, react_query_1.useMutation)((resumedRoute) => {
        if (!account.signer) {
            throw Error('Account signer not found.');
        }
        if (!routeExecution?.route) {
            throw Error('Execution route not found.');
        }
        return lifi.resumeRoute(account.signer, resumedRoute ?? routeExecution.route, {
            updateRouteHook,
            switchChainHook,
            acceptExchangeRateUpdateHook,
            infiniteApproval: false,
            executeInBackground,
        });
    }, {
        onMutate: () => {
            console.log('Resumed to execution.', routeId);
        },
    });
    const executeRoute = (0, react_1.useCallback)(() => {
        executeRouteMutation.mutateAsync(undefined, {
            onError: (error) => {
                console.warn('Execution failed!', routeId, error);
            },
            onSuccess: (route) => {
                console.log('Executed successfully!', route);
            },
        });
    }, [executeRouteMutation, routeId]);
    const resumeRoute = (0, react_1.useCallback)((route) => {
        resumeRouteMutation.mutateAsync(route, {
            onError: (error) => {
                console.warn('Resumed execution failed.', routeId, error);
            },
            onSuccess: (route) => {
                console.log('Resumed execution successful.', route);
            },
        });
    }, [resumeRouteMutation, routeId]);
    const restartRouteMutation = (0, react_1.useCallback)(() => {
        restartRoute(routeId);
        resumeRoute(routeExecution?.route);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [resumeRoute, routeExecution?.route, routeId]);
    const deleteRouteMutation = (0, react_1.useCallback)(() => {
        deleteRoute(routeId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [routeId]);
    // Resume route execution after page reload
    (0, react_1.useEffect)(() => {
        // Check if route is eligible for automatic resuming
        if ((0, stores_1.isRouteActive)(routeExecution?.route) &&
            account.isActive &&
            !resumedAfterMount.current) {
            resumedAfterMount.current = true;
            resumeRoute();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [account.isActive]);
    (0, react_1.useEffect)(() => {
        return () => {
            const route = routeExecutionStoreContext.getState().routes[routeId]?.route;
            if (!route || !(0, stores_1.isRouteActive)(route)) {
                return;
            }
            lifi.updateRouteExecution(route, { executeInBackground: true });
            console.log('Move route execution to background.', routeId);
            resumedAfterMount.current = false;
        };
    }, [lifi, routeExecutionStoreContext, routeId]);
    return {
        executeRoute,
        restartRoute: restartRouteMutation,
        deleteRoute: deleteRouteMutation,
        route: routeExecution?.route,
        status: routeExecution?.status,
    };
};
exports.useRouteExecution = useRouteExecution;
