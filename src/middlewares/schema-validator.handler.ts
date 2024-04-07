import {type Request, type Response, type NextFunction } from "express";
import { type ObjectSchema } from "yup";


export const modelValidator = <T = unknown>(schema: ObjectSchema<T>, property: keyof Request<T>) => {
  return async (request: Request<T>, _response: Response, next: NextFunction) => {
    try {
      const data = request[property];
      await schema.validate(data);
      next();
    } catch(error) {
      next(error);
    }
  };
};