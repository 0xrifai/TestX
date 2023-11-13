import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { WarningMessageCard, WarningMessageCardTitle, } from './GasMessage.style';
export const FundsSufficiencyMessage = () => {
    const { t } = useTranslation();
    return (_jsxs(WarningMessageCard, { display: "flex", children: [_jsx(WarningMessageCardTitle, { children: _jsx(WarningRoundedIcon, { sx: {
                        marginTop: 2,
                        marginLeft: 2,
                    } }) }), _jsx(Typography, { variant: "body2", px: 2, pb: 2, pt: 2, children: t(`warning.message.insufficientFunds`) })] }));
};
