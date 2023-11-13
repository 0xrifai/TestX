"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainGasMessage = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const GasMessage_1 = require("../../components/GasMessage");
const hooks_1 = require("../../hooks");
const MainGasMessage = (props) => {
    const { routes } = (0, hooks_1.useRoutes)();
    const currentRoute = routes?.[0];
    return (0, jsx_runtime_1.jsx)(GasMessage_1.GasMessage, { route: currentRoute, ...props });
};
exports.MainGasMessage = MainGasMessage;
