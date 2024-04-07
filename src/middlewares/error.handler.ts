import type { Request, Response, NextFunction } from "express";
import { ValidationError } from "yup";

export const modelErrorHandler = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  if (error instanceof ValidationError) {
    response.status(400).json({
      description: "Model validation error",
      field_error: error.path,
      message: error.message,
      stack: error.stack,
    });
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
