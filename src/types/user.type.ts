export type UserRole = "admin" | "guest";

export type JwtPayload = {
  id: string;
  role: UserRole,
  expiresIn?: string;
};
