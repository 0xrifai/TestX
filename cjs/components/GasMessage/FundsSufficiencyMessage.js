"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FundsSufficiencyMessage = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const WarningRounded_1 = require("@mui/icons-material/WarningRounded");
const material_1 = require("@mui/material");
const react_i18next_1 = require("react-i18next");
const GasMessage_style_1 = require("./GasMessage.style");
const FundsSufficiencyMessage = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    return ((0, jsx_runtime_1.jsxs)(GasMessage_style_1.WarningMessageCard, { display: "flex", children: [(0, jsx_runtime_1.jsx)(GasMessage_style_1.WarningMessageCardTitle, { children: (0, jsx_runtime_1.jsx)(WarningRounded_1.default, { sx: {
                        marginTop: 2,
                        marginLeft: 2,
                    } }) }), (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "body2", px: 2, pb: 2, pt: 2, children: t(`warning.message.insufficientFunds`) })] }));
};
exports.FundsSufficiencyMessage = FundsSufficiencyMessage;
