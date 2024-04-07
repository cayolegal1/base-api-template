import type { Request, Response, NextFunction, } from "express";
import type { ObjectSchema } from "yup";

export const modelValidator = <T>(
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