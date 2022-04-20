import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import languageDetector from 'i18next-browser-languagedetector';

import translationAR from './local/ar.json';
import translationEN from './local/en.json';

const resources = {
  ar: {
    translation: translationAR,
  },
  en: {
    translation: translationEN,
  },
};

i18n
  .use(languageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'ar',
    react: { useSuspense: false },
  });

export default i18n;
