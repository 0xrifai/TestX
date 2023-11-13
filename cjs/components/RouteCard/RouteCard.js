"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteCard = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ExpandLess_1 = require("@mui/icons-material/ExpandLess");
const ExpandMore_1 = require("@mui/icons-material/ExpandMore");
const VerifiedUser_1 = require("@mui/icons-material/VerifiedUser");
const material_1 = require("@mui/material");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const providers_1 = require("../../providers");
const utils_1 = require("../../utils");
const Card_1 = require("../Card");
const StepActions_1 = require("../StepActions");
const Token_1 = require("../Token");
const RouteCardEssentials_1 = require("./RouteCardEssentials");
const RouteCard = ({ route, active, variant = 'default', expanded, ...other }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const { subvariant } = (0, providers_1.useWidgetConfig)();
    const [cardExpanded, setCardExpanded] = (0, react_1.useState)(expanded);
    const insurable = route.insurance?.state === 'INSURABLE';
    const handleExpand = (e) => {
        e.stopPropagation();
        setCardExpanded((expanded) => !expanded);
    };
    const token = subvariant === 'nft'
        ? { ...route.fromToken, amount: route.fromAmount }
        : { ...route.toToken, amount: route.toAmount };
    const RecommendedTagTooltip = route.tags?.[0] === 'RECOMMENDED' ? RecommendedTooltip : react_1.Fragment;
    const cardContent = ((0, jsx_runtime_1.jsxs)(material_1.Box, { flex: 1, children: [subvariant !== 'refuel' && (insurable || route.tags?.length) ? ((0, jsx_runtime_1.jsxs)(material_1.Box, { display: "flex", alignItems: "center", mb: 2, children: [insurable ? ((0, jsx_runtime_1.jsx)(InsuranceTooltip, { insuredAmount: (0, utils_1.formatTokenAmount)(route.toAmountMin, route.toToken.decimals), insuredTokenSymbol: route.toToken.symbol, children: (0, jsx_runtime_1.jsxs)(Card_1.CardLabel, { type: route.tags?.length && !cardExpanded
                                ? 'insurance-icon'
                                : 'insurance', children: [(0, jsx_runtime_1.jsx)(VerifiedUser_1.default, { fontSize: "inherit" }), cardExpanded || !route.tags?.length ? ((0, jsx_runtime_1.jsx)(Card_1.CardLabelTypography, { type: "icon", children: t(`main.tags.insurable`) })) : null] }) })) : null, route.tags?.length ? ((0, jsx_runtime_1.jsx)(RecommendedTagTooltip, { children: (0, jsx_runtime_1.jsx)(Card_1.CardLabel, { type: active ? 'active' : undefined, children: (0, jsx_runtime_1.jsx)(Card_1.CardLabelTypography, { children: t(`main.tags.${route.tags[0].toLowerCase()}`) }) }) })) : null] })) : null, (0, jsx_runtime_1.jsxs)(material_1.Box, { display: "flex", justifyContent: "space-between", alignItems: "start", children: [(0, jsx_runtime_1.jsx)(Token_1.Token, { token: token, step: !cardExpanded ? route.steps[0] : undefined }), !expanded ? ((0, jsx_runtime_1.jsx)(Card_1.CardIconButton, { onClick: handleExpand, size: "small", children: cardExpanded ? (0, jsx_runtime_1.jsx)(ExpandLess_1.default, {}) : (0, jsx_runtime_1.jsx)(ExpandMore_1.default, {}) })) : null] }), (0, jsx_runtime_1.jsx)(material_1.Collapse, { timeout: 225, in: cardExpanded, mountOnEnter: true, unmountOnExit: true, children: route.steps.map((step) => ((0, jsx_runtime_1.jsx)(StepActions_1.StepActions, { step: step, mt: 2 }, step.id))) }), (0, jsx_runtime_1.jsx)(RouteCardEssentials_1.RouteCardEssentials, { route: route })] }));
    return subvariant === 'refuel' || variant === 'cardless' ? (cardContent) : ((0, jsx_runtime_1.jsx)(Card_1.Card, { variant: active ? 'selected' : 'default', selectionColor: "secondary", indented: true, ...other, children: cardContent }));
};
exports.RouteCard = RouteCard;
const InsuranceTooltip = ({ insuredAmount, insuredTokenSymbol, children }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    return ((0, jsx_runtime_1.jsx)(material_1.Tooltip, { title: (0, jsx_runtime_1.jsxs)(material_1.Box, { component: "span", children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { fontSize: 12, fontWeight: "500", children: (0, jsx_runtime_1.jsx)(react_i18next_1.Trans, { i18nKey: "insurance.insure", values: {
                            amount: insuredAmount,
                            tokenSymbol: insuredTokenSymbol,
                        }, components: [(0, jsx_runtime_1.jsx)("strong", {})] }) }), (0, jsx_runtime_1.jsxs)(material_1.Box, { sx: {
                        listStyleType: 'disc',
                        pl: 2,
                    }, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { fontSize: 12, fontWeight: "500", display: "list-item", children: t('insurance.bridgeExploits') }), (0, jsx_runtime_1.jsx)(material_1.Typography, { fontSize: 12, fontWeight: "500", display: "list-item", children: t('insurance.slippageError') })] })] }), placement: "top", enterDelay: 400, arrow: true, children: children }));
};
const RecommendedTooltip = ({ children, }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    return ((0, jsx_runtime_1.jsx)(material_1.Tooltip, { title: t('tooltip.recommended'), placement: "top", enterDelay: 400, arrow: true, children: children }));
};
