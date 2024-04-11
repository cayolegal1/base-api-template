import type { ErrorConstructor } from "@custom-types/error.type";

export abstract class BaseError extends Error {
  hasI18nSupport: boolean;
  statusCode: number;
  constructor({ message, statusCode = 500, name, hasI18nSupport = false }: ErrorConstructor) {
    super(message);
    Object.assign(this, { name, statusCode, hasI18nSupport });
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
