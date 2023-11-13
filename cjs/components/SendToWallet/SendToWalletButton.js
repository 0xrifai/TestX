"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendToWalletButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Wallet_1 = require("@mui/icons-material/Wallet");
const material_1 = require("@mui/material");
const react_hook_form_1 = require("react-hook-form");
const react_i18next_1 = require("react-i18next");
const hooks_1 = require("../../hooks");
const providers_1 = require("../../providers");
const stores_1 = require("../../stores");
const types_1 = require("../../types");
const SendToWalletButton = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const { setValue } = (0, react_hook_form_1.useFormContext)();
    const emitter = (0, hooks_1.useWidgetEvents)();
    const { account } = (0, providers_1.useWallet)();
    const { disabledUI, hiddenUI, requiredUI } = (0, providers_1.useWidgetConfig)();
    const { showSendToWallet, toggleSendToWallet } = (0, stores_1.useSendToWalletStore)();
    const { showDestinationWallet } = (0, stores_1.useSettings)(['showDestinationWallet']);
    if (!showDestinationWallet ||
        !account.isActive ||
        hiddenUI?.includes(types_1.HiddenUI.ToAddress) ||
        requiredUI?.includes(types_1.RequiredUI.ToAddress)) {
        return null;
    }
    const handleClick = () => {
        if (showSendToWallet && !disabledUI?.includes(types_1.DisabledUI.ToAddress)) {
            setValue(providers_1.FormKey.ToAddress, '', { shouldTouch: true });
        }
        toggleSendToWallet();
        emitter.emit(types_1.WidgetEvent.SendToWalletToggled, stores_1.useSendToWalletStore.getState().showSendToWallet);
    };
    return ((0, jsx_runtime_1.jsx)(material_1.Tooltip, { title: t('main.sendToWallet'), placement: "bottom-end", enterDelay: 400, arrow: true, children: (0, jsx_runtime_1.jsx)(material_1.Button, { variant: showSendToWallet ? 'contained' : 'text', onClick: handleClick, sx: {
                minWidth: 48,
                marginLeft: 1,
            }, children: (0, jsx_runtime_1.jsx)(Wallet_1.default, {}) }) }));
};
exports.SendToWalletButton = SendToWalletButton;
