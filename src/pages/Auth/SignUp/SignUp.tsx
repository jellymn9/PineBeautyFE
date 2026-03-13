import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/utils/constants";
import { SubmitHandler } from "react-hook-form";

import Form from "@/components/UI/Form/Form";
import { AuthFormsContainer } from "@/pages/Auth/SignIn/SignInStyled";
import { register } from "@/APIs/auth";
import { useState } from "react";

const signUpSchema = yup.object({
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
  const navigate = useNavigate();

  const [isRegSuccess, setRegSuccess] = useState(true);

  const formFields: Array<FormFieldsT> = [
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

  const onSubmit: SubmitHandler<InputsT> = async (data) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      await register(data.email, data.password);
      setRegSuccess(true);

      navigate(ROUTES.home);
    } catch (_e) {
      setRegSuccess(false);
    }
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
      {!isRegSuccess && (
        <div style={{ color: "red" }}>User registration fails!</div>
      )}
    </AuthFormsContainer>
  );
};

export default SignUp;
