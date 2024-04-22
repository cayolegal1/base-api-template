import { Request, Response, NextFunction } from "express";
import { UnauthorizedError } from "src/utils/errors";
import type { User, UserRole } from "src/types";

export const checkRoleOrPermission = (...roles: UserRole[]) =>
  (req: Request, _res: Response, next: NextFunction) => {
    try {

      const user = req.user as User;
      const params = req.params;

      if (roles.includes(user.role)) {
        return next();
      } 

      if (req.baseUrl.includes("user") && params.id === user.id) {
        return next();
      }
      
      throw new UnauthorizedError();

    } catch (error) {
      next(error);
    }
};