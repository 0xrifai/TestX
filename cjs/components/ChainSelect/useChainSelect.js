"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useChainSelect = void 0;
const react_hook_form_1 = require("react-hook-form");
const hooks_1 = require("../../hooks");
const providers_1 = require("../../providers");
const stores_1 = require("../../stores");
const useChainSelect = (formType) => {
    const chainKey = providers_1.FormKeyHelper.getChainKey(formType);
    const { field: { onChange, onBlur }, } = (0, react_hook_form_1.useController)({ name: chainKey });
    const { setValue } = (0, react_hook_form_1.useFormContext)();
    const { chains, isLoading } = (0, hooks_1.useChains)();
    const [chainOrder, setChainOrder] = (0, stores_1.useChainOrder)();
    const swapOnly = (0, hooks_1.useSwapOnly)();
    const getChains = () => {
        if (!chains) {
            return [];
        }
        const selectedChains = chainOrder
            .map((chainId) => chains.find((chain) => chain.id === chainId))
            .filter(Boolean);
        return selectedChains;
    };
    const setCurrentChain = (chainId) => {
        onChange(chainId);
        onBlur();
        if (swapOnly) {
            setValue(providers_1.FormKeyHelper.getChainKey('to'), chainId, {
                shouldTouch: true,
            });
        }
        setValue(providers_1.FormKeyHelper.getTokenKey(formType), '');
        setValue(providers_1.FormKeyHelper.getAmountKey(formType), '');
        setValue(providers_1.FormKey.TokenSearchFilter, '');
        setChainOrder(chainId);
    };
    return {
        chainOrder,
        chains,
        getChains,
        isLoading,
        setChainOrder,
        setCurrentChain,
    };
};
exports.useChainSelect = useChainSelect;
