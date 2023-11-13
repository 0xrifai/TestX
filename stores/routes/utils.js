import microdiff from 'microdiff';
export const isRouteDone = (route) => {
    return route.steps.every((step) => step.execution?.status === 'DONE');
};
export const isRoutePartiallyDone = (route) => {
    return route.steps.some((step) => step.execution?.process.some((process) => process.substatus === 'PARTIAL'));
};
export const isRouteRefunded = (route) => {
    return route.steps.some((step) => step.execution?.process.some((process) => process.substatus === 'REFUNDED'));
};
export const isRouteFailed = (route) => {
    return route.steps.some((step) => step.execution?.status === 'FAILED');
};
export const isRouteActive = (route) => {
    if (!route) {
        return false;
    }
    const isDone = isRouteDone(route);
    const isFailed = isRouteFailed(route);
    const alreadyStarted = route.steps.some((step) => step.execution);
    return !isDone && !isFailed && alreadyStarted;
};
export const doesRouteHaveCustomTool = (route) => {
    return route.steps.some((step) => step.tool === 'custom' || step.toolDetails.key === 'custom');
};
export const getUpdatedProcess = (currentRoute, updatedRoute) => {
    const processDiff = microdiff(currentRoute, updatedRoute).find((diff) => diff.path.includes('process'));
    if (!processDiff) {
        return undefined;
    }
    // e.g. ['steps', 0, 'execution', 'process', 0]
    const process = processDiff.path
        .slice(0, processDiff.path.findIndex((path) => path === 'process') + 2)
        .reduce((obj, path) => obj[path], updatedRoute);
    return process;
};
