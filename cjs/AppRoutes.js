"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const NotFound_1 = require("./components/NotFound");
const MainPage_1 = require("./pages/MainPage");
const RoutesPage_1 = require("./pages/RoutesPage");
const SelectChainPage_1 = require("./pages/SelectChainPage");
const SelectTokenPage_1 = require("./pages/SelectTokenPage");
const SelectWalletPage_1 = require("./pages/SelectWalletPage");
const TransactionDetailsPage_1 = require("./pages/TransactionDetailsPage");
const TransactionHistoryPage_1 = require("./pages/TransactionHistoryPage");
const TransactionPage_1 = require("./pages/TransactionPage");
const utils_1 = require("./utils");
const AppRoutes = ({ toggleOpenTransac }) => {
    const element = (0, react_router_dom_1.useRoutes)([
        {
            path: '/',
            element: (0, jsx_runtime_1.jsx)(MainPage_1.MainPage, { toggleOpenTransac: toggleOpenTransac }),
        },
        {
            path: utils_1.navigationRoutes.fromToken,
            element: (0, jsx_runtime_1.jsx)(SelectTokenPage_1.SelectTokenPage, { formType: "from" }),
        },
        {
            path: utils_1.navigationRoutes.toToken,
            element: (0, jsx_runtime_1.jsx)(SelectTokenPage_1.SelectTokenPage, { formType: "to" }),
        },
        {
            path: utils_1.navigationRoutes.toTokenNative,
            element: (0, jsx_runtime_1.jsx)(SelectChainPage_1.SelectChainPage, { formType: "to", selectNativeToken: true }),
        },
        {
            path: `${utils_1.navigationRoutes.fromToken}?/${utils_1.navigationRoutes.fromChain}`,
            element: (0, jsx_runtime_1.jsx)(SelectChainPage_1.SelectChainPage, { formType: "from" }),
        },
        {
            path: `${utils_1.navigationRoutes.toToken}?/${utils_1.navigationRoutes.toChain}`,
            element: (0, jsx_runtime_1.jsx)(SelectChainPage_1.SelectChainPage, { formType: "to" }),
        },
        {
            path: utils_1.navigationRoutes.routes,
            element: (0, jsx_runtime_1.jsx)(RoutesPage_1.RoutesPage, {}),
        },
        // {
        //   path: navigationRoutes.activeTransactions,
        //   element: <ActiveTransactionsPage />,
        // },
        {
            path: utils_1.navigationRoutes.transactionHistory,
            element: (0, jsx_runtime_1.jsx)(TransactionHistoryPage_1.TransactionHistoryPage, {}),
        },
        {
            path: `${utils_1.navigationRoutes.transactionHistory}?/${utils_1.navigationRoutes.routes}?/${utils_1.navigationRoutes.transactionExecution}?/${utils_1.navigationRoutes.transactionDetails}`,
            element: (0, jsx_runtime_1.jsx)(TransactionDetailsPage_1.TransactionDetailsPage, {}),
        },
        {
            path: `${utils_1.navigationRoutes.routes}?/${utils_1.navigationRoutes.transactionExecution}?/${utils_1.navigationRoutes.selectWallet}`,
            element: (0, jsx_runtime_1.jsx)(SelectWalletPage_1.SelectWalletPage, {}),
        },
        {
            path: `${utils_1.navigationRoutes.routes}?/${utils_1.navigationRoutes.activeTransactions}?/${utils_1.navigationRoutes.transactionExecution}`,
            element: (0, jsx_runtime_1.jsx)(TransactionPage_1.TransactionPage, {}),
        },
        {
            path: '*',
            element: (0, jsx_runtime_1.jsx)(NotFound_1.NotFound, {}),
        },
    ]);
    return element;
};
exports.AppRoutes = AppRoutes;
