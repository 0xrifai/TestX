import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import SearchOffIcon from '@mui/icons-material/SearchOff';
import { Box, Typography } from '@mui/material';
import { useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useChains } from '../../hooks';
import { FormKeyHelper } from '../../providers';
export const TokenNotFound = ({ formType }) => {
    const { t } = useTranslation();
    const [selectedChainId] = useWatch({
        name: [FormKeyHelper.getChainKey(formType)],
    });
    const { getChainById } = useChains();
    return (_jsxs(Box, { sx: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            flex: 1,
            padding: 3,
        }, children: [_jsx(Typography, { fontSize: 48, lineHeight: 1, children: _jsx(SearchOffIcon, { fontSize: "inherit" }) }), _jsx(Typography, { fontSize: 14, color: "text.secondary", textAlign: "center", mt: 2, px: 2, children: t('info.message.emptyTokenList', {
                    chainName: getChainById(selectedChainId)?.name,
                }) })] }));
};
