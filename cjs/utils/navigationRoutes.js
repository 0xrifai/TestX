"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.backButtonRoutes = exports.stickyHeaderRoutes = exports.navigationRoutesValues = exports.navigationRoutes = void 0;
exports.navigationRoutes = {
    home: '/',
    activeTransactions: 'active-transactions',
    bridges: 'bridges',
    exchanges: 'exchanges',
    fromChain: 'from-chain',
    fromToken: 'from-token',
    routes: 'routes',
    selectWallet: 'wallet',
    settings: 'settings',
    toChain: 'to-chain',
    toToken: 'to-token',
    toTokenNative: 'to-token-native',
    transactionDetails: 'transaction-details',
    transactionExecution: 'transaction-execution',
    transactionHistory: 'transaction-history',
};
exports.navigationRoutesValues = Object.values(exports.navigationRoutes);
exports.stickyHeaderRoutes = [
    exports.navigationRoutes.activeTransactions,
    exports.navigationRoutes.bridges,
    exports.navigationRoutes.exchanges,
    exports.navigationRoutes.fromChain,
    exports.navigationRoutes.home,
    exports.navigationRoutes.routes,
    exports.navigationRoutes.selectWallet,
    exports.navigationRoutes.settings,
    exports.navigationRoutes.toChain,
    exports.navigationRoutes.toTokenNative,
    exports.navigationRoutes.transactionDetails,
    exports.navigationRoutes.transactionExecution,
    exports.navigationRoutes.transactionHistory,
];
exports.backButtonRoutes = [
    exports.navigationRoutes.activeTransactions,
    exports.navigationRoutes.bridges,
    exports.navigationRoutes.exchanges,
    exports.navigationRoutes.fromChain,
    exports.navigationRoutes.fromToken,
    exports.navigationRoutes.routes,
    exports.navigationRoutes.selectWallet,
    exports.navigationRoutes.settings,
    exports.navigationRoutes.toChain,
    exports.navigationRoutes.toToken,
    exports.navigationRoutes.toTokenNative,
    exports.navigationRoutes.transactionDetails,
    exports.navigationRoutes.transactionExecution,
    exports.navigationRoutes.transactionHistory,
];
