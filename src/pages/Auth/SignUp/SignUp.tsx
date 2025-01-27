import * as yup from "yup";
import { SubmitHandler } from "react-hook-form";

import Form from "../../../components/Form/Form";
import { AuthFormsContainer } from "../SignIn/SignInStyled";

const signUpSchema = yup.object({
  username: yup
    .string()
    .required("Username field is required.")
    .min(4, "Username must be at least 4 characters.")
    .max(12, "Username must be at most 12 characters."),
  email: yup.string().email().required("Email field is required."),
  password: yup.string().required("Password is required"),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
});

type InputsT = yup.InferType<typeof signUpSchema>;

type FormFieldsT = {
  label: string;
  inputType: "text" | "email" | "password";
  inputId: string;
  registerName: keyof InputsT;
};

const SignUp = () => {
  const formFields: Array<FormFieldsT> = [
    {
      label: "Username",
      inputType: "text",
      inputId: "registerUsername",
      registerName: "username",
    },
    {
      label: "Email address",
      inputType: "email",
      inputId: "registerEmail",
      registerName: "email",
    },
    {
      label: "Password",
      inputType: "password",
      inputId: "registerPassword",
      registerName: "password",
    },
    {
      label: "Repeat password",
      inputType: "password",
      inputId: "registerRepeatPassword",
      registerName: "repeatPassword",
    },
  ];

  const onSubmit: SubmitHandler<InputsT> = (data) => {
    console.log("Form Data", data);
  };

  return (
    <AuthFormsContainer>
      <Form<InputsT>
        schema={signUpSchema}
        buttonText="Sign up"
        heading="Sing up"
        formFields={formFields}
        onSubmit={onSubmit}
      />
    </AuthFormsContainer>
  );
};

export default SignUp;
