"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReverseTokensButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const SwapHoriz_1 = require("@mui/icons-material/SwapHoriz");
const SwapVert_1 = require("@mui/icons-material/SwapVert");
const react_hook_form_1 = require("react-hook-form");
const providers_1 = require("../../providers");
const ReverseTokensButton_style_1 = require("./ReverseTokensButton.style");
const ReverseTokensButton = ({ vertical, }) => {
    const { setValue, getValues } = (0, react_hook_form_1.useFormContext)();
    const handleClick = () => {
        const [fromChain, fromToken, toChain, toToken] = getValues([
            providers_1.FormKey.FromChain,
            providers_1.FormKey.FromToken,
            providers_1.FormKey.ToChain,
            providers_1.FormKey.ToToken,
        ]);
        setValue(providers_1.FormKey.FromAmount, '', { shouldTouch: true });
        setValue(providers_1.FormKey.FromChain, toChain, { shouldTouch: true });
        setValue(providers_1.FormKey.FromToken, toToken, { shouldTouch: true });
        setValue(providers_1.FormKey.ToChain, fromChain, { shouldTouch: true });
        setValue(providers_1.FormKey.ToToken, fromToken, { shouldTouch: true });
    };
    return ((0, jsx_runtime_1.jsx)(ReverseTokensButton_style_1.IconButton, { onClick: handleClick, size: "small", children: vertical ? (0, jsx_runtime_1.jsx)(SwapVert_1.default, {}) : (0, jsx_runtime_1.jsx)(SwapHoriz_1.default, {}) }));
};
exports.ReverseTokensButton = ReverseTokensButton;
