import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { SubmitHandler } from "react-hook-form";

import { routes as routesC } from "../../../utils/constants";
import { AuthFormsContainer } from "./SignInStyled";
import Form from "../../../components/Form/Form";
import { login } from "../../../APIs/auth";
import { setUserSession } from "../../../helpers/authHelper";

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
  const [isLoginError, setLoginError] = useState(false);

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<InputsT> = async (data) => {
    try {
      const token = await login(data.username, data.password);

      setUserSession(token);

      navigate(routesC.home);
    } catch (e) {
      setLoginError(true);
    }
  };

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
      {isLoginError && <div style={{ color: "red" }}>User login fails!</div>}
    </AuthFormsContainer>
  );
}

export default SignIn;
