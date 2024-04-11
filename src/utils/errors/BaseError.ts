import type { ErrorConstructor } from "@custom-types/error.type";

export class CustomError extends Error {
  name: string;
  statusCode: number;
  hasI18nSupport: boolean;
  constructor({ message, statusCode = 500, name, hasI18nSupport = false }: ErrorConstructor) {
    super(message);
    Object.assign(this, { name, statusCode, hasI18nSupport });
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
