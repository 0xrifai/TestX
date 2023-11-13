import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import LinkRoundedIcon from '@mui/icons-material/LinkRounded';
import { Box, Link, Typography } from '@mui/material';
import { useProcessMessage } from '../../hooks';
import { CircularProgress } from './CircularProgress';
import { LinkButton } from './StepProcess.style';
export const StepProcess = ({ step, process }) => {
    const { title, message } = useProcessMessage(step, process);
    return (_jsxs(Box, { px: 2, py: 1, children: [_jsxs(Box, { sx: {
                    display: 'flex',
                    alignItems: 'center',
                }, children: [_jsx(CircularProgress, { process: process }), _jsx(Typography, { mx: 2, flex: 1, fontSize: 14, fontWeight: process.error ? 600 : 400, children: title }), process.txLink ? (_jsx(LinkButton, { size: "small", edge: "end", LinkComponent: Link, href: process.txLink, target: "_blank", rel: "nofollow noreferrer", children: _jsx(LinkRoundedIcon, {}) })) : null] }), message ? (_jsx(Typography, { ml: 6, fontSize: 14, fontWeight: 500, color: "text.secondary", children: message })) : null] }));
};
