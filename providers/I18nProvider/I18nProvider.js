import { jsx as _jsx } from "react/jsx-runtime";
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { useMemo } from 'react';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import * as supportedLanguages from '../../i18n';
import { useSettings } from '../../stores';
import { deepMerge } from '../../utils';
import { isItemAllowed, useWidgetConfig } from '../WidgetProvider';
export const I18nProvider = ({ children, }) => {
    const { languageResources, languages, disableLanguageDetector } = useWidgetConfig();
    const { language } = useSettings(['language']);
    const i18n = useMemo(() => {
        let resources = Object.keys(supportedLanguages)
            .filter((lng) => isItemAllowed(lng, languages))
            .reduce((resources, lng) => {
            resources[lng] = {
                translation: languageResources?.[lng]
                    ? deepMerge(supportedLanguages[lng], languageResources[lng])
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
        let i18n = i18next.createInstance({
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
            i18n = i18n.use(LanguageDetector);
        }
        i18n.use(initReactI18next).init();
        return i18n;
    }, [disableLanguageDetector, language, languageResources, languages]);
    return _jsx(I18nextProvider, { i18n: i18n, children: children });
};
