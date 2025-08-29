import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { SubmitHandler } from "react-hook-form";

import { routes as routesC } from "../../../utils/constants";
import { AuthFormsContainer } from "./SignInStyled";
import Form from "../../../components/Form/Form";
import { login } from "../../../APIs/auth";

const signInSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email format.")
    .required("Email field is required."),
  password: yup.string().required("Password is required"),
});

type InputsT = yup.InferType<typeof signInSchema>;

type FormFieldsT = {
  label: string;
  inputType: "email" | "password";
  inputId: string;
  registerName: keyof InputsT;
};

function SignIn() {
  const [isLoginError, setLoginError] = useState(false);

  //const { login } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<InputsT> = async (data) => {
    try {
      await login(data.email, data.password);

      navigate(location.state?.from ?? routesC.home);
    } catch (e) {
      setLoginError(true);
    }
  };

  const formFields: Array<FormFieldsT> = [
    {
      label: "Email address",
      inputType: "email",
      inputId: "loginEmail",
      registerName: "email",
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
