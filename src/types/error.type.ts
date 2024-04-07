export type ErrorResponse = {
  description: string;
  stack: string;
  field_error?: string;
  message?: string;
  errors?: string
}