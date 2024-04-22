import { ValidationError } from "yup";
import { CustomError } from "src/utils/errors";
import { getErrors } from "src/utils/helpers/error-helpers";
import { STATUS_CODE, isDevelopment } from "src/utils/constants";
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
      message: "Model validation error",
      stack: error.stack,
      errors: getErrors(error),
    };
    res.status(STATUS_CODE.BAD_REQUEST).json(response);
  } else {
    next(error);
  }
};

export const customErrorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (error instanceof CustomError) {
    const response: ErrorResponse = {
      message: error.message,
      stack: isDevelopment ? error.stack : undefined,
    };

    if (error.internalMessage) {
      console.error(error.internalMessage);
    }

    res.status(error.statusCode).json(response);
  } else {
    next();
  }
};

export const defaultErrorHandler = (
  error: Error,
  req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const response: ErrorResponse = {
    message: "Internal server error",
    stack: isDevelopment ? error.stack : undefined,
  };

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
      cookies: {
        ...req.cookies
      }
    },
  });

  next(error);
};
