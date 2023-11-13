import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Avatar, Box, Skeleton, Tooltip, Typography } from '@mui/material';
import { useWatch } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FormKeyHelper } from '../../providers';
import { maxChainToOrder } from '../../stores';
import { navigationRoutes } from '../../utils';
import { ChainCard, ChainContainer } from './ChainSelect.style';
import { useChainSelect } from './useChainSelect';
export const ChainSelect = ({ formType }) => {
    const navigate = useNavigate();
    const { chainOrder, chains, getChains, isLoading, setChainOrder, setCurrentChain, } = useChainSelect(formType);
    const [chainId] = useWatch({
        name: [FormKeyHelper.getChainKey(formType)],
    });
    const hasChainInOrderedList = chainOrder.includes(chainId);
    // If we don't have a chain in the ordered chain list we should add it.
    if (!hasChainInOrderedList) {
        setChainOrder(chainId);
    }
    const showAllChains = () => {
        navigate(navigationRoutes[`${formType}Chain`]);
    };
    const chainsToHide = (chains?.length ?? 0) - maxChainToOrder;
    return (_jsxs(ChainContainer, { children: [isLoading
                ? Array.from({ length: maxChainToOrder + 1 }).map((_, index) => (_jsx(Skeleton, { variant: "rectangular", width: 56, height: 56, sx: { borderRadius: 1 } }, index)))
                : getChains().map((chain) => (_jsx(Tooltip, { title: chain.name, placement: "top", enterDelay: 400, arrow: true, children: _jsx(ChainCard, { onClick: () => setCurrentChain(chain.id), variant: chainId === chain.id ? 'selected' : 'default', children: _jsx(Avatar, { src: chain.logoURI, alt: chain.key, sx: { width: 40, height: 40 }, children: chain.name[0] }) }) }, chain.id))), chainsToHide > 0 ? (_jsx(ChainCard, { onClick: showAllChains, children: _jsx(Box, { sx: {
                        width: 40,
                        height: 40,
                        display: 'grid',
                        placeItems: 'center',
                    }, children: _jsxs(Typography, { fontWeight: 500, children: ["+", chainsToHide] }) }) })) : null] }));
};
