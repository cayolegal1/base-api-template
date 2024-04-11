import { STATUS_CODE } from "src/constants";

export type ErrorResponse = {
  errors?: Record<string, string>;
  message: string;
  stack: string;
};

export type ErrorConstructor = {
  isInternational?: boolean;
  message: string;
  name: string;
  stack?: string;
  statusCode: typeof STATUS_CODE[keyof typeof STATUS_CODE];
};
