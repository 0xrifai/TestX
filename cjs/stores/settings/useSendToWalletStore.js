"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSendToWalletStore = void 0;
const traditional_1 = require("zustand/traditional");
exports.useSendToWalletStore = (0, traditional_1.createWithEqualityFn)((set) => ({
    showSendToWallet: false,
    showSendToWalletDirty: false,
    toggleSendToWallet: () => set((state) => ({
        showSendToWallet: !state.showSendToWallet,
        showSendToWalletDirty: true,
    })),
    setSendToWallet: (value) => set({
        showSendToWallet: value,
        showSendToWalletDirty: true,
    }),
}), Object.is);
