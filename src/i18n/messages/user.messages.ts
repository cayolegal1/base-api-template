import { useTranslation } from "src/utils/constants/base.constants";

const required_message = useTranslation ? "required_message" : "This field is required";
const invalid_email_message = useTranslation ? "invalid_email_message" : "The email must be valid";
const invalid_id_message = useTranslation ? "invalid_id_message" : "Invalid id";
const invalid_name_message = useTranslation ? "invalid_name_message" : "Model validation error";
const unauthorized_message = useTranslation ? "unauthorizedMessage" : "You are not authorized for this resource";
const invalid_credentials = useTranslation ? "invalid_credentials" : "Invalid credentials";

export const userGlobalMessages = {
  required_message,
  invalid_email_message,
  invalid_id_message,
  invalid_name_message,
  unauthorized_message,
  invalid_credentials,
};


