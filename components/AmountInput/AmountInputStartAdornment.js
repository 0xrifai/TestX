import { jsx as _jsx } from "react/jsx-runtime";
import { useWatch } from 'react-hook-form';
import { useChain, useToken } from '../../hooks';
import { FormKeyHelper } from '../../providers';
import { TokenAvatar, TokenAvatarDefault } from '../TokenAvatar';
export const AmountInputStartAdornment = ({ formType, }) => {
    const [chainId, tokenAddress] = useWatch({
        name: [
            FormKeyHelper.getChainKey(formType),
            FormKeyHelper.getTokenKey(formType),
        ],
    });
    const { chain } = useChain(chainId);
    const { token } = useToken(chainId, tokenAddress);
    const isSelected = !!(chain && token);
    return isSelected ? (_jsx(TokenAvatar, { token: token, chain: chain, sx: { marginLeft: 2 } })) : (_jsx(TokenAvatarDefault, { sx: { marginLeft: 2 } }));
};
