import { ValidationError } from "yup";
import { i18n } from "src/config";

export const getErrors = (error: ValidationError) => {
  const responseErrors: Record<string, string> = {};
  for (const err of error.inner) {
    const message = i18n.__(err.message);
    responseErrors[err.path] = message;
  }

  return responseErrors;
};
