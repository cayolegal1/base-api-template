import type { Request, Response, NextFunction } from "express";
import { i18n } from "src/config";

export const internacionalizationHandler = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const lang = (req.headers["lang"] as string) || "es";
  i18n.setLocale(lang);
  next();
};