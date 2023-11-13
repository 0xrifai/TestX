"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageSelect = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const KeyboardArrowDown_1 = require("@mui/icons-material/KeyboardArrowDown");
const material_1 = require("@mui/material");
const react_i18next_1 = require("react-i18next");
const Card_1 = require("../../components/Card");
const Select_1 = require("../../components/Select");
const providers_1 = require("../../providers");
const stores_1 = require("../../stores");
const types_1 = require("../../types");
const LanguageSelect = () => {
    const { t, i18n } = (0, react_i18next_1.useTranslation)();
    const { languages, hiddenUI } = (0, providers_1.useWidgetConfig)();
    const setValue = (0, stores_1.useSettingsStore)((state) => state.setValue);
    const { language } = (0, stores_1.useSettings)(['language']);
    if (hiddenUI?.includes(types_1.HiddenUI.Language)) {
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
    return ((0, jsx_runtime_1.jsxs)(Card_1.Card, { mb: 2, children: [(0, jsx_runtime_1.jsx)(Card_1.CardTitle, { children: t(`language.title`) }), (0, jsx_runtime_1.jsx)(material_1.FormControl, { fullWidth: true, children: (0, jsx_runtime_1.jsx)(Select_1.Select, { MenuProps: { elevation: 2 }, value: value, onChange: handleChangeLanguage, IconComponent: KeyboardArrowDown_1.default, dense: true, children: filteredLanguages.map((lng) => {
                        return ((0, jsx_runtime_1.jsx)(material_1.MenuItem, { value: lng, children: t('language.name', { lng }) }, lng));
                    }) }) })] }));
};
exports.LanguageSelect = LanguageSelect;
