"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionDetailsPage = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ContentCopyRounded_1 = require("@mui/icons-material/ContentCopyRounded");
const DeleteOutline_1 = require("@mui/icons-material/DeleteOutline");
const material_1 = require("@mui/material");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_router_dom_1 = require("react-router-dom");
const shallow_1 = require("zustand/shallow");
const Card_1 = require("../../components/Card");
const ContractComponent_1 = require("../../components/ContractComponent");
const Insurance_1 = require("../../components/Insurance");
const Step_1 = require("../../components/Step");
const hooks_1 = require("../../hooks");
const providers_1 = require("../../providers");
const stores_1 = require("../../stores");
const utils_1 = require("../../utils");
const TransactionDetailsPage = () => {
    const { t, i18n } = (0, react_i18next_1.useTranslation)();
    const { navigateBack } = (0, hooks_1.useNavigateBack)();
    const { subvariant, contractComponent, contractSecondaryComponent } = (0, providers_1.useWidgetConfig)();
    const { state } = (0, react_router_dom_1.useLocation)();
    const [routeExecution, deleteRoute] = (0, stores_1.useRouteExecutionStore)((store) => [store.routes[state?.routeId], store.deleteRoute], shallow_1.shallow);
    const headerStoreContext = (0, stores_1.useHeaderStoreContext)();
    const [open, setOpen] = (0, react_1.useState)(false);
    const toggleDialog = (0, react_1.useCallback)(() => {
        setOpen((open) => !open);
    }, []);
    const handleDeleteRoute = () => {
        navigateBack();
        if (routeExecution) {
            deleteRoute(routeExecution.route.id);
        }
    };
    const sourceTxHash = routeExecution?.route.steps[0].execution?.process
        .filter((process) => process.type !== 'TOKEN_ALLOWANCE')
        .find((process) => process.txHash)?.txHash;
    const insuranceCoverageId = sourceTxHash ?? routeExecution?.route.fromAddress;
    let supportId = sourceTxHash ?? routeExecution?.route.id ?? '';
    if (process.env.NODE_ENV === 'development') {
        supportId += `_${routeExecution?.route.id}`;
    }
    const copySupportId = async () => {
        await navigator.clipboard.writeText(supportId);
    };
    (0, react_1.useEffect)(() => {
        return headerStoreContext.getState().setAction((0, jsx_runtime_1.jsx)(material_1.IconButton, { size: "medium", edge: "end", onClick: toggleDialog, children: (0, jsx_runtime_1.jsx)(DeleteOutline_1.default, {}) }));
    }, [headerStoreContext, toggleDialog]);
    const startedAt = new Date(routeExecution?.route.steps[0].execution?.process[0].startedAt ?? 0);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(material_1.Box, { sx: {
                    display: 'flex',
                    flex: 1,
                    justifyContent: 'space-between',
                }, pb: 1, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { fontSize: 12, children: new Intl.DateTimeFormat(i18n.language, { dateStyle: 'long' }).format(startedAt) }), (0, jsx_runtime_1.jsx)(material_1.Typography, { fontSize: 12, children: new Intl.DateTimeFormat(i18n.language, {
                            timeStyle: 'short',
                        }).format(startedAt) })] }), (0, Step_1.getStepList)(routeExecution?.route, subvariant), subvariant === 'nft' ? ((0, jsx_runtime_1.jsx)(ContractComponent_1.ContractComponent, { mt: 2, children: contractSecondaryComponent || contractComponent })) : null, routeExecution?.route?.insurance?.state === 'INSURED' ? ((0, jsx_runtime_1.jsx)(Insurance_1.Insurance, { mt: 2, status: routeExecution.status, feeAmountUsd: routeExecution.route.insurance.feeAmountUsd, insuredAmount: (0, utils_1.formatTokenAmount)(routeExecution.route.toAmountMin, routeExecution.route.toToken.decimals), insuredTokenSymbol: routeExecution.route.toToken.symbol, insurableRouteId: routeExecution.route.id, insuranceCoverageId: insuranceCoverageId })) : null, (0, jsx_runtime_1.jsxs)(Card_1.Card, { mt: 2, children: [(0, jsx_runtime_1.jsxs)(material_1.Box, { sx: {
                            display: 'flex',
                            flex: 1,
                        }, children: [(0, jsx_runtime_1.jsx)(Card_1.CardTitle, { flex: 1, children: t('main.supportId') }), (0, jsx_runtime_1.jsx)(material_1.Box, { mr: 1, mt: 1, children: (0, jsx_runtime_1.jsx)(material_1.IconButton, { size: "medium", onClick: copySupportId, children: (0, jsx_runtime_1.jsx)(ContentCopyRounded_1.default, { fontSize: "small" }) }) })] }), (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "body2", pt: 1, pb: 2, px: 2, sx: { wordBreak: 'break-all' }, children: supportId })] })] }));
};
exports.TransactionDetailsPage = TransactionDetailsPage;
