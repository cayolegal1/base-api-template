import type { ErrorConstructor } from "@custom-types/error.type";

export class CustomError extends Error {
  
  name: string;
  statusCode: number;
  internalMessage?: string;

  constructor({
    message = "Internal server error",
    statusCode = 500,
    name,
    internalMessage,
  }: ErrorConstructor = {}) {

    super(message);

    Object.assign(this, { name, statusCode, internalMessage });
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }

  }
}
