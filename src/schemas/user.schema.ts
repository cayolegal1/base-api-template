import * as Yup from "yup";
import { requiredMessage, invalidEmailMessage } from "src/constants";

export const userSchema = Yup.object().shape({
  name: Yup.string().required(requiredMessage).min(3, "El nombre debe ser válido"),
  email: Yup.string().email(invalidEmailMessage).required(requiredMessage),
  password: Yup.string().required(requiredMessage),
});