"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractComponent = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Card_1 = require("../Card");
const ContractComponent = ({ children, ...props }) => {
    if (!children) {
        return null;
    }
    return (0, jsx_runtime_1.jsx)(Card_1.Card, { ...props, children: children });
};
exports.ContractComponent = ContractComponent;
