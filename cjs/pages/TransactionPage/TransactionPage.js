"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionPage = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Delete_1 = require("@mui/icons-material/Delete");
const material_1 = require("@mui/material");
const react_1 = require("react");
const react_hook_form_1 = require("react-hook-form");
const react_i18next_1 = require("react-i18next");
const react_router_dom_1 = require("react-router-dom");
const ContractComponent_1 = require("../../components/ContractComponent");
const GasMessage_1 = require("../../components/GasMessage");
const Insurance_1 = require("../../components/Insurance");
const Step_1 = require("../../components/Step");
const hooks_1 = require("../../hooks");
const providers_1 = require("../../providers");
const stores_1 = require("../../stores");
const events_1 = require("../../types/events");
const utils_1 = require("../../utils");
const ExchangeRateBottomSheet_1 = require("./ExchangeRateBottomSheet");
const StartTransactionButton_1 = require("./StartTransactionButton");
const StatusBottomSheet_1 = require("./StatusBottomSheet");
const TokenValueBottomSheet_1 = require("./TokenValueBottomSheet");
const utils_2 = require("./utils");
const TransactionPage = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const { setValue } = (0, react_hook_form_1.useFormContext)();
    const emitter = (0, hooks_1.useWidgetEvents)();
    const { navigateBack } = (0, hooks_1.useNavigateBack)();
    const { subvariant, insurance, contractComponent, contractSecondaryComponent, } = (0, providers_1.useWidgetConfig)();
    const { state } = (0, react_router_dom_1.useLocation)();
    const headerStoreContext = (0, stores_1.useHeaderStoreContext)();
    const stateRouteId = state?.routeId;
    const [routeId, setRouteId] = (0, react_1.useState)(stateRouteId);
    const tokenValueBottomSheetRef = (0, react_1.useRef)(null);
    const exchangeRateBottomSheetRef = (0, react_1.useRef)(null);
    const onAcceptExchangeRateUpdate = (resolver, data) => {
        exchangeRateBottomSheetRef.current?.open(resolver, data);
    };
    const { route, status, executeRoute, restartRoute, deleteRoute } = (0, hooks_1.useRouteExecution)({
        routeId: routeId,
        onAcceptExchangeRateUpdate,
    });
    (0, react_1.useEffect)(() => {
        if (route && subvariant !== 'nft') {
            const transactionType = route.fromChainId === route.toChainId ? 'Swap' : 'Bridge';
            return headerStoreContext
                .getState()
                .setTitle(status === stores_1.RouteExecutionStatus.Idle
                ? t(`button.review${transactionType}`)
                : t(`header.${transactionType.toLowerCase()}`));
        }
    }, [headerStoreContext, route, status, subvariant, t]);
    (0, react_1.useEffect)(() => {
        if (status === stores_1.RouteExecutionStatus.Idle) {
            emitter.emit(events_1.WidgetEvent.ReviewTransactionPageEntered, route);
        }
        // We want to emit event only when the page is mounted
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    if (!route) {
        return null;
    }
    const tokenValueLossThresholdExceeded = (0, TokenValueBottomSheet_1.getTokenValueLossThreshold)(route);
    const handleExecuteRoute = () => {
        if (tokenValueBottomSheetRef.current?.isOpen()) {
            emitter.emit(events_1.WidgetEvent.RouteHighValueLoss, {
                fromAmountUsd: route.fromAmountUSD,
                gasCostUSD: route.gasCostUSD,
                toAmountUSD: route.toAmountUSD,
                valueLoss: (0, utils_2.calcValueLoss)(route),
            });
        }
        tokenValueBottomSheetRef.current?.close();
        executeRoute();
        setValue(providers_1.FormKey.FromAmount, '');
        if (subvariant === 'nft') {
            setValue(providers_1.FormKey.FromToken, '');
            setValue(providers_1.FormKey.ToToken, '');
        }
    };
    const handleStartClick = async () => {
        if (status === stores_1.RouteExecutionStatus.Idle) {
            if (tokenValueLossThresholdExceeded && subvariant !== 'nft') {
                tokenValueBottomSheetRef.current?.open();
            }
            else {
                handleExecuteRoute();
            }
        }
        if (status === stores_1.RouteExecutionStatus.Failed) {
            restartRoute();
        }
    };
    const handleRemoveRoute = () => {
        navigateBack();
        deleteRoute();
    };
    const getButtonText = () => {
        switch (status) {
            case stores_1.RouteExecutionStatus.Idle:
                switch (subvariant) {
                    case 'nft':
                        return t('button.buyNow');
                    case 'refuel':
                        return t('button.startBridging');
                    default:
                        const transactionType = route.fromChainId === route.toChainId ? 'Swapping' : 'Bridging';
                        return t(`button.start${transactionType}`);
                }
            case stores_1.RouteExecutionStatus.Failed:
                return t('button.tryAgain');
            default:
                return '';
        }
    };
    const insuredRoute = route.insurance?.state === 'INSURED';
    const insurableRoute = insurance &&
        subvariant !== 'refuel' &&
        status === stores_1.RouteExecutionStatus.Idle &&
        route.insurance?.state === 'INSURABLE';
    const insuranceAvailable = insuredRoute || insurableRoute;
    const StartButton = insurableRoute
        ? StartTransactionButton_1.StartInsurableTransactionButton
        : StartTransactionButton_1.StartTransactionButton;
    const getInsuranceCoverageId = () => route.steps[0].execution?.process
        .filter((process) => process.type !== 'TOKEN_ALLOWANCE')
        .find((process) => process.txHash)?.txHash ?? route.fromAddress;
    return ((0, jsx_runtime_1.jsxs)(material_1.Box, { mt: 2, children: [(0, Step_1.getStepList)(route, subvariant), subvariant === 'nft' ? ((0, jsx_runtime_1.jsx)(ContractComponent_1.ContractComponent, { mt: 2, children: contractSecondaryComponent || contractComponent })) : null, insuranceAvailable ? ((0, jsx_runtime_1.jsx)(Insurance_1.Insurance, { mt: 2, status: status, insurableRouteId: stateRouteId, feeAmountUsd: route.insurance.feeAmountUsd, insuredAmount: (0, utils_1.formatTokenAmount)(route.toAmountMin, route.toToken.decimals), insuredTokenSymbol: route.toToken.symbol, insuranceCoverageId: getInsuranceCoverageId(), onChange: setRouteId })) : null, status === stores_1.RouteExecutionStatus.Idle ||
                status === stores_1.RouteExecutionStatus.Failed ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(GasMessage_1.GasMessage, { mt: 2, route: route }), (0, jsx_runtime_1.jsxs)(material_1.Box, { mt: 2, display: "flex", children: [(0, jsx_runtime_1.jsx)(StartButton, { text: getButtonText(), onClick: handleStartClick, route: route, insurableRouteId: stateRouteId }), status === stores_1.RouteExecutionStatus.Failed ? ((0, jsx_runtime_1.jsx)(material_1.Tooltip, { title: t('button.removeTransaction'), placement: "bottom-end", enterDelay: 400, arrow: true, children: (0, jsx_runtime_1.jsx)(material_1.Button, { onClick: handleRemoveRoute, sx: {
                                        minWidth: 48,
                                        marginLeft: 1,
                                    }, children: (0, jsx_runtime_1.jsx)(Delete_1.default, {}) }) })) : null] })] })) : null, status ? (0, jsx_runtime_1.jsx)(StatusBottomSheet_1.StatusBottomSheet, { status: status, route: route }) : null, tokenValueLossThresholdExceeded && subvariant !== 'nft' ? ((0, jsx_runtime_1.jsx)(TokenValueBottomSheet_1.TokenValueBottomSheet, { route: route, ref: tokenValueBottomSheetRef, onContinue: handleExecuteRoute })) : null, (0, jsx_runtime_1.jsx)(ExchangeRateBottomSheet_1.ExchangeRateBottomSheet, { ref: exchangeRateBottomSheetRef })] }));
};
exports.TransactionPage = TransactionPage;
