import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, useMediaQuery } from '@mui/material';
import { useWatch } from 'react-hook-form';
import { ReverseTokensButton } from '../components/ReverseTokensButton';
import { SelectTokenButton } from '../components/SelectTokenButton';
import { FormKey, useWidgetConfig } from '../providers';
import { DisabledUI, HiddenUI } from '../types';
export const SelectChainAndToken = (props) => {
    const prefersNarrowView = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const { disabledUI, hiddenUI, subvariant } = useWidgetConfig();
    const [fromChain, toChain, fromToken, toToken] = useWatch({
        name: [
            FormKey.FromChain,
            FormKey.ToChain,
            FormKey.FromToken,
            FormKey.ToToken,
        ],
    });
    const hiddenReverse = subvariant === 'refuel' ||
        disabledUI?.includes(DisabledUI.FromToken) ||
        disabledUI?.includes(DisabledUI.ToToken) ||
        hiddenUI?.includes(HiddenUI.ToToken);
    const hiddenToToken = subvariant === 'nft' || hiddenUI?.includes(HiddenUI.ToToken);
    const isCompact = fromChain &&
        toChain &&
        fromToken &&
        toToken &&
        !prefersNarrowView &&
        !hiddenToToken;
    return (_jsxs(Box, { sx: { display: 'flex', flexDirection: isCompact ? 'row' : 'column' }, ...props, children: [_jsx(SelectTokenButton, { formType: "from", compact: isCompact }), !hiddenToToken ? (_jsx(Box, { sx: {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }, m: !hiddenReverse ? -1.125 : 1, children: !hiddenReverse ? (_jsx(ReverseTokensButton, { vertical: !isCompact })) : null })) : null, !hiddenToToken ? (_jsx(SelectTokenButton, { formType: "to", compact: isCompact })) : null] }));
};
