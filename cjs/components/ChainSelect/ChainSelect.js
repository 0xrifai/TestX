"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainSelect = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const react_hook_form_1 = require("react-hook-form");
const react_router_dom_1 = require("react-router-dom");
const providers_1 = require("../../providers");
const stores_1 = require("../../stores");
const utils_1 = require("../../utils");
const ChainSelect_style_1 = require("./ChainSelect.style");
const useChainSelect_1 = require("./useChainSelect");
const ChainSelect = ({ formType }) => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { chainOrder, chains, getChains, isLoading, setChainOrder, setCurrentChain, } = (0, useChainSelect_1.useChainSelect)(formType);
    const [chainId] = (0, react_hook_form_1.useWatch)({
        name: [providers_1.FormKeyHelper.getChainKey(formType)],
    });
    const hasChainInOrderedList = chainOrder.includes(chainId);
    // If we don't have a chain in the ordered chain list we should add it.
    if (!hasChainInOrderedList) {
        setChainOrder(chainId);
    }
    const showAllChains = () => {
        navigate(utils_1.navigationRoutes[`${formType}Chain`]);
    };
    const chainsToHide = (chains?.length ?? 0) - stores_1.maxChainToOrder;
    return ((0, jsx_runtime_1.jsxs)(ChainSelect_style_1.ChainContainer, { children: [isLoading
                ? Array.from({ length: stores_1.maxChainToOrder + 1 }).map((_, index) => ((0, jsx_runtime_1.jsx)(material_1.Skeleton, { variant: "rectangular", width: 56, height: 56, sx: { borderRadius: 1 } }, index)))
                : getChains().map((chain) => ((0, jsx_runtime_1.jsx)(material_1.Tooltip, { title: chain.name, placement: "top", enterDelay: 400, arrow: true, children: (0, jsx_runtime_1.jsx)(ChainSelect_style_1.ChainCard, { onClick: () => setCurrentChain(chain.id), variant: chainId === chain.id ? 'selected' : 'default', children: (0, jsx_runtime_1.jsx)(material_1.Avatar, { src: chain.logoURI, alt: chain.key, sx: { width: 40, height: 40 }, children: chain.name[0] }) }) }, chain.id))), chainsToHide > 0 ? ((0, jsx_runtime_1.jsx)(ChainSelect_style_1.ChainCard, { onClick: showAllChains, children: (0, jsx_runtime_1.jsx)(material_1.Box, { sx: {
                        width: 40,
                        height: 40,
                        display: 'grid',
                        placeItems: 'center',
                    }, children: (0, jsx_runtime_1.jsxs)(material_1.Typography, { fontWeight: 500, children: ["+", chainsToHide] }) }) })) : null] }));
};
exports.ChainSelect = ChainSelect;
