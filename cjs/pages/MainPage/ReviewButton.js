"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_hook_form_1 = require("react-hook-form");
const react_i18next_1 = require("react-i18next");
const react_router_dom_1 = require("react-router-dom");
const BaseTransactionButton_1 = require("../../components/BaseTransactionButton");
const hooks_1 = require("../../hooks");
const providers_1 = require("../../providers");
const stores_1 = require("../../stores");
const utils_1 = require("../../utils");
const ReviewButton = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { isValid, isValidating } = (0, react_hook_form_1.useFormState)();
    const setExecutableRoute = (0, stores_1.useSetExecutableRoute)();
    const { subvariant } = (0, providers_1.useWidgetConfig)();
    const splitState = (0, stores_1.useSplitSubvariantStore)((state) => state.state);
    const { routes } = (0, hooks_1.useRoutes)();
    const currentRoute = routes?.[0];
    const handleClick = async () => {
        if (currentRoute) {
            setExecutableRoute(currentRoute);
            navigate(utils_1.navigationRoutes.transactionExecution, {
                state: { routeId: currentRoute.id },
            });
        }
    };
    const getButtonText = () => {
        if (currentRoute) {
            switch (subvariant) {
                case 'nft':
                    return t(`button.reviewPurchase`);
                case 'refuel':
                    return t(`button.reviewBridge`);
                default:
                    const transactionType = currentRoute.fromChainId === currentRoute.toChainId
                        ? 'Swap'
                        : 'Bridge';
                    return t(`button.review${transactionType}`);
            }
        }
        else {
            switch (subvariant) {
                case 'nft':
                    return t(`button.buy`);
                case 'refuel':
                    return t(`button.getGas`);
                case 'split':
                    if (splitState) {
                        return t(`button.${splitState}`);
                    }
                    return t(`button.exchange`);
                default:
                    return t(`button.exchange`);
            }
        }
    };
    return ((0, jsx_runtime_1.jsx)(BaseTransactionButton_1.BaseTransactionButton, { text: getButtonText(), onClick: handleClick, disabled: currentRoute && (isValidating || !isValid) }));
};
exports.ReviewButton = ReviewButton;
