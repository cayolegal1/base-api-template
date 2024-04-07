import type { Request, Response, NextFunction } from "express";
import type { ObjectSchema } from "yup";

export const modelValidator = <T = unknown>(
  schema: ObjectSchema<T>,
  property: keyof Request<T>,
) => {
  return async (
    request: Request<T>,
    _response: Response,
    next: NextFunction,
  ) => {
    try {
      const data = request[property];
      await schema.validate(data);
      next();
    } catch (error) {
      next(error);
    }
  };
};


export const fieldValidator = <T = unknown>(
  schema: ObjectSchema<T>,
  property: keyof Request<T>,
  field: keyof T,
) => {
  return async (
    request: Request<T>,
    _response: Response,
    next: NextFunction,
  ) => {
    try {
      const data = request[property];
      const testedValue = {
        [field]: data[field],
      };

      await schema.validateAt(field as string, testedValue);
      next();
    } catch (error) {
      next(error);
    }
  };
};