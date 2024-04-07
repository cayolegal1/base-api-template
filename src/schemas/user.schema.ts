import * as Yup from "yup";
import { requiredMessage, invalidEmailMessage } from "src/constants";

export const userSchema = Yup.object().shape({
  name: Yup.string().required(requiredMessage),
  email: Yup.string().email(invalidEmailMessage).required(requiredMessage),
  password: Yup.string().required(requiredMessage),
});