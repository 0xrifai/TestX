"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetEvent = void 0;
var WidgetEvent;
(function (WidgetEvent) {
    WidgetEvent["RouteExecutionStarted"] = "routeExecutionStarted";
    WidgetEvent["RouteExecutionUpdated"] = "routeExecutionUpdated";
    WidgetEvent["RouteExecutionCompleted"] = "routeExecutionCompleted";
    WidgetEvent["RouteExecutionFailed"] = "routeExecutionFailed";
    WidgetEvent["RouteHighValueLoss"] = "routeHighValueLoss";
    WidgetEvent["RouteContactSupport"] = "routeContactSupport";
    WidgetEvent["SourceChainTokenSelected"] = "sourceChainTokenSelected";
    WidgetEvent["DestinationChainTokenSelected"] = "destinationChainTokenSelected";
    WidgetEvent["SendToWalletToggled"] = "sendToWalletToggled";
    WidgetEvent["ReviewTransactionPageEntered"] = "reviewTransactionPageEntered";
    WidgetEvent["WalletConnected"] = "walletConnected";
})(WidgetEvent || (exports.WidgetEvent = WidgetEvent = {}));
