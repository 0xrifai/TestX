"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTokenValueLossThreshold = exports.TokenValueBottomSheet = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const WarningRounded_1 = require("@mui/icons-material/WarningRounded");
const material_1 = require("@mui/material");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const BottomSheet_1 = require("../../components/BottomSheet");
const hooks_1 = require("../../hooks");
const StatusBottomSheet_style_1 = require("./StatusBottomSheet.style");
const utils_1 = require("./utils");
exports.TokenValueBottomSheet = (0, react_1.forwardRef)(({ route, onContinue, onCancel }, ref) => {
    const handleCancel = () => {
        ref.current?.close();
        onCancel?.();
    };
    return ((0, jsx_runtime_1.jsx)(BottomSheet_1.BottomSheet, { ref: ref, onClose: onCancel, children: (0, jsx_runtime_1.jsx)(TokenValueBottomSheetContent, { route: route, onContinue: onContinue, onCancel: handleCancel }) }));
});
const TokenValueBottomSheetContent = ({ route, onCancel, onContinue, }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const ref = (0, react_1.useRef)();
    (0, hooks_1.useSetContentHeight)(ref);
    return ((0, jsx_runtime_1.jsxs)(material_1.Box, { p: 3, ref: ref, children: [(0, jsx_runtime_1.jsxs)(StatusBottomSheet_style_1.CenterContainer, { children: [(0, jsx_runtime_1.jsx)(StatusBottomSheet_style_1.IconCircle, { status: "warning", mb: 1, children: (0, jsx_runtime_1.jsx)(WarningRounded_1.default, { color: "warning" }) }), (0, jsx_runtime_1.jsx)(material_1.Typography, { py: 1, fontSize: 18, fontWeight: 700, children: t('warning.title.highValueLoss') })] }), (0, jsx_runtime_1.jsx)(material_1.Typography, { py: 1, children: t('warning.message.highValueLoss') }), (0, jsx_runtime_1.jsxs)(material_1.Box, { display: "flex", justifyContent: "space-between", mt: 1, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { children: t('main.sending') }), (0, jsx_runtime_1.jsx)(material_1.Typography, { fontWeight: 600, children: t('format.currency', { value: route.fromAmountUSD }) })] }), (0, jsx_runtime_1.jsxs)(material_1.Box, { display: "flex", justifyContent: "space-between", mt: 0.25, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { children: t('main.gasCost') }), (0, jsx_runtime_1.jsx)(material_1.Typography, { fontWeight: 600, children: t('format.currency', { value: route.gasCostUSD }) })] }), (0, jsx_runtime_1.jsxs)(material_1.Box, { display: "flex", justifyContent: "space-between", mt: 0.25, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { children: t('main.receiving') }), (0, jsx_runtime_1.jsx)(material_1.Typography, { fontWeight: 600, children: t('format.currency', { value: route.toAmountUSD }) })] }), (0, jsx_runtime_1.jsxs)(material_1.Box, { display: "flex", justifyContent: "space-between", mt: 0.25, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { children: t('main.valueLoss') }), (0, jsx_runtime_1.jsx)(material_1.Typography, { fontWeight: 600, children: (0, utils_1.calcValueLoss)(route) })] }), (0, jsx_runtime_1.jsxs)(material_1.Box, { display: "flex", mt: 3, children: [(0, jsx_runtime_1.jsx)(material_1.Button, { variant: "text", onClick: onCancel, fullWidth: true, children: t('button.cancel') }), (0, jsx_runtime_1.jsx)(material_1.Box, { display: "flex", p: 1 }), (0, jsx_runtime_1.jsx)(material_1.Button, { variant: "contained", onClick: onContinue, fullWidth: true, children: t('button.continue') })] })] }));
};
const getTokenValueLossThreshold = (route) => {
    if (!route) {
        return false;
    }
    const fromAmountUSD = Number(route.fromAmountUSD || 0);
    const toAmountUSD = Number(route.toAmountUSD || 0);
    const gasCostUSD = Number(route.gasCostUSD || 0);
    if (!fromAmountUSD && !toAmountUSD) {
        return false;
    }
    return toAmountUSD / (fromAmountUSD + gasCostUSD) < 0.9;
};
exports.getTokenValueLossThreshold = getTokenValueLossThreshold;
