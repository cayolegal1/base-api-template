import { ValidationError } from "yup";
import { getErrors } from "@helpers/error-helpers";
import { STATUS_CODE } from "src/constants";
import { i18n } from "src/config";
import type { Request, Response, NextFunction } from "express";
import type { ErrorResponse } from "@custom-types/index";

export const modelErrorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (error instanceof ValidationError) {
    const response: ErrorResponse = {
      message: i18n.__("model_validation_error"),
      stack: error.stack,
      errors: getErrors(error)
    };
    res.status(STATUS_CODE.BAD_REQUEST).json(response);
  } else {
    next(error);
  }
};

export const defaultErrorHandler = (
  error: Error,
  req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const response: ErrorResponse = { message: "Internal server error", stack: error.stack };
  res.status(STATUS_CODE.SERVER_ERROR).json(response);
};

export const errorLogger = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.error({ error });
  console.error({
    req: {
      body: { ...req.body },
      params: { ...req.params },
      headers: { ...req.headers },
      url: req.url,
    },
  });

  next(error);
};
