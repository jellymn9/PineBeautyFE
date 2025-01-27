import * as yup from "yup";
import { SubmitHandler } from "react-hook-form";

import { AuthFormsContainer } from "./SignInStyled";
import Form from "../../../components/Form/Form";

const signInSchema = yup.object({
  username: yup
    .string()
    .required("Username field is required.")
    .min(4, "Username must be at least 4 characters.")
    .max(12, "Username must be at most 12 characters."),
  password: yup.string().required("Password is required"),
});

type InputsT = yup.InferType<typeof signInSchema>;

type FormFieldsT = {
  label: string;
  inputType: "text" | "password";
  inputId: string;
  registerName: keyof InputsT;
};

function SignIn() {
  const onSubmit: SubmitHandler<InputsT> = (data) => console.log(data);

  const formFields: Array<FormFieldsT> = [
    {
      label: "Username",
      inputType: "text",
      inputId: "loginUsername",
      registerName: "username",
    },
    {
      label: "Password",
      inputType: "password",
      inputId: "loginPassword",
      registerName: "password",
    },
  ];

  return (
    <AuthFormsContainer>
      <Form<InputsT>
        schema={signInSchema}
        buttonText="Sign in"
        heading="Sing in"
        formFields={formFields}
        onSubmit={onSubmit}
      />
    </AuthFormsContainer>
  );
}

export default SignIn;
