"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectChainAndToken = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const react_hook_form_1 = require("react-hook-form");
const ReverseTokensButton_1 = require("../components/ReverseTokensButton");
const SelectTokenButton_1 = require("../components/SelectTokenButton");
const providers_1 = require("../providers");
const types_1 = require("../types");
const SelectChainAndToken = (props) => {
    const prefersNarrowView = (0, material_1.useMediaQuery)((theme) => theme.breakpoints.down('sm'));
    const { disabledUI, hiddenUI, subvariant } = (0, providers_1.useWidgetConfig)();
    const [fromChain, toChain, fromToken, toToken] = (0, react_hook_form_1.useWatch)({
        name: [
            providers_1.FormKey.FromChain,
            providers_1.FormKey.ToChain,
            providers_1.FormKey.FromToken,
            providers_1.FormKey.ToToken,
        ],
    });
    const hiddenReverse = subvariant === 'refuel' ||
        disabledUI?.includes(types_1.DisabledUI.FromToken) ||
        disabledUI?.includes(types_1.DisabledUI.ToToken) ||
        hiddenUI?.includes(types_1.HiddenUI.ToToken);
    const hiddenToToken = subvariant === 'nft' || hiddenUI?.includes(types_1.HiddenUI.ToToken);
    const isCompact = fromChain &&
        toChain &&
        fromToken &&
        toToken &&
        !prefersNarrowView &&
        !hiddenToToken;
    return ((0, jsx_runtime_1.jsxs)(material_1.Box, { sx: { display: 'flex', flexDirection: isCompact ? 'row' : 'column' }, ...props, children: [(0, jsx_runtime_1.jsx)(SelectTokenButton_1.SelectTokenButton, { formType: "from", compact: isCompact }), !hiddenToToken ? ((0, jsx_runtime_1.jsx)(material_1.Box, { sx: {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }, m: !hiddenReverse ? -1.125 : 1, children: !hiddenReverse ? ((0, jsx_runtime_1.jsx)(ReverseTokensButton_1.ReverseTokensButton, { vertical: !isCompact })) : null })) : null, !hiddenToToken ? ((0, jsx_runtime_1.jsx)(SelectTokenButton_1.SelectTokenButton, { formType: "to", compact: isCompact })) : null] }));
};
exports.SelectChainAndToken = SelectChainAndToken;
