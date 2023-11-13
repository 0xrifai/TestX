"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormUpdater = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
const react_1 = require("react");
const react_hook_form_1 = require("react-hook-form");
const _1 = require(".");
const WalletProvider_1 = require("../WalletProvider");
const WidgetProvider_1 = require("../WidgetProvider");
const FormUpdater = ({ defaultValues }) => {
    const { fromChain, toChain, chains } = (0, WidgetProvider_1.useWidgetConfig)();
    const { account } = (0, WalletProvider_1.useWallet)();
    const { setValue, getValues, getFieldState, resetField, 
    // Subscription to touchedFields is required by getFieldState to work
    formState: { touchedFields }, } = (0, react_hook_form_1.useFormContext)();
    const previousDefaultValues = (0, react_1.useRef)(defaultValues);
    // Set wallet chain as default if no chains are provided by config and if they were not changed during widget usage
    (0, react_1.useEffect)(() => {
        const chainAllowed = account.chainId && (0, WidgetProvider_1.isItemAllowed)(account.chainId, chains);
        if (!account.isActive || !account.chainId || !chainAllowed) {
            return;
        }
        const { isTouched: isFromChainTouched } = getFieldState(_1.FormKey.FromChain);
        const { isTouched: isToChainTouched } = getFieldState(_1.FormKey.ToChain);
        const { isTouched: isFromTokenTouched } = getFieldState(_1.FormKey.FromToken);
        const { isTouched: isToTokenTouched } = getFieldState(_1.FormKey.ToToken);
        const { isTouched: isFromAmountTouched } = getFieldState(_1.FormKey.FromAmount);
        if (!fromChain && !isFromChainTouched && !isFromTokenTouched) {
            resetField(_1.FormKey.FromChain, { defaultValue: account.chainId });
            setValue(_1.FormKey.FromChain, account.chainId);
            setValue(_1.FormKey.FromToken, '');
            if (isFromAmountTouched) {
                setValue(_1.FormKey.FromAmount, '');
            }
        }
        if (!toChain && !isToChainTouched && !isToTokenTouched) {
            resetField(_1.FormKey.ToChain, { defaultValue: account.chainId });
            setValue(_1.FormKey.ToChain, account.chainId);
            setValue(_1.FormKey.ToToken, '');
        }
    }, [
        account.chainId,
        account.isActive,
        chains,
        fromChain,
        getFieldState,
        getValues,
        resetField,
        setValue,
        toChain,
    ]);
    // Makes widget config options reactive to changes
    // Acts similar to values property from useForm, but includes additional logic for chains
    (0, react_1.useEffect)(() => {
        Object.keys(defaultValues).forEach((key) => {
            if (previousDefaultValues.current[key] !== defaultValues[key]) {
                const value = defaultValues[key] ||
                    // set the chain to the current user one if it is not present in the config
                    (key === _1.FormKey.FromChain || key === _1.FormKey.ToChain
                        ? account.chainId || ''
                        : '');
                setValue(key, value);
                resetField(key, { defaultValue: value });
            }
        });
        previousDefaultValues.current = defaultValues;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [defaultValues, getValues, resetField, setValue]);
    return null;
};
exports.FormUpdater = FormUpdater;
