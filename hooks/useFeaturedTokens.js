import { useMemo } from 'react';
import { useWidgetConfig } from '../providers';
export const useFeaturedTokens = (selectedChainId) => {
    const { tokens } = useWidgetConfig();
    return useMemo(() => tokens?.featured?.filter((token) => token.chainId === selectedChainId), [selectedChainId, tokens?.featured]);
};
