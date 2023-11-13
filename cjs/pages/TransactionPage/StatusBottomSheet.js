"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusBottomSheet = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Done_1 = require("@mui/icons-material/Done");
const ErrorRounded_1 = require("@mui/icons-material/ErrorRounded");
const InfoRounded_1 = require("@mui/icons-material/InfoRounded");
const WarningRounded_1 = require("@mui/icons-material/WarningRounded");
const material_1 = require("@mui/material");
const react_1 = require("react");
const react_hook_form_1 = require("react-hook-form");
const react_i18next_1 = require("react-i18next");
const BottomSheet_1 = require("../../components/BottomSheet");
const Token_1 = require("../../components/Token");
const hooks_1 = require("../../hooks");
const providers_1 = require("../../providers");
const stores_1 = require("../../stores");
const utils_1 = require("../../utils");
const StatusBottomSheet_style_1 = require("./StatusBottomSheet.style");
const StatusBottomSheet = ({ status, route, }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const { navigateBack, navigate } = (0, hooks_1.useNavigateBack)();
    const ref = (0, react_1.useRef)(null);
    const { getChainById } = (0, hooks_1.useChains)();
    const { setValue } = (0, react_hook_form_1.useFormContext)();
    const { subvariant, contractComponent, contractSecondaryComponent, contractCompactComponent, } = (0, providers_1.useWidgetConfig)();
    const toToken = {
        ...(route.steps.at(-1)?.execution?.toToken ?? route.toToken),
        amount: route.steps.at(-1)?.execution?.toAmount ??
            route.steps.at(-1)?.estimate.toAmount ??
            route.toAmount,
    };
    const { token, refetch, refetchNewBalance, refetchAllBalances } = (0, hooks_1.useTokenBalance)(toToken, route.toAddress);
    const clearFromAmount = () => {
        refetchAllBalances();
        setValue(providers_1.FormKey.FromAmount, '');
        setValue(providers_1.FormKey.ToAmount, '');
    };
    const handleDone = () => {
        clearFromAmount();
        navigateBack();
    };
    const handlePartialDone = () => {
        clearFromAmount();
        if (toToken.chainId !== route.toToken.chainId &&
            toToken.address !== route.toToken.address) {
            setValue(providers_1.FormKey.FromAmount, (0, utils_1.formatTokenAmount)(toToken.amount, toToken.decimals), { shouldTouch: true });
            setValue(providers_1.FormKey.FromChain, toToken.chainId, { shouldTouch: true });
            setValue(providers_1.FormKey.FromToken, toToken.address, { shouldTouch: true });
            setValue(providers_1.FormKey.ToChain, route.toToken.chainId, {
                shouldTouch: true,
            });
            setValue(providers_1.FormKey.ToToken, route.toToken.address, {
                shouldTouch: true,
            });
        }
        navigateBack();
    };
    const handleClose = () => {
        clearFromAmount();
        ref.current?.close();
    };
    const handleSeeDetails = () => {
        handleClose();
        navigate(utils_1.navigationRoutes.transactionDetails, {
            state: { routeId: route.id },
            replace: true,
        });
    };
    const transactionType = route.fromChainId === route.toChainId ? 'swap' : 'bridge';
    let title;
    let primaryMessage;
    let secondaryMessage;
    let handlePrimaryButton = handleDone;
    switch (status) {
        case stores_1.RouteExecutionStatus.Done: {
            title =
                subvariant === 'nft'
                    ? t('success.title.purchaseSuccessful')
                    : t(`success.title.${transactionType}Successful`);
            if (token) {
                primaryMessage = t('success.message.exchangeSuccessful', {
                    amount: (0, utils_1.formatTokenAmount)(token.amount),
                    tokenSymbol: token.symbol,
                    chainName: getChainById(token.chainId)?.name,
                    walletAddress: (0, utils_1.shortenAddress)(route.toAddress),
                });
            }
            handlePrimaryButton = handleDone;
            break;
        }
        case stores_1.RouteExecutionStatus.Done | stores_1.RouteExecutionStatus.Partial: {
            title = t(`success.title.${transactionType}PartiallySuccessful`);
            primaryMessage = t('success.message.exchangePartiallySuccessful', {
                tool: route.steps.at(-1)?.toolDetails.name,
                tokenSymbol: route.steps.at(-1)?.action.toToken.symbol,
            });
            if (token) {
                secondaryMessage = t('success.message.exchangeSuccessful', {
                    amount: (0, utils_1.formatTokenAmount)(token.amount),
                    tokenSymbol: token.symbol,
                    chainName: getChainById(token.chainId)?.name,
                    walletAddress: (0, utils_1.shortenAddress)(route.toAddress),
                });
            }
            handlePrimaryButton = handlePartialDone;
            break;
        }
        case stores_1.RouteExecutionStatus.Done | stores_1.RouteExecutionStatus.Refunded: {
            title = t('success.title.refundIssued');
            primaryMessage = t('success.message.exchangePartiallySuccessful', {
                tool: route.steps.at(-1)?.toolDetails.name,
                tokenSymbol: route.steps.at(-1)?.action.toToken.symbol,
            });
            if (token) {
                secondaryMessage = t('success.message.exchangeSuccessful', {
                    amount: (0, utils_1.formatTokenAmount)(token.amount),
                    tokenSymbol: token.symbol,
                    chainName: getChainById(token.chainId)?.name,
                    walletAddress: (0, utils_1.shortenAddress)(route.toAddress),
                });
            }
            break;
        }
        case stores_1.RouteExecutionStatus.Failed: {
            const step = route.steps.find((step) => step.execution?.status === 'FAILED');
            const process = step?.execution?.process.find((process) => process.status === 'FAILED');
            if (!step || !process) {
                break;
            }
            const processMessage = (0, hooks_1.getProcessMessage)(t, getChainById, step, process);
            title = processMessage.title;
            primaryMessage = processMessage.message;
            handlePrimaryButton = handleClose;
            break;
        }
        default:
            break;
    }
    (0, react_1.useEffect)(() => {
        const hasSuccessFlag = (0, utils_1.hasEnumFlag)(status, stores_1.RouteExecutionStatus.Done);
        if ((hasSuccessFlag || (0, utils_1.hasEnumFlag)(status, stores_1.RouteExecutionStatus.Failed)) &&
            !ref.current?.isOpen()) {
            if (hasSuccessFlag) {
                refetchNewBalance();
                refetch();
            }
            ref.current?.open();
        }
    }, [refetch, refetchNewBalance, status]);
    const showContractComponent = subvariant === 'nft' && (0, utils_1.hasEnumFlag)(status, stores_1.RouteExecutionStatus.Done);
    return ((0, jsx_runtime_1.jsx)(BottomSheet_1.BottomSheet, { ref: ref, children: (0, jsx_runtime_1.jsxs)(material_1.Box, { p: 3, children: [!showContractComponent ? ((0, jsx_runtime_1.jsx)(StatusBottomSheet_style_1.CenterContainer, { children: (0, jsx_runtime_1.jsxs)(StatusBottomSheet_style_1.IconCircle, { status: status, mb: 1, children: [status === stores_1.RouteExecutionStatus.Idle ? ((0, jsx_runtime_1.jsx)(InfoRounded_1.default, { color: "primary" })) : null, status === stores_1.RouteExecutionStatus.Done ? ((0, jsx_runtime_1.jsx)(Done_1.default, { color: "success" })) : null, (0, utils_1.hasEnumFlag)(status, stores_1.RouteExecutionStatus.Partial) ||
                                (0, utils_1.hasEnumFlag)(status, stores_1.RouteExecutionStatus.Refunded) ? ((0, jsx_runtime_1.jsx)(WarningRounded_1.default, { color: "warning" })) : null, (0, utils_1.hasEnumFlag)(status, stores_1.RouteExecutionStatus.Failed) ? ((0, jsx_runtime_1.jsx)(ErrorRounded_1.default, { color: "error" })) : null] }) })) : null, (0, jsx_runtime_1.jsx)(StatusBottomSheet_style_1.CenterContainer, { children: (0, jsx_runtime_1.jsx)(material_1.Typography, { py: 1, fontSize: 18, fontWeight: 700, children: title }) }), showContractComponent ? (contractCompactComponent ||
                    contractSecondaryComponent ||
                    contractComponent) : ((0, jsx_runtime_1.jsx)(StatusBottomSheet_style_1.CenterContainer, { children: (0, utils_1.hasEnumFlag)(status, stores_1.RouteExecutionStatus.Done) ? ((0, jsx_runtime_1.jsx)(Token_1.Token, { token: toToken, py: 1, disableDescription: true })) : null })), !showContractComponent ? ((0, jsx_runtime_1.jsx)(material_1.Typography, { py: 1, children: primaryMessage })) : null, secondaryMessage ? ((0, jsx_runtime_1.jsx)(material_1.Typography, { py: 1, children: secondaryMessage })) : null, (0, jsx_runtime_1.jsx)(material_1.Box, { mt: 2, children: (0, jsx_runtime_1.jsxs)(material_1.Button, { variant: "contained", fullWidth: true, onClick: handlePrimaryButton, children: [status === stores_1.RouteExecutionStatus.Idle ? t('button.ok') : null, (0, utils_1.hasEnumFlag)(status, stores_1.RouteExecutionStatus.Done)
                                ? t('button.done')
                                : null, status === stores_1.RouteExecutionStatus.Failed
                                ? t('button.seeDetails')
                                : null] }) }), (0, utils_1.hasEnumFlag)(status, stores_1.RouteExecutionStatus.Done) ? ((0, jsx_runtime_1.jsx)(material_1.Box, { mt: 2, children: (0, jsx_runtime_1.jsx)(material_1.Button, { variant: "text", onClick: handleSeeDetails, fullWidth: true, children: t('button.seeDetails') }) })) : null] }) }));
};
exports.StatusBottomSheet = StatusBottomSheet;
