"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestinationWalletAddress = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const LinkRounded_1 = require("@mui/icons-material/LinkRounded");
const Wallet_1 = require("@mui/icons-material/Wallet");
const material_1 = require("@mui/material");
const react_i18next_1 = require("react-i18next");
const CircularProgress_style_1 = require("./CircularProgress.style");
const StepProcess_style_1 = require("./StepProcess.style");
const DestinationWalletAddress = ({ step, toAddress, toAddressLink }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const isDone = step.execution?.status === 'DONE';
    return ((0, jsx_runtime_1.jsx)(material_1.Box, { px: 2, py: 1, children: (0, jsx_runtime_1.jsxs)(material_1.Box, { sx: {
                display: 'flex',
                alignItems: 'center',
            }, children: [(0, jsx_runtime_1.jsx)(CircularProgress_style_1.CircularIcon, { status: isDone ? 'DONE' : 'NOT_STARTED', children: (0, jsx_runtime_1.jsx)(Wallet_1.default, { color: isDone ? 'success' : 'inherit', sx: {
                            position: 'absolute',
                            fontSize: '1rem',
                        } }) }), (0, jsx_runtime_1.jsx)(material_1.Typography, { mx: 2, flex: 1, fontSize: 14, fontWeight: 400, children: isDone
                        ? t('main.sentToAddress', {
                            address: toAddress,
                        })
                        : t('main.sendToAddress', {
                            address: toAddress,
                        }) }), (0, jsx_runtime_1.jsx)(StepProcess_style_1.LinkButton, { size: "small", edge: "end", LinkComponent: material_1.Link, href: toAddressLink, target: "_blank", rel: "nofollow noreferrer", children: (0, jsx_runtime_1.jsx)(LinkRounded_1.default, {}) })] }) }));
};
exports.DestinationWalletAddress = DestinationWalletAddress;
