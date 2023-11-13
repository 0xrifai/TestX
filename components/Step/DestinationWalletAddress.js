import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import LinkRoundedIcon from '@mui/icons-material/LinkRounded';
import WalletIcon from '@mui/icons-material/Wallet';
import { Box, Link, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { CircularIcon } from './CircularProgress.style';
import { LinkButton } from './StepProcess.style';
export const DestinationWalletAddress = ({ step, toAddress, toAddressLink }) => {
    const { t } = useTranslation();
    const isDone = step.execution?.status === 'DONE';
    return (_jsx(Box, { px: 2, py: 1, children: _jsxs(Box, { sx: {
                display: 'flex',
                alignItems: 'center',
            }, children: [_jsx(CircularIcon, { status: isDone ? 'DONE' : 'NOT_STARTED', children: _jsx(WalletIcon, { color: isDone ? 'success' : 'inherit', sx: {
                            position: 'absolute',
                            fontSize: '1rem',
                        } }) }), _jsx(Typography, { mx: 2, flex: 1, fontSize: 14, fontWeight: 400, children: isDone
                        ? t('main.sentToAddress', {
                            address: toAddress,
                        })
                        : t('main.sendToAddress', {
                            address: toAddress,
                        }) }), _jsx(LinkButton, { size: "small", edge: "end", LinkComponent: Link, href: toAddressLink, target: "_blank", rel: "nofollow noreferrer", children: _jsx(LinkRoundedIcon, {}) })] }) }));
};
