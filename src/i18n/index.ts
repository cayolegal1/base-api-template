import i18nextLib from "i18n";
import path from "path";
export const i18n = i18nextLib;
import { userGlobalMessages } from "./messages";

i18n.configure({
  defaultLocale: "es",
  directory: path.join(__dirname, 'locales'),
  extension: ".json",
  header: "lang",
  locales: ['en', 'es'],
  parser: JSON,
  queryParameter: "lang",
});


export const globalMessage = {
  ...userGlobalMessages,
};