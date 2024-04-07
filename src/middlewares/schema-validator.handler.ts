import {type Request, type Response, type NextFunction } from "express";
import { type ObjectSchema } from "yup";


export const schemaValidator = <T = unknown>(schema: ObjectSchema<T>, property: keyof Request<T>) => {
  return async (request: Request<T>, response: Response, next: NextFunction) => {
    const data = request[property];
    const validation = await schema.validate(data);
    if (validation.error) {
      console.log({validation});
      next(validation.error);
    };

    next();
  };
};