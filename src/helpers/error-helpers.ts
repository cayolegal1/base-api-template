import { ValidationError } from "yup";

export const getErrors = (error: ValidationError) => {
  const responseErrors: Record<string, string> = {};
  for (const err of error.inner) {
    responseErrors[err.path] = err.message;
  }

  return responseErrors;
};
