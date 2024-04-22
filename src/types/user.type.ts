export type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
};

export type UserRole = "admin" | "guest" | "customer";

export type JwtDecodedUser = Pick<User, "id" | "role">;

export type JwtPayload = {
  user: JwtDecodedUser;
  expiresIn?: string;
};

