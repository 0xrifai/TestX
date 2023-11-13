"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendToWalletFormHelperText = exports.SendToWallet = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const address_1 = require("@ethersproject/address");
const material_1 = require("@mui/material");
const react_1 = require("react");
const react_hook_form_1 = require("react-hook-form");
const react_i18next_1 = require("react-i18next");
const providers_1 = require("../../providers");
const stores_1 = require("../../stores");
const types_1 = require("../../types");
const Card_1 = require("../Card");
const SendToWallet_style_1 = require("./SendToWallet.style");
exports.SendToWallet = (0, react_1.forwardRef)((props, ref) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const { trigger, getValues, setValue, clearErrors } = (0, react_hook_form_1.useFormContext)();
    const { account } = (0, providers_1.useWallet)();
    const { disabledUI, hiddenUI, requiredUI, toAddress } = (0, providers_1.useWidgetConfig)();
    const { showSendToWallet, showSendToWalletDirty, setSendToWallet } = (0, stores_1.useSendToWalletStore)();
    const { showDestinationWallet } = (0, stores_1.useSettings)(['showDestinationWallet']);
    const hiddenToAddress = hiddenUI?.includes(types_1.HiddenUI.ToAddress);
    const disabledToAddress = disabledUI?.includes(types_1.DisabledUI.ToAddress);
    const requiredToAddress = requiredUI?.includes(types_1.RequiredUI.ToAddress);
    const requiredToAddressRef = (0, react_1.useRef)(requiredToAddress);
    const { field: { onChange, onBlur, name, value }, } = (0, react_hook_form_1.useController)({
        name: providers_1.FormKey.ToAddress,
        rules: {
            required: requiredToAddress && t('error.title.walletAddressRequired'),
            onChange: (e) => {
                setValue(providers_1.FormKey.ToAddress, e.target.value.trim());
            },
            validate: async (value) => {
                try {
                    if (!value) {
                        return true;
                    }
                    const address = await account.signer?.provider?.resolveName(value);
                    return ((0, address_1.isAddress)(address || value) ||
                        t('error.title.walletAddressInvalid'));
                }
                catch {
                    return t('error.title.walletEnsAddressInvalid');
                }
            },
            onBlur: () => trigger(providers_1.FormKey.ToAddress),
        },
    });
    // We want to show toAddress field if it is set via widget configuration and not hidden
    const showInstantly = Boolean(!showSendToWalletDirty &&
        showDestinationWallet &&
        toAddress &&
        !hiddenToAddress) || requiredToAddress;
    (0, react_1.useEffect)(() => {
        if (showInstantly) {
            setSendToWallet(true);
        }
    }, [showInstantly, setSendToWallet]);
    (0, react_1.useEffect)(() => {
        const value = getValues(providers_1.FormKey.ToAddress);
        if (value) {
            trigger(providers_1.FormKey.ToAddress);
            // Trigger validation if we change requiredToAddress in the runtime
        }
        else if (requiredToAddressRef.current !== requiredToAddress) {
            requiredToAddressRef.current = requiredToAddress;
            trigger(providers_1.FormKey.ToAddress).then(() => clearErrors(providers_1.FormKey.ToAddress));
        }
    }, [account.chainId, clearErrors, getValues, requiredToAddress, trigger]);
    if (hiddenToAddress) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)(material_1.Collapse, { timeout: showInstantly ? 0 : 225, in: showSendToWallet || showInstantly, mountOnEnter: true, unmountOnExit: true, children: (0, jsx_runtime_1.jsxs)(Card_1.Card, { ...props, ref: ref, children: [(0, jsx_runtime_1.jsx)(Card_1.CardTitle, { required: requiredToAddress, children: t('main.sendToWallet') }), (0, jsx_runtime_1.jsxs)(SendToWallet_style_1.FormControl, { fullWidth: true, sx: { paddingTop: '6px', paddingBottom: '5px' }, children: [(0, jsx_runtime_1.jsx)(SendToWallet_style_1.Input, { size: "small", autoComplete: "off", autoCorrect: "off", autoCapitalize: "off", spellCheck: "false", onChange: onChange, onBlur: onBlur, name: name, value: value, placeholder: t('main.walletAddressOrEns'), disabled: Boolean(toAddress && disabledToAddress) }), (0, jsx_runtime_1.jsx)(exports.SendToWalletFormHelperText, {})] })] }) }));
});
const SendToWalletFormHelperText = () => {
    const { errors } = (0, react_hook_form_1.useFormState)();
    return ((0, jsx_runtime_1.jsx)(material_1.FormHelperText, { error: !!errors.toAddress, children: errors.toAddress?.message }));
};
exports.SendToWalletFormHelperText = SendToWalletFormHelperText;
