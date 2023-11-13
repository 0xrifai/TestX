import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from 'react';
import { FormProvider as ReactHookFormProvider, useForm, } from 'react-hook-form';
import { useWidgetConfig } from '../WidgetProvider';
import { FormUpdater } from './FormUpdater';
import { FormKey } from './types';
export const formDefaultValues = {
    [FormKey.FromAmount]: '',
    [FormKey.ToAddress]: '',
    [FormKey.TokenSearchFilter]: '',
    [FormKey.ContractOutputsToken]: '',
    [FormKey.ToContractAddress]: '',
    [FormKey.ToContractCallData]: '',
    [FormKey.ToContractGasLimit]: '',
    [FormKey.ToAmount]: '',
};
export const FormProvider = ({ children, }) => {
    const { fromChain, fromToken, fromAmount, toChain, toToken, toAddress } = useWidgetConfig();
    const defaultValues = useMemo(() => ({
        ...formDefaultValues,
        fromChain,
        fromToken,
        fromAmount: (typeof fromAmount === 'number'
            ? fromAmount?.toPrecision()
            : fromAmount) || formDefaultValues.fromAmount,
        toChain,
        toToken,
        toAddress: toAddress || formDefaultValues.toAddress,
    }), [fromAmount, fromChain, fromToken, toAddress, toChain, toToken]);
    const methods = useForm({
        // values,
        defaultValues,
    });
    return (_jsxs(ReactHookFormProvider, { ...methods, children: [_jsx(FormUpdater, { defaultValues: defaultValues }), children] }));
};
