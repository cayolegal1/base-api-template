import type { ErrorConstructor } from "@custom-types/error.type";

export abstract class BaseError extends Error {
  constructor({ message, statusCode, name }: ErrorConstructor) {
    super(message);
    Object.assign(this, { name, statusCode });
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
