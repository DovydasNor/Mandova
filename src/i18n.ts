import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en/translation.json';
import lt from './locales/lt/translation.json';

// Get saved language from localStorage or use default
const savedLanguage = localStorage.getItem('selectedLanguage') || 'lt';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      lt: { translation: lt },
    },
    lng: savedLanguage, // use saved language or default
    fallbackLng: 'lt',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
