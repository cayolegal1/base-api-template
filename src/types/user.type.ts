export type UserRole = "admin" | "guest";

export type JwtPayload = {
  id: number;
  role: UserRole,
  expiresIn?: string;
};
