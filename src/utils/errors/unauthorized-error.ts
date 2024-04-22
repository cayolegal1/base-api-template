import { CustomError } from "./base-error";
import { STATUS_CODE } from "../constants";

export class UnauthorizedError extends CustomError {
  constructor({message = ""} = {}) {
    super({
      statusCode: STATUS_CODE.UNAUTHORIZED,
      message: message || "Not authorized for this resource",
      name: "Unauthorized Error",
    });
  }
}