export var WidgetEvent;
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
})(WidgetEvent || (WidgetEvent = {}));
