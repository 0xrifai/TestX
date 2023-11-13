"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUpdatedProcess = exports.doesRouteHaveCustomTool = exports.isRouteActive = exports.isRouteFailed = exports.isRouteRefunded = exports.isRoutePartiallyDone = exports.isRouteDone = void 0;
const microdiff_1 = require("microdiff");
const isRouteDone = (route) => {
    return route.steps.every((step) => step.execution?.status === 'DONE');
};
exports.isRouteDone = isRouteDone;
const isRoutePartiallyDone = (route) => {
    return route.steps.some((step) => step.execution?.process.some((process) => process.substatus === 'PARTIAL'));
};
exports.isRoutePartiallyDone = isRoutePartiallyDone;
const isRouteRefunded = (route) => {
    return route.steps.some((step) => step.execution?.process.some((process) => process.substatus === 'REFUNDED'));
};
exports.isRouteRefunded = isRouteRefunded;
const isRouteFailed = (route) => {
    return route.steps.some((step) => step.execution?.status === 'FAILED');
};
exports.isRouteFailed = isRouteFailed;
const isRouteActive = (route) => {
    if (!route) {
        return false;
    }
    const isDone = (0, exports.isRouteDone)(route);
    const isFailed = (0, exports.isRouteFailed)(route);
    const alreadyStarted = route.steps.some((step) => step.execution);
    return !isDone && !isFailed && alreadyStarted;
};
exports.isRouteActive = isRouteActive;
const doesRouteHaveCustomTool = (route) => {
    return route.steps.some((step) => step.tool === 'custom' || step.toolDetails.key === 'custom');
};
exports.doesRouteHaveCustomTool = doesRouteHaveCustomTool;
const getUpdatedProcess = (currentRoute, updatedRoute) => {
    const processDiff = (0, microdiff_1.default)(currentRoute, updatedRoute).find((diff) => diff.path.includes('process'));
    if (!processDiff) {
        return undefined;
    }
    // e.g. ['steps', 0, 'execution', 'process', 0]
    const process = processDiff.path
        .slice(0, processDiff.path.findIndex((path) => path === 'process') + 2)
        .reduce((obj, path) => obj[path], updatedRoute);
    return process;
};
exports.getUpdatedProcess = getUpdatedProcess;
