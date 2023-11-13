"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsuranceCard = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ExpandLess_1 = require("@mui/icons-material/ExpandLess");
const ExpandMore_1 = require("@mui/icons-material/ExpandMore");
const VerifiedUser_1 = require("@mui/icons-material/VerifiedUser");
const material_1 = require("@mui/material");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const icons_1 = require("../../icons");
const stores_1 = require("../../stores");
const Card_1 = require("../Card");
const Switch_1 = require("../Switch");
const InsuranceCard = ({ status, feeAmountUsd, insuredAmount, insuredTokenSymbol, insuranceCoverageId, onChange, ...props }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [enabled, setEnabled] = (0, react_1.useState)(false);
    const [cardExpanded, setCardExpanded] = (0, react_1.useState)(status === stores_1.RouteExecutionStatus.Idle);
    const handleExpand = (e) => {
        e.stopPropagation();
        setCardExpanded((expanded) => !expanded);
    };
    const handleSwitch = (_, checked) => {
        setEnabled(checked);
        onChange?.(checked);
    };
    return ((0, jsx_runtime_1.jsxs)(Card_1.Card, { selectionColor: "secondary", indented: true, ...props, children: [(0, jsx_runtime_1.jsxs)(material_1.Box, { display: "flex", alignItems: "center", justifyContent: "space-between", children: [(0, jsx_runtime_1.jsxs)(Card_1.CardLabel, { type: 'insurance', children: [(0, jsx_runtime_1.jsx)(VerifiedUser_1.default, { fontSize: "inherit" }), (0, jsx_runtime_1.jsx)(Card_1.CardLabelTypography, { type: "icon", children: status === stores_1.RouteExecutionStatus.Idle
                                    ? t('main.tags.insurance')
                                    : t('main.tags.insured') })] }), status === stores_1.RouteExecutionStatus.Idle ? ((0, jsx_runtime_1.jsx)(Switch_1.Switch, { onChange: handleSwitch, value: enabled })) : ((0, jsx_runtime_1.jsx)(material_1.Box, { my: -0.5, children: (0, jsx_runtime_1.jsx)(Card_1.CardIconButton, { onClick: handleExpand, size: "small", children: cardExpanded ? (0, jsx_runtime_1.jsx)(ExpandLess_1.default, {}) : (0, jsx_runtime_1.jsx)(ExpandMore_1.default, {}) }) }))] }), (0, jsx_runtime_1.jsx)(material_1.Collapse, { timeout: 225, in: cardExpanded, mountOnEnter: true, unmountOnExit: true, children: (0, jsx_runtime_1.jsxs)(material_1.Box, { mt: 2, children: [(0, jsx_runtime_1.jsxs)(material_1.Box, { display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { fontSize: 24, fontWeight: 700, lineHeight: 1, children: t('format.currency', {
                                        value: feeAmountUsd,
                                    }) }), (0, jsx_runtime_1.jsx)(icons_1.InsuraceLogo, {})] }), (0, jsx_runtime_1.jsxs)(material_1.Box, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { fontSize: 14, children: (0, jsx_runtime_1.jsx)(react_i18next_1.Trans, { i18nKey: status === stores_1.RouteExecutionStatus.Idle
                                            ? 'insurance.insure'
                                            : 'insurance.insured', values: {
                                            amount: insuredAmount,
                                            tokenSymbol: insuredTokenSymbol,
                                        }, components: [(0, jsx_runtime_1.jsx)("strong", {})] }) }), (0, jsx_runtime_1.jsx)(material_1.Collapse, { timeout: 225, in: enabled || status !== stores_1.RouteExecutionStatus.Idle, mountOnEnter: true, unmountOnExit: true, children: (0, jsx_runtime_1.jsxs)(material_1.Box, { sx: {
                                            listStyleType: 'disc',
                                            pl: 2,
                                        }, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { fontSize: 14, display: "list-item", children: t('insurance.bridgeExploits') }), (0, jsx_runtime_1.jsx)(material_1.Typography, { fontSize: 14, display: "list-item", children: t('insurance.slippageError') })] }) }), (0, jsx_runtime_1.jsx)(material_1.Link, { href: status === stores_1.RouteExecutionStatus.Idle
                                        ? 'https://docs.insurace.io/landing-page/documentation/cover-products/bridge-cover/li.fi'
                                        : `https://app.insurace.io/bridge-cover?search=${insuranceCoverageId}`, target: "_blank", underline: "none", color: "text.primary", children: (0, jsx_runtime_1.jsx)(material_1.Typography, { pt: 0.5, color: "primary", fontSize: 14, fontWeight: 600, children: status === stores_1.RouteExecutionStatus.Idle
                                            ? t('button.learnMore')
                                            : t('button.viewCoverage') }) })] })] }) })] }));
};
exports.InsuranceCard = InsuranceCard;
