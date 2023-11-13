"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useExecutingRoutesIds = void 0;
const shallow_1 = require("zustand/shallow");
const RouteExecutionStore_1 = require("./RouteExecutionStore");
const types_1 = require("./types");
const useExecutingRoutesIds = (address) => {
    return (0, RouteExecutionStore_1.useRouteExecutionStore)((state) => Object.values(state.routes)
        .filter((item) => item.route.fromAddress === address &&
        (item.status === types_1.RouteExecutionStatus.Pending ||
            item.status === types_1.RouteExecutionStatus.Failed))
        .sort((a, b) => (b?.route.steps[0].execution?.process[0].startedAt ?? 0) -
        (a?.route.steps[0].execution?.process[0].startedAt ?? 0))
        .map(({ route }) => route.id), shallow_1.shallow);
};
exports.useExecutingRoutesIds = useExecutingRoutesIds;
