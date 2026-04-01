import * as yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "@/utils/constants";
import { SubmitHandler } from "react-hook-form";

import Form from "@/components/UI/Form/Form";
import { AuthFormsContainer } from "@/pages/Auth/SignIn/SignInStyled";
import { register } from "@/APIs/auth";
import { useState } from "react";
import { AppError } from "@/errors/appError";

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
  const location = useLocation();

  const [regError, setRegError] = useState("");

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
      await register(data.email, data.password);

      navigate(location.state?.from ?? ROUTES.home);
    } catch (e) {
      if (e instanceof AppError) {
        setRegError(e.message);
      } else {
        setRegError("Something went wrong, please try again");
      }
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
      {regError && <div style={{ color: "red" }}>{regError}</div>}
    </AuthFormsContainer>
  );
};

export default SignUp;
