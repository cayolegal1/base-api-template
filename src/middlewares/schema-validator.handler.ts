import {type Request, type Response, type NextFunction } from "express";
import { type ObjectSchema } from "yup";


export const schemaValidator = <T = unknown>(schema: ObjectSchema<T>, property: keyof Request<T>) => {
  return async (request: Request<T>, response: Response, next: NextFunction) => {
    console.log({request: request.body})
    const data = request[property];
    await schema.validate(data);
    next();
  };
};