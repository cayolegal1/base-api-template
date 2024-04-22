import * as Yup from "yup";
import {
  requiredMessage,
  invalidEmailMessage,
  invalidIdMessage,
  invalidNameMessage,
  invalidRolMessage,
  userRoles
} from "src/utils/constants";

export const userSchema = Yup.object().shape({
  id: Yup.string().nullable(),
  name: Yup.string().required(requiredMessage).min(3, invalidNameMessage),
  role: Yup.string().oneOf(userRoles, invalidRolMessage).required(requiredMessage),
  email: Yup.string().email(invalidEmailMessage).required(requiredMessage),
  password: Yup.string().required(requiredMessage),
});

export const getUserSchema = Yup.object().shape({
  id: Yup.string()
    .required(requiredMessage)
    .test({
      name: "Numeric id",
      message: invalidIdMessage,
      test: value => !isNaN(parseInt(value)),
    }),
});
