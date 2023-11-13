import { shallow } from 'zustand/shallow';
import { useChainOrderStore } from './ChainOrderStore';
export const useChainOrder = () => {
    return useChainOrderStore((state) => [state.chainOrder, state.setChain], shallow);
};
