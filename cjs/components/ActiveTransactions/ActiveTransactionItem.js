"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActiveTransactionItem = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ArrowForward_1 = require("@mui/icons-material/ArrowForward");
const ErrorRounded_1 = require("@mui/icons-material/ErrorRounded");
const InfoRounded_1 = require("@mui/icons-material/InfoRounded");
const material_1 = require("@mui/material");
const react_router_dom_1 = require("react-router-dom");
const hooks_1 = require("../../hooks");
const stores_1 = require("../../stores");
const utils_1 = require("../../utils");
const StepTimer_1 = require("../Step/StepTimer");
const TokenAvatar_1 = require("../TokenAvatar");
const ActiveTransactions_style_1 = require("./ActiveTransactions.style");
const ActiveTransactionItem = ({ routeId, dense, toggleOpenTransac }) => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { route, status } = (0, hooks_1.useRouteExecution)({
        routeId,
        executeInBackground: true,
    });
    // TODO: replace with ES2023 findLast
    const lastActiveStep = route?.steps
        .slice()
        .reverse()
        .find((step) => step.execution);
    const lastActiveProcess = lastActiveStep?.execution?.process.at(-1);
    const { title } = (0, hooks_1.useProcessMessage)(lastActiveStep, lastActiveProcess);
    if (!route || !lastActiveStep) {
        return null;
    }
    const handleClick = () => {
        toggleOpenTransac && toggleOpenTransac();
        navigate(utils_1.navigationRoutes.transactionExecution, { state: { routeId } });
    };
    const getStatusComponent = () => {
        switch (lastActiveProcess?.status) {
            case 'ACTION_REQUIRED':
                return (0, jsx_runtime_1.jsx)(InfoRounded_1.default, { color: "info", fontSize: "small" });
            case 'FAILED':
                return (0, jsx_runtime_1.jsx)(ErrorRounded_1.default, { color: "error", fontSize: "small" });
            default:
                return ((0, jsx_runtime_1.jsx)(material_1.Typography, { fontSize: 14, fontWeight: 500, children: (0, jsx_runtime_1.jsx)(StepTimer_1.StepTimer, { step: lastActiveStep, hideInProgress: true }) }));
        }
    };
    const ListItemComponent = dense ? ActiveTransactions_style_1.ListItem : ActiveTransactions_style_1.ListItemButton;
    return ((0, jsx_runtime_1.jsxs)(ListItemComponent, { onClick: handleClick, dense: true, disableRipple: dense, children: [(0, jsx_runtime_1.jsx)(material_1.ListItemAvatar, { children: (0, jsx_runtime_1.jsxs)(TokenAvatar_1.TokenAvatarGroup, { total: 2, children: [(0, jsx_runtime_1.jsx)(TokenAvatar_1.TokenAvatar, { token: route.fromToken }), (0, jsx_runtime_1.jsx)(TokenAvatar_1.TokenAvatar, { token: route.toToken })] }) }), (0, jsx_runtime_1.jsx)(material_1.ListItemText, { sx: { margin: 0 }, disableTypography: true, primary: (0, jsx_runtime_1.jsxs)(material_1.Typography, { fontWeight: 500, lineHeight: 1, sx: {
                        display: 'flex',
                        alignItems: 'center',
                        marginLeft: 2,
                        height: 16,
                    }, children: [route.fromToken.symbol, (0, jsx_runtime_1.jsx)(ArrowForward_1.default, { sx: { paddingX: 0.5 } }), route.toToken.symbol] }), secondary: status !== stores_1.RouteExecutionStatus.Done ? ((0, jsx_runtime_1.jsx)(material_1.Typography, { fontWeight: 400, fontSize: 12, color: "text.secondary", lineHeight: 1, mt: 0.75, ml: 2, children: title })) : null }), getStatusComponent()] }));
};
exports.ActiveTransactionItem = ActiveTransactionItem;
