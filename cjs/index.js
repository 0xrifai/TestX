"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiFiWidgetTest = exports.useWallet = exports.widgetEvents = exports.useWidgetEvents = exports.useWatch = exports.useFormContext = void 0;
const App_1 = require("./App");
var react_hook_form_1 = require("react-hook-form");
Object.defineProperty(exports, "useFormContext", { enumerable: true, get: function () { return react_hook_form_1.useFormContext; } });
Object.defineProperty(exports, "useWatch", { enumerable: true, get: function () { return react_hook_form_1.useWatch; } });
__exportStar(require("./components/NFT"), exports);
__exportStar(require("./config/version"), exports);
var hooks_1 = require("./hooks");
Object.defineProperty(exports, "useWidgetEvents", { enumerable: true, get: function () { return hooks_1.useWidgetEvents; } });
Object.defineProperty(exports, "widgetEvents", { enumerable: true, get: function () { return hooks_1.widgetEvents; } });
__exportStar(require("./providers/FormProvider/types"), exports);
var WalletProvider_1 = require("./providers/WalletProvider");
Object.defineProperty(exports, "useWallet", { enumerable: true, get: function () { return WalletProvider_1.useWallet; } });
__exportStar(require("./types"), exports);
// ClassNameGenerator.configure((componentName) =>
//   componentName.replace('Mui', 'LiFi'),
// );
exports.LiFiWidgetTest = App_1.App;
