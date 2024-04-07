export type ErrorResponse = {
  stack: string;
  message: string;
  errors?: Record<string, string>;
}