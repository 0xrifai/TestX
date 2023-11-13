import { jsx as _jsx } from "react/jsx-runtime";
import { InputAdornment, Skeleton } from '@mui/material';
import Big from 'big.js';
import { useFormContext, useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useChains, useGasRecommendation, useTokenAddressBalance, } from '../../hooks';
import { FormKeyHelper } from '../../providers';
import { formatTokenAmount } from '../../utils';
import { Button } from './AmountInputAdornment.style';
export const AmountInputEndAdornment = ({ formType }) => {
    const { t } = useTranslation();
    const { setValue } = useFormContext();
    const { getChainById } = useChains();
    const [chainId, tokenAddress] = useWatch({
        name: [
            FormKeyHelper.getChainKey(formType),
            FormKeyHelper.getTokenKey(formType),
        ],
    });
    const { data } = useGasRecommendation(chainId);
    const { token, isLoading } = useTokenAddressBalance(chainId, tokenAddress);
    const handleMax = () => {
        const chain = getChainById(chainId);
        let maxAmount = token?.amount;
        if (chain?.nativeToken.address === tokenAddress &&
            data?.available &&
            data?.recommended) {
            const tokenAmount = Big(token?.amount ?? 0);
            const recommendedAmount = Big(data.recommended.amount)
                .div(10 ** data.recommended.token.decimals)
                .div(2);
            if (tokenAmount.gt(recommendedAmount)) {
                maxAmount = formatTokenAmount(tokenAmount.minus(recommendedAmount).toString());
            }
        }
        setValue(FormKeyHelper.getAmountKey(formType), maxAmount || '', {
            shouldTouch: true,
        });
    };
    return (_jsx(InputAdornment, { position: "end", children: isLoading && tokenAddress ? (_jsx(Skeleton, { variant: "rectangular", width: 46, height: 24, sx: { borderRadius: 0.5 } })) : formType === 'from' && token?.amount ? (_jsx(Button, { onClick: handleMax, children: t('button.max') })) : null }));
};
