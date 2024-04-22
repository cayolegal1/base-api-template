import jwt from "jsonwebtoken";
import { config } from "src/config";
import { CustomError } from "src/utils/errors";
import type { JwtPayload } from "src/types";

export const createToken = ({
  id,
  role,
  expiresIn = "1d",
}: JwtPayload): string => {
    
  if (!id || !role) throw new CustomError({ internalMessage: "JWT payload not complete" });

  const token = jwt.sign({ sub: id, role }, config.SECRET_KEY, { expiresIn });

  return token;
};