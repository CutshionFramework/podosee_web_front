import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranslation from "./locales/en/translation.json";
import krTranslation from "./locales/kr/translation.json";

i18n
  .use(LanguageDetector) // 브라우저에서 언어 감지
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      kr: { translation: krTranslation },
    },
    lng: localStorage.getItem("i18nextLng") || "kr",
    fallbackLng: "en",
    interpolation: { escapeValue: false }, // XSS 방지
  });

export default i18n;
