import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import EvStationIcon from '@mui/icons-material/EvStation';
import { Box, Collapse, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useGasRefuel } from '../../hooks';
import { useSettings, useSettingsStore } from '../../stores';
import { InfoMessageCard, InfoMessageCardTitle, InfoMessageSwitch, } from './GasMessage.style';
export const GasRefuelMessage = (props) => {
    const { t } = useTranslation();
    const setValue = useSettingsStore((state) => state.setValue);
    const { enabledAutoRefuel } = useSettings(['enabledAutoRefuel']);
    const { enabled, chain, isLoading: isRefuelLoading } = useGasRefuel();
    const onChange = (_, checked) => {
        setValue('enabledAutoRefuel', checked);
    };
    const showGasRefuelMessage = chain && enabled && !isRefuelLoading;
    return (_jsx(Collapse, { timeout: 225, in: showGasRefuelMessage, unmountOnExit: true, mountOnEnter: true, children: _jsxs(InfoMessageCard, { ...props, children: [_jsxs(InfoMessageCardTitle, { display: "flex", alignItems: "center", justifyContent: "space-between", p: 2, children: [_jsxs(Box, { display: "flex", alignItems: "center", children: [_jsx(EvStationIcon, { sx: {
                                        marginRight: 1,
                                    } }), _jsx(Typography, { variant: "body2", fontWeight: 700, children: t(`info.title.autoRefuel`) })] }), _jsx(InfoMessageSwitch, { checked: enabledAutoRefuel, onChange: onChange })] }), _jsx(Collapse, { timeout: 225, in: enabledAutoRefuel, unmountOnExit: true, mountOnEnter: true, children: _jsx(Typography, { variant: "body2", px: 2, pb: 2, children: t(`info.message.autoRefuel`, {
                            chainName: chain?.name,
                        }) }) })] }) }));
};
