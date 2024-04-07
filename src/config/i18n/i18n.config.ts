import i18nextLib from "i18n";
import path from "path";
export const i18n = i18nextLib;

i18n.configure({
  locales: ['en', 'es'],
  directory: path.join(__dirname, 'locales'),
  header: "lang",
  queryParameter: "lang",
  extension: ".json",
  parser: JSON
});
