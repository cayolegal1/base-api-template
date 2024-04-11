import { STATUS_CODE } from "src/constants";
import { BaseError } from "./BaseError";

export class UnauthorizedError extends BaseError {
  constructor() {
    super({
      message: "You are not authorized for this resource",
      name: "Unauthorized",
      statusCode: STATUS_CODE.UNAUTHORIZED,
    });
  }
}
