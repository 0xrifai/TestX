"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectTokenPage = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const react_1 = require("react");
const ChainSelect_1 = require("../../components/ChainSelect");
const TokenList_1 = require("../../components/TokenList");
const hooks_1 = require("../../hooks");
const SearchTokenInput_1 = require("./SearchTokenInput");
const minTokenListHeight = 360;
const SelectTokenPage = ({ formType }) => {
    (0, hooks_1.useScrollableOverflowHidden)();
    const { navigateBack } = (0, hooks_1.useNavigateBack)();
    const headerRef = (0, react_1.useRef)(null);
    const contentHeight = (0, hooks_1.useContentHeight)();
    const [tokenListHeight, setTokenListHeight] = (0, react_1.useState)(0);
    const swapOnly = (0, hooks_1.useSwapOnly)();
    (0, react_1.useLayoutEffect)(() => {
        setTokenListHeight(Math.max(contentHeight - (headerRef.current?.offsetHeight ?? 0), minTokenListHeight));
    }, [contentHeight]);
    const hideChainSelect = swapOnly && formType === 'to';
    return ((0, jsx_runtime_1.jsxs)(material_1.Container, { disableGutters: true, children: [(0, jsx_runtime_1.jsxs)(material_1.Box, { pt: 1, pb: 2, ref: headerRef, children: [!hideChainSelect ? (0, jsx_runtime_1.jsx)(ChainSelect_1.ChainSelect, { formType: formType }) : null, (0, jsx_runtime_1.jsx)(material_1.Box, { mt: !hideChainSelect ? 2 : 0, children: (0, jsx_runtime_1.jsx)(SearchTokenInput_1.SearchTokenInput, {}) })] }), (0, jsx_runtime_1.jsx)(TokenList_1.TokenList, { height: tokenListHeight, onClick: navigateBack, formType: formType })] }));
};
exports.SelectTokenPage = SelectTokenPage;
