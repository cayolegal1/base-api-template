import { ValidationError } from "yup";
import { getErrors } from "@helpers/error-helpers";
import type { Request, Response, NextFunction } from "express";
import type { ErrorResponse } from "@custom-types/index";

export const modelErrorHandler = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  if (error instanceof ValidationError) {
    const responseBody: ErrorResponse = {
      description: "Model validation error",
      stack: error.stack,
      message: error.message,
      errors: getErrors(error)
    };
    
    response.status(400).json(responseBody);
  } else {
    next(error);
  }
};

export const errorHandler = (
  error: Error,
  request: Request,
  response: Response,
  _next: NextFunction,
) => {
  response.status(500).json({
    message: error.message,
    stack: error.stack,
  });
};

export const errorLogger = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  console.error({ error });
  console.error({
    request: {
      body: { ...request.body },
      params: { ...request.params },
      headers: { ...request.headers },
      url: request.url,
    },
  });

  next(error);
};
