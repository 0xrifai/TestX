import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import DoneIcon from '@mui/icons-material/Done';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import { darken } from '@mui/material/styles';
import { CircularIcon, CircularProgressPending, } from './CircularProgress.style';
export function CircularProgress({ process }) {
    return (_jsxs(CircularIcon, { status: process.status, substatus: process.substatus, children: [process.status === 'STARTED' || process.status === 'PENDING' ? (_jsx(CircularProgressPending, { size: 32, thickness: 3 })) : null, process.status === 'ACTION_REQUIRED' ? (_jsx(InfoRoundedIcon, { color: "info", sx: {
                    position: 'absolute',
                    fontSize: '1rem',
                } })) : null, process.status === 'DONE' &&
                (process.substatus === 'PARTIAL' || process.substatus === 'REFUNDED') ? (_jsx(WarningRoundedIcon, { sx: (theme) => ({
                    position: 'absolute',
                    fontSize: '1rem',
                    color: darken(theme.palette.warning.main, 0.32),
                }) })) : process.status === 'DONE' ? (_jsx(DoneIcon, { color: "success", sx: {
                    position: 'absolute',
                    fontSize: '1rem',
                } })) : null, process.status === 'FAILED' ? (_jsx(ErrorRoundedIcon, { color: "error", sx: {
                    position: 'absolute',
                    fontSize: '1rem',
                } })) : null] }));
}
