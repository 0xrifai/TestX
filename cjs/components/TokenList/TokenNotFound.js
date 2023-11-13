"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenNotFound = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const SearchOff_1 = require("@mui/icons-material/SearchOff");
const material_1 = require("@mui/material");
const react_hook_form_1 = require("react-hook-form");
const react_i18next_1 = require("react-i18next");
const hooks_1 = require("../../hooks");
const providers_1 = require("../../providers");
const TokenNotFound = ({ formType }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [selectedChainId] = (0, react_hook_form_1.useWatch)({
        name: [providers_1.FormKeyHelper.getChainKey(formType)],
    });
    const { getChainById } = (0, hooks_1.useChains)();
    return ((0, jsx_runtime_1.jsxs)(material_1.Box, { sx: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            flex: 1,
            padding: 3,
        }, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { fontSize: 48, lineHeight: 1, children: (0, jsx_runtime_1.jsx)(SearchOff_1.default, { fontSize: "inherit" }) }), (0, jsx_runtime_1.jsx)(material_1.Typography, { fontSize: 14, color: "text.secondary", textAlign: "center", mt: 2, px: 2, children: t('info.message.emptyTokenList', {
                    chainName: getChainById(selectedChainId)?.name,
                }) })] }));
};
exports.TokenNotFound = TokenNotFound;
