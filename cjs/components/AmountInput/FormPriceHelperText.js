"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormPriceHelperTextBase = exports.FormPriceHelperText = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const react_hook_form_1 = require("react-hook-form");
const react_i18next_1 = require("react-i18next");
const hooks_1 = require("../../hooks");
const providers_1 = require("../../providers");
const utils_1 = require("../../utils");
const FormPriceHelperText = ({ formType }) => {
    const [chainId, tokenAddress] = (0, react_hook_form_1.useWatch)({
        name: [
            providers_1.FormKeyHelper.getChainKey(formType),
            providers_1.FormKeyHelper.getTokenKey(formType),
        ],
    });
    const { token, isLoading } = (0, hooks_1.useTokenAddressBalance)(chainId, tokenAddress);
    return ((0, jsx_runtime_1.jsx)(exports.FormPriceHelperTextBase, { formType: formType, isLoading: isLoading, tokenAddress: tokenAddress, token: token }));
};
exports.FormPriceHelperText = FormPriceHelperText;
const FormPriceHelperTextBase = ({ formType, isLoading, tokenAddress, token }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const amount = (0, react_hook_form_1.useWatch)({
        name: providers_1.FormKeyHelper.getAmountKey(formType),
    });
    const fromAmountTokenPrice = (0, utils_1.formatTokenPrice)(amount, token?.priceUSD);
    return ((0, jsx_runtime_1.jsxs)(material_1.FormHelperText, { component: "div", sx: { display: 'flex', justifyContent: 'space-between', margin: 0 }, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { color: fromAmountTokenPrice ? 'text.secondary' : 'grey.600', fontWeight: 400, fontSize: 12, marginLeft: 8, lineHeight: 1.3334, flex: 1, sx: {
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word',
                }, children: t(`format.currency`, {
                    value: fromAmountTokenPrice,
                }) }), isLoading && tokenAddress ? ((0, jsx_runtime_1.jsx)(material_1.Skeleton, { variant: "text", width: 48, height: 16, sx: { borderRadius: 0.25 } })) : token?.amount ? ((0, jsx_runtime_1.jsx)(material_1.Typography, { fontWeight: 400, fontSize: 12, color: "text.secondary", lineHeight: 1.3334, pl: 0.25, children: `/ ${t(`format.number`, {
                    value: (0, utils_1.formatTokenAmount)(token?.amount),
                })}` })) : null] }));
};
exports.FormPriceHelperTextBase = FormPriceHelperTextBase;
