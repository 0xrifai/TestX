"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTransactionHistory = void 0;
const shallow_1 = require("zustand/shallow");
const utils_1 = require("../../utils");
const RouteExecutionStore_1 = require("./RouteExecutionStore");
const types_1 = require("./types");
const useTransactionHistory = (address) => {
    return (0, RouteExecutionStore_1.useRouteExecutionStore)((state) => Object.values(state.routes)
        .filter((item) => item?.route.fromAddress === address &&
        (0, utils_1.hasEnumFlag)(item.status, types_1.RouteExecutionStatus.Done))
        .sort((a, b) => (b?.route.steps[0].execution?.process[0].startedAt ?? 0) -
        (a?.route.steps[0].execution?.process[0].startedAt ?? 0)), shallow_1.shallow);
};
exports.useTransactionHistory = useTransactionHistory;
