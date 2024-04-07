import type { Request, Response, NextFunction } from "express";
import type { ObjectSchema } from "yup";

export const modelValidator = <T = unknown>(
  schema: ObjectSchema<T>,
  property: keyof Request<T>,
) => {
  return async (
    req: Request<T>,
    _response: Response,
    next: NextFunction,
  ) => {
    try {
      const data = req[property];
      await schema.validate(data, { abortEarly: false });
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
    req: Request<T>,
    _response: Response,
    next: NextFunction,
  ) => {
    try {
      const data = req[property];
      const testedValue = {
        [field]: data[field],
      };

      await schema.validateAt(field as string, testedValue, { abortEarly: false });
      next();
    } catch (error) {
      next(error);
    }
  };
};