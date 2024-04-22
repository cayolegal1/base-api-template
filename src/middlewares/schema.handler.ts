import type { Request, Response, NextFunction, } from "express";
import type { ObjectSchema } from "yup";

type SchemaHandler <T>= {
  schema: ObjectSchema<T>,
  property: keyof Request<T>,
}

export const checkSchema = <T>(
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

export const checkSchemas = <T>(handlers: SchemaHandler<T>[]) => {
  return async (req: Request<T>, _response: Response, next: NextFunction) => {
    try {
      for (const handler of handlers) {
        checkSchema(handler.schema, handler.property);
      }

      next();
    } catch (error) {
      next(error);
    }
  };
};