"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSetExecutableRoute = void 0;
const RouteExecutionStore_1 = require("./RouteExecutionStore");
const useSetExecutableRoute = () => {
    return (0, RouteExecutionStore_1.useRouteExecutionStore)((state) => state.setExecutableRoute);
};
exports.useSetExecutableRoute = useSetExecutableRoute;
