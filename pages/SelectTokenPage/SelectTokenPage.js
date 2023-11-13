import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Container } from '@mui/material';
import { useLayoutEffect, useRef, useState } from 'react';
import { ChainSelect } from '../../components/ChainSelect';
import { TokenList } from '../../components/TokenList';
import { useContentHeight, useNavigateBack, useScrollableOverflowHidden, useSwapOnly, } from '../../hooks';
import { SearchTokenInput } from './SearchTokenInput';
const minTokenListHeight = 360;
export const SelectTokenPage = ({ formType }) => {
    useScrollableOverflowHidden();
    const { navigateBack } = useNavigateBack();
    const headerRef = useRef(null);
    const contentHeight = useContentHeight();
    const [tokenListHeight, setTokenListHeight] = useState(0);
    const swapOnly = useSwapOnly();
    useLayoutEffect(() => {
        setTokenListHeight(Math.max(contentHeight - (headerRef.current?.offsetHeight ?? 0), minTokenListHeight));
    }, [contentHeight]);
    const hideChainSelect = swapOnly && formType === 'to';
    return (_jsxs(Container, { disableGutters: true, children: [_jsxs(Box, { pt: 1, pb: 2, ref: headerRef, children: [!hideChainSelect ? _jsx(ChainSelect, { formType: formType }) : null, _jsx(Box, { mt: !hideChainSelect ? 2 : 0, children: _jsx(SearchTokenInput, {}) })] }), _jsx(TokenList, { height: tokenListHeight, onClick: navigateBack, formType: formType })] }));
};
