import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { FormControl, MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Card, CardTitle } from '../../components/Card';
import { Select } from '../../components/Select';
import { useSettings, useSettingsStore } from '../../stores';
export const GasPriceSelect = () => {
    const { t } = useTranslation();
    const setValue = useSettingsStore((state) => state.setValue);
    const { gasPrice } = useSettings(['gasPrice']);
    return (_jsxs(Card, { flex: 1, children: [_jsx(CardTitle, { children: t(`settings.gasPrice.title`) }), _jsx(FormControl, { fullWidth: true, children: _jsxs(Select, { MenuProps: { elevation: 2 }, value: gasPrice, onChange: (event) => setValue('gasPrice', event.target.value), IconComponent: KeyboardArrowDownIcon, dense: true, children: [_jsx(MenuItem, { value: "slow", children: t(`settings.gasPrice.slow`) }), _jsx(MenuItem, { value: "normal", children: t(`settings.gasPrice.normal`) }), _jsx(MenuItem, { value: "fast", children: t(`settings.gasPrice.fast`) })] }) })] }));
};
