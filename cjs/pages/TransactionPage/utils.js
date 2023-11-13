"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcValueLoss = void 0;
const calcValueLoss = (route) => {
    return `${((Number(route.toAmountUSD || 0) /
        (Number(route.fromAmountUSD || 0) + Number(route.gasCostUSD || 0)) -
        1) *
        100).toFixed(2)}%`;
};
exports.calcValueLoss = calcValueLoss;
