"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExchangeRateBottomSheet = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const WarningRounded_1 = require("@mui/icons-material/WarningRounded");
const material_1 = require("@mui/material");
const big_js_1 = require("big.js");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const BottomSheet_1 = require("../../components/BottomSheet");
const hooks_1 = require("../../hooks");
const utils_1 = require("../../utils");
const StatusBottomSheet_style_1 = require("./StatusBottomSheet.style");
exports.ExchangeRateBottomSheet = (0, react_1.forwardRef)(({ onContinue, onCancel }, ref) => {
    const [data, setData] = (0, react_1.useState)();
    const bottomSheetRef = (0, react_1.useRef)(null);
    const resolverRef = (0, react_1.useRef)();
    const handleContinue = () => {
        ref.current?.close(true);
        onContinue?.();
    };
    const handleCancel = (0, react_1.useCallback)(() => {
        ref.current?.close(false);
        onCancel?.();
    }, [onCancel, ref]);
    const handleClose = (0, react_1.useCallback)(() => {
        ref.current?.close(false, false);
        onCancel?.();
    }, [onCancel, ref]);
    (0, react_1.useImperativeHandle)(ref, () => ({
        isOpen: () => bottomSheetRef.current?.isOpen(),
        open: (resolver, data) => {
            setData(data);
            resolverRef.current = resolver;
            bottomSheetRef.current?.open();
        },
        close: (value = false, bottomSheetClose = true) => {
            resolverRef.current?.(value);
            if (bottomSheetClose) {
                bottomSheetRef.current?.close();
            }
        },
    }), []);
    return ((0, jsx_runtime_1.jsx)(BottomSheet_1.BottomSheet, { ref: bottomSheetRef, onClose: handleClose, children: (0, jsx_runtime_1.jsx)(ExchangeRateBottomSheetContent, { data: data, onContinue: handleContinue, onCancel: handleCancel }) }));
});
const ExchangeRateBottomSheetContent = ({ data, onCancel, onContinue }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const ref = (0, react_1.useRef)();
    (0, hooks_1.useSetContentHeight)(ref);
    const oldAmount = (0, big_js_1.default)(data?.oldToAmount || 1);
    return ((0, jsx_runtime_1.jsxs)(material_1.Box, { p: 3, ref: ref, children: [(0, jsx_runtime_1.jsxs)(StatusBottomSheet_style_1.CenterContainer, { children: [(0, jsx_runtime_1.jsx)(StatusBottomSheet_style_1.IconCircle, { status: "warning", mb: 1, children: (0, jsx_runtime_1.jsx)(WarningRounded_1.default, { color: "warning" }) }), (0, jsx_runtime_1.jsx)(material_1.Typography, { py: 1, fontSize: 18, fontWeight: 700, children: t('warning.title.rateChanged') })] }), (0, jsx_runtime_1.jsx)(material_1.Typography, { py: 1, children: t('warning.message.rateChanged') }), (0, jsx_runtime_1.jsxs)(material_1.Box, { display: "flex", justifyContent: "space-between", mt: 1, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { children: t('main.quotedAmount') }), (0, jsx_runtime_1.jsxs)(material_1.Typography, { fontWeight: 600, children: [t('format.number', {
                                value: (0, utils_1.formatTokenAmount)(data?.oldToAmount, data?.toToken.decimals, 5),
                            }), ' ', data?.toToken.symbol] })] }), (0, jsx_runtime_1.jsxs)(material_1.Box, { display: "flex", justifyContent: "space-between", mt: 0.25, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { children: t('main.currentAmount') }), (0, jsx_runtime_1.jsxs)(material_1.Typography, { fontWeight: 600, children: [t('format.number', {
                                value: (0, utils_1.formatTokenAmount)(data?.newToAmount, data?.toToken.decimals, 5),
                            }), ' ', data?.toToken.symbol] })] }), (0, jsx_runtime_1.jsxs)(material_1.Box, { display: "flex", justifyContent: "space-between", mt: 0.25, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { children: t('main.rateChange') }), (0, jsx_runtime_1.jsxs)(material_1.Typography, { fontWeight: 600, children: [(0, big_js_1.default)(data?.newToAmount || 0)
                                .div(oldAmount.eq(0) ? (0, big_js_1.default)(1) : oldAmount)
                                .minus(1)
                                .mul(100)
                                .round(2, big_js_1.default.roundUp)
                                .toString(), "%"] })] }), (0, jsx_runtime_1.jsxs)(material_1.Box, { display: "flex", mt: 3, children: [(0, jsx_runtime_1.jsx)(material_1.Button, { variant: "text", onClick: onCancel, fullWidth: true, children: t('button.cancel') }), (0, jsx_runtime_1.jsx)(material_1.Box, { display: "flex", p: 1 }), (0, jsx_runtime_1.jsx)(material_1.Button, { variant: "contained", onClick: onContinue, fullWidth: true, children: t('button.continue') })] })] }));
};
