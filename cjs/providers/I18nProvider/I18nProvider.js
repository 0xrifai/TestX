"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.I18nProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const i18next_1 = require("i18next");
const i18next_browser_languagedetector_1 = require("i18next-browser-languagedetector");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const supportedLanguages = require("../../i18n");
const stores_1 = require("../../stores");
const utils_1 = require("../../utils");
const WidgetProvider_1 = require("../WidgetProvider");
const I18nProvider = ({ children, }) => {
    const { languageResources, languages, disableLanguageDetector } = (0, WidgetProvider_1.useWidgetConfig)();
    const { language } = (0, stores_1.useSettings)(['language']);
    const i18n = (0, react_1.useMemo)(() => {
        let resources = Object.keys(supportedLanguages)
            .filter((lng) => (0, WidgetProvider_1.isItemAllowed)(lng, languages))
            .reduce((resources, lng) => {
            resources[lng] = {
                translation: languageResources?.[lng]
                    ? (0, utils_1.deepMerge)(supportedLanguages[lng], languageResources[lng])
                    : supportedLanguages[lng],
            };
            return resources;
        }, {});
        if (languageResources) {
            resources = Object.keys(languageResources).reduce((resources, lng) => {
                if (!resources[lng]) {
                    resources[lng] = {
                        translation: languageResources[lng],
                    };
                }
                return resources;
            }, resources);
        }
        let i18n = i18next_1.default.createInstance({
            lng: languages?.default || language,
            fallbackLng: resources.en
                ? 'en'
                : languages?.default ||
                    languages?.allow?.[0] ||
                    Object.keys(resources)?.[0],
            lowerCaseLng: true,
            interpolation: {
                escapeValue: false,
            },
            resources,
            detection: {
                caches: [],
            },
        });
        if (!language && !languages?.default && !disableLanguageDetector) {
            i18n = i18n.use(i18next_browser_languagedetector_1.default);
        }
        i18n.use(react_i18next_1.initReactI18next).init();
        return i18n;
    }, [disableLanguageDetector, language, languageResources, languages]);
    return (0, jsx_runtime_1.jsx)(react_i18next_1.I18nextProvider, { i18n: i18n, children: children });
};
exports.I18nProvider = I18nProvider;
