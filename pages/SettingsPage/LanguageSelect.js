import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { FormControl, MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Card, CardTitle } from '../../components/Card';
import { Select } from '../../components/Select';
import { useWidgetConfig } from '../../providers';
import { useSettings, useSettingsStore } from '../../stores';
import { HiddenUI } from '../../types';
export const LanguageSelect = () => {
    const { t, i18n } = useTranslation();
    const { languages, hiddenUI } = useWidgetConfig();
    const setValue = useSettingsStore((state) => state.setValue);
    const { language } = useSettings(['language']);
    if (hiddenUI?.includes(HiddenUI.Language)) {
        return null;
    }
    const handleChangeLanguage = (event) => {
        const language = event.target.value;
        setValue('language', language);
        i18n.changeLanguage(language);
    };
    const filteredLanguages = Object.keys(i18n.store.data).sort();
    if (filteredLanguages.length <= 1) {
        return null;
    }
    const value = filteredLanguages.includes(language || i18n.resolvedLanguage || '')
        ? language || i18n.resolvedLanguage
        : languages?.default || languages?.allow?.[0];
    return (_jsxs(Card, { mb: 2, children: [_jsx(CardTitle, { children: t(`language.title`) }), _jsx(FormControl, { fullWidth: true, children: _jsx(Select, { MenuProps: { elevation: 2 }, value: value, onChange: handleChangeLanguage, IconComponent: KeyboardArrowDownIcon, dense: true, children: filteredLanguages.map((lng) => {
                        return (_jsx(MenuItem, { value: lng, children: t('language.name', { lng }) }, lng));
                    }) }) })] }));
};
