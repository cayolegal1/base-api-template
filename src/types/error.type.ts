export type ErrorResponse = {
  errors?: Record<string, string>;
  message: string;
  stack?: string;
};

export type ErrorConstructor = {
  message?: string;
  name?: string;
  stack?: string;
  statusCode?: number;
};
