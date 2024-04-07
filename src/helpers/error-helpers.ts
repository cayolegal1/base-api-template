export const getErrors = (errors: string[]) => {
  const responseErrors: Record<string, string> = {};
  for (const err of errors) {
    responseErrors[err.split(' ')[0]] = err;
  }

  return responseErrors;
};
