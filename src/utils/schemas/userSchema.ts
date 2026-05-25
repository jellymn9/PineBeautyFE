import * as yup from "yup";

export const signInSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email format.")
    .required("Email is required."),
  password: yup.string().required("Password is required."),
});

export const signUpSchema = yup.object({
  name: yup.string().required("Name field is required."),
  email: yup.string().email().required("Email field is required."),
  password: yup.string().required("Password is required"),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
});
