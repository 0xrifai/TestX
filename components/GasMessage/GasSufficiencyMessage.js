import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import EvStationIcon from '@mui/icons-material/EvStation';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { WarningMessageCard, WarningMessageCardTitle, } from './GasMessage.style';
export const GasSufficiencyMessage = ({ insufficientGas, }) => {
    const { t } = useTranslation();
    return (_jsxs(WarningMessageCard, { children: [_jsxs(WarningMessageCardTitle, { display: "flex", alignItems: "center", px: 2, pt: 2, children: [_jsx(EvStationIcon, { sx: {
                            marginRight: 1,
                        } }), _jsx(Typography, { variant: "body2", fontWeight: 700, children: t(`warning.title.insufficientGas`) })] }), _jsx(Typography, { variant: "body2", px: 2, pt: 1, children: t(`warning.message.insufficientGas`) }), insufficientGas?.map((item, index) => (_jsx(Typography
            // eslint-disable-next-line react/no-array-index-key
            , { variant: "body2", px: 2, pb: insufficientGas?.length - 1 === index ? 2 : 0, pt: 0.5, children: t(`main.tokenOnChainAmount`, {
                    amount: item.insufficientAmount?.toString(),
                    tokenSymbol: item.token.symbol,
                    chainName: item.chain?.name,
                }) }, index)))] }));
};
