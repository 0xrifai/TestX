"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmountInputStartAdornment = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_hook_form_1 = require("react-hook-form");
const hooks_1 = require("../../hooks");
const providers_1 = require("../../providers");
const TokenAvatar_1 = require("../TokenAvatar");
const AmountInputStartAdornment = ({ formType, }) => {
    const [chainId, tokenAddress] = (0, react_hook_form_1.useWatch)({
        name: [
            providers_1.FormKeyHelper.getChainKey(formType),
            providers_1.FormKeyHelper.getTokenKey(formType),
        ],
    });
    const { chain } = (0, hooks_1.useChain)(chainId);
    const { token } = (0, hooks_1.useToken)(chainId, tokenAddress);
    const isSelected = !!(chain && token);
    return isSelected ? ((0, jsx_runtime_1.jsx)(TokenAvatar_1.TokenAvatar, { token: token, chain: chain, sx: { marginLeft: 2 } })) : ((0, jsx_runtime_1.jsx)(TokenAvatar_1.TokenAvatarDefault, { sx: { marginLeft: 2 } }));
};
exports.AmountInputStartAdornment = AmountInputStartAdornment;
