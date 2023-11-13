"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useChainOrder = void 0;
const shallow_1 = require("zustand/shallow");
const ChainOrderStore_1 = require("./ChainOrderStore");
const useChainOrder = () => {
    return (0, ChainOrderStore_1.useChainOrderStore)((state) => [state.chainOrder, state.setChain], shallow_1.shallow);
};
exports.useChainOrder = useChainOrder;
