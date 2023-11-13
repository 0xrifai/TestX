import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Orders } from '@lifi/sdk';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { FormControl, MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Card, CardTitle } from '../../components/Card';
import { Select } from '../../components/Select';
import { useSettings, useSettingsStore } from '../../stores';
export const RoutePrioritySelect = () => {
    const { t } = useTranslation();
    const setValue = useSettingsStore((state) => state.setValue);
    const { routePriority } = useSettings(['routePriority']);
    const value = routePriority ?? '';
    return (_jsxs(Card, { children: [_jsx(CardTitle, { children: t(`settings.routePriority`) }), _jsx(FormControl, { fullWidth: true, children: _jsx(Select, { MenuProps: { elevation: 2 }, value: value, onChange: (event) => setValue('routePriority', event.target.value), IconComponent: KeyboardArrowDownIcon, dense: true, children: Orders.map((order) => {
                        const tag = t(`main.tags.${order.toLowerCase()}`);
                        const tagName = `${tag[0]}${tag.slice(1).toLowerCase()}`;
                        return (_jsx(MenuItem, { value: order, children: tagName }, order));
                    }) }) })] }));
};
