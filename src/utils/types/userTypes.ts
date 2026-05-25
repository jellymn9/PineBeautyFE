import * as yup from "yup";
import { signInSchema, signUpSchema } from "../schemas/userSchema";

export type SignInInputsT = yup.InferType<typeof signInSchema>;

export type SignUpInputsT = yup.InferType<typeof signUpSchema>;
