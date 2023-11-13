"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GasSufficiencyMessage = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const EvStation_1 = require("@mui/icons-material/EvStation");
const material_1 = require("@mui/material");
const react_i18next_1 = require("react-i18next");
const GasMessage_style_1 = require("./GasMessage.style");
const GasSufficiencyMessage = ({ insufficientGas, }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    return ((0, jsx_runtime_1.jsxs)(GasMessage_style_1.WarningMessageCard, { children: [(0, jsx_runtime_1.jsxs)(GasMessage_style_1.WarningMessageCardTitle, { display: "flex", alignItems: "center", px: 2, pt: 2, children: [(0, jsx_runtime_1.jsx)(EvStation_1.default, { sx: {
                            marginRight: 1,
                        } }), (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "body2", fontWeight: 700, children: t(`warning.title.insufficientGas`) })] }), (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "body2", px: 2, pt: 1, children: t(`warning.message.insufficientGas`) }), insufficientGas?.map((item, index) => ((0, jsx_runtime_1.jsx)(material_1.Typography
            // eslint-disable-next-line react/no-array-index-key
            , { variant: "body2", px: 2, pb: insufficientGas?.length - 1 === index ? 2 : 0, pt: 0.5, children: t(`main.tokenOnChainAmount`, {
                    amount: item.insufficientAmount?.toString(),
                    tokenSymbol: item.token.symbol,
                    chainName: item.chain?.name,
                }) }, index)))] }));
};
exports.GasSufficiencyMessage = GasSufficiencyMessage;
