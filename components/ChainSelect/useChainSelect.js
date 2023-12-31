import { useController, useFormContext } from 'react-hook-form';
import { useChains, useSwapOnly } from '../../hooks';
import { FormKey, FormKeyHelper } from '../../providers';
import { useChainOrder } from '../../stores';
export const useChainSelect = (formType) => {
    const chainKey = FormKeyHelper.getChainKey(formType);
    const { field: { onChange, onBlur }, } = useController({ name: chainKey });
    const { setValue } = useFormContext();
    const { chains, isLoading } = useChains();
    const [chainOrder, setChainOrder] = useChainOrder();
    const swapOnly = useSwapOnly();
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
            setValue(FormKeyHelper.getChainKey('to'), chainId, {
                shouldTouch: true,
            });
        }
        setValue(FormKeyHelper.getTokenKey(formType), '');
        setValue(FormKeyHelper.getAmountKey(formType), '');
        setValue(FormKey.TokenSearchFilter, '');
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
