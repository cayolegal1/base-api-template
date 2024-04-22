import jwt from "jsonwebtoken";
import { config } from "src/config";
import { CustomError } from "src/utils/errors";
import type { JwtPayload } from "src/types";

export const createToken = ({
  user,
  expiresIn = "1d",
}: JwtPayload): string => {

  const { id, role } = user;

  if (!id || !role) throw new CustomError({ internalMessage: "JWT payload not completed" });

  const token = jwt.sign({ id, role }, config.SECRET_KEY, { expiresIn });

  return token;
};