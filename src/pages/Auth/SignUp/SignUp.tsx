import * as yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "@/utils/constants";
import { SubmitHandler } from "react-hook-form";

import Form from "@/components/UI/Form/Form";
import { AuthFormsContainer } from "@/pages/Auth/SignIn/SignInStyled";
import { useState } from "react";
import { mapErrorToMessageSafe } from "@/errors/errorMapper";
import { registerUserWithProfile } from "@/services/registerUserWithProfile";

const signUpSchema = yup.object({
  name: yup.string().required("Name field is required."),
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

const formFields: Array<FormFieldsT> = [
  {
    label: "Name",
    inputType: "text",
    inputId: "registerName",
    registerName: "name",
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

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [regError, setRegError] = useState("");

  const onSubmit: SubmitHandler<InputsT> = async (data) => {
    try {
      await registerUserWithProfile(data);

      navigate(location.state?.from ?? ROUTES.home);
    } catch (e) {
      setRegError(mapErrorToMessageSafe(e));
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
