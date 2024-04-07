import i18nextLib from "i18next";
import Backend from "i18next-node-fs-backend";
import { LanguageDetector } from "i18next-http-middleware";
import { englishTranslation, spanishTranslation } from "./locales";
import { config } from "../environment.config";

export const i18n = i18nextLib;

i18n
  .use(Backend)
  .use(LanguageDetector)
  .init({
    resources: { ...englishTranslation, ...spanishTranslation },
    fallbackLng: "en",
    preload: ["es", "en"],
    supportedLngs: ["es", "en"],
    debug: config.NODE_ENV !== "production",
  },
  (err) => {
    if (err) console.error(err);
  }
);
