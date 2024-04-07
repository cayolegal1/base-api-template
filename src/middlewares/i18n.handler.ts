import type { Request, Response, NextFunction } from "express";
import { i18n } from "src/config";

export const i18nHandler = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const lang = (req.headers["lang"] as string);
  if (lang) i18n.setLocale(lang);
  next();
};