import { BaseError } from "./BaseError";
import { STATUS_CODE } from "src/utils/constants";
import type { ErrorConstructor } from "@custom-types/error.type";

export class UnauthorizedError extends BaseError {
  constructor({ message, hasI18nSupport }: ErrorConstructor = {}) {
    super({
      message: message || "You are not authorized for this resource",
      name: "Unauthorized",
      statusCode: STATUS_CODE.UNAUTHORIZED,
      hasI18nSupport,
    });
  }
}
