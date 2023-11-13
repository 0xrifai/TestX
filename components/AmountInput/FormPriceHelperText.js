import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormHelperText, Skeleton, Typography } from '@mui/material';
import { useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useTokenAddressBalance } from '../../hooks';
import { FormKeyHelper } from '../../providers';
import { formatTokenAmount, formatTokenPrice } from '../../utils';
export const FormPriceHelperText = ({ formType }) => {
    const [chainId, tokenAddress] = useWatch({
        name: [
            FormKeyHelper.getChainKey(formType),
            FormKeyHelper.getTokenKey(formType),
        ],
    });
    const { token, isLoading } = useTokenAddressBalance(chainId, tokenAddress);
    return (_jsx(FormPriceHelperTextBase, { formType: formType, isLoading: isLoading, tokenAddress: tokenAddress, token: token }));
};
export const FormPriceHelperTextBase = ({ formType, isLoading, tokenAddress, token }) => {
    const { t } = useTranslation();
    const amount = useWatch({
        name: FormKeyHelper.getAmountKey(formType),
    });
    const fromAmountTokenPrice = formatTokenPrice(amount, token?.priceUSD);
    return (_jsxs(FormHelperText, { component: "div", sx: { display: 'flex', justifyContent: 'space-between', margin: 0 }, children: [_jsx(Typography, { color: fromAmountTokenPrice ? 'text.secondary' : 'grey.600', fontWeight: 400, fontSize: 12, marginLeft: 8, lineHeight: 1.3334, flex: 1, sx: {
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word',
                }, children: t(`format.currency`, {
                    value: fromAmountTokenPrice,
                }) }), isLoading && tokenAddress ? (_jsx(Skeleton, { variant: "text", width: 48, height: 16, sx: { borderRadius: 0.25 } })) : token?.amount ? (_jsx(Typography, { fontWeight: 400, fontSize: 12, color: "text.secondary", lineHeight: 1.3334, pl: 0.25, children: `/ ${t(`format.number`, {
                    value: formatTokenAmount(token?.amount),
                })}` })) : null] }));
};
