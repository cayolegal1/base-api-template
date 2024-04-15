import type { ErrorConstructor } from "@custom-types/error.type";

export class CustomError extends Error {
  name: string;
  statusCode: number;
  constructor({ message, statusCode = 500, name }: ErrorConstructor) {
    super(message);
    Object.assign(this, { name, statusCode });
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
