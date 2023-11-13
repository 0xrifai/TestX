import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container, List, ListItemAvatar } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ListItemButton } from '../../components/ListItemButton';
import { ListItemText } from '../../components/ListItemText';
import { TokenAvatar } from '../../components/TokenAvatar';
import { useTokenSelect } from '../../components/TokenList';
import { useChains, useNavigateBack } from '../../hooks';
export const SelectNativeTokenPage = ({ formType, }) => {
    const { t } = useTranslation();
    const { navigateBack } = useNavigateBack();
    const { chains } = useChains();
    const selectToken = useTokenSelect(formType, navigateBack);
    return (_jsx(Container, { disableGutters: true, children: _jsx(List, { sx: {
                paddingLeft: 1.5,
                paddingRight: 1.5,
            }, children: chains?.map((chain) => (_jsxs(ListItemButton, { onClick: () => selectToken(chain.nativeToken.address, chain.id), children: [_jsx(ListItemAvatar, { children: _jsx(TokenAvatar, { token: chain.nativeToken, chain: chain }) }), _jsx(ListItemText, { primary: chain.nativeToken.symbol, secondary: t('main.onChain', { chainName: chain.name }) })] }, chain.id))) }) }));
};
