import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Avatar, Container, List, ListItemAvatar } from '@mui/material';
import { useChainSelect } from '../../components/ChainSelect';
import { ListItemButton } from '../../components/ListItemButton';
import { ListItemText } from '../../components/ListItemText';
import { useTokenSelect } from '../../components/TokenList';
import { useNavigateBack } from '../../hooks';
export const SelectChainPage = ({ formType, selectNativeToken, }) => {
    const { navigateBack } = useNavigateBack();
    const { chains, setCurrentChain } = useChainSelect(formType);
    const selectToken = useTokenSelect(formType, navigateBack);
    const handleClick = async (chain) => {
        if (selectNativeToken) {
            selectToken(chain.nativeToken.address, chain.id);
        }
        else {
            setCurrentChain(chain.id);
            navigateBack();
        }
    };
    return (_jsx(Container, { disableGutters: true, children: _jsx(List, { sx: {
                paddingLeft: 1.5,
                paddingRight: 1.5,
            }, children: chains?.map((chain) => (_jsxs(ListItemButton, { onClick: () => handleClick(chain), children: [_jsx(ListItemAvatar, { children: _jsx(Avatar, { src: chain.logoURI, alt: chain.name, children: chain.name[0] }) }), _jsx(ListItemText, { primary: chain.name })] }, chain.id))) }) }));
};
