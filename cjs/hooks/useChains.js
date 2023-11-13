"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useChains = void 0;
const react_query_1 = require("@tanstack/react-query");
const react_1 = require("react");
const react_hook_form_1 = require("react-hook-form");
const providers_1 = require("../providers");
const stores_1 = require("../stores");
const useChains = () => {
    const { chains, keyPrefix } = (0, providers_1.useWidgetConfig)();
    const lifi = (0, providers_1.useLiFi)();
    const { getValues, setValue } = (0, react_hook_form_1.useFormContext)();
    const initializeChains = (0, stores_1.useChainOrderStore)((state) => state.initializeChains);
    const { data: availableChains, isLoading: isLoadingAvailableChains } = (0, react_query_1.useQuery)(['chains'], async () => lifi.getChains(), {
        refetchInterval: 300000,
        staleTime: 300000,
    });
    const { data: filteredChains, isLoading: isLoadingFilteredChains } = (0, react_query_1.useQuery)(['filtered-chains', availableChains?.length, keyPrefix], async () => {
        if (!availableChains) {
            return;
        }
        const filteredChains = availableChains.filter((chain) => (0, providers_1.isItemAllowed)(chain.id, chains));
        const chainOrder = initializeChains(filteredChains.map((chain) => chain.id));
        const [fromChainValue, toChainValue] = getValues([
            providers_1.FormKey.FromChain,
            providers_1.FormKey.ToChain,
        ]);
        if (!fromChainValue) {
            setValue(providers_1.FormKey.FromChain, chainOrder[0]);
        }
        if (!toChainValue) {
            setValue(providers_1.FormKey.ToChain, chainOrder[0]);
        }
        return filteredChains;
    }, {
        enabled: Boolean(availableChains),
    });
    const getChainById = (0, react_1.useCallback)((chainId) => {
        const chain = availableChains?.find((chain) => chain.id === chainId);
        // if (!chain) {
        //   throw new Error('Chain not found or chainId is invalid.');
        // }
        return chain;
    }, [availableChains]);
    return {
        chains: filteredChains,
        getChainById,
        isLoading: isLoadingAvailableChains || isLoadingFilteredChains,
    };
};
exports.useChains = useChains;
