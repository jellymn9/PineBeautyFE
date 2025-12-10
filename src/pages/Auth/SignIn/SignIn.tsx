import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { SubmitHandler } from "react-hook-form";

import { ROUTES } from "@/utils/constants";
import { AuthFormsContainer } from "./SignInStyled";
import Form from "@/components/Form/Form";
import { login } from "@/APIs/auth";
import { getCart, overwriteCart } from "@/APIs/carts";
import { clearCartLocal, mergeCartsLocal } from "@/helpers/cartHelper";
import { useToast } from "@/context/ToastContext";

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

  const { showToast } = useToast();

  const location = useLocation();
  const navigate = useNavigate();

  const mergeCarts = async (userId: string) => {
    try {
      const serverCart = await getCart(userId);

      const mergeLocal = mergeCartsLocal(serverCart);

      if (!mergeLocal) {
        return;
      }

      await overwriteCart(userId, mergeLocal);
      clearCartLocal();
      showToast("Carts merged successfully!", "success");
    } catch (e) {
      showToast("Error merging carts.", "error");
    }
  };

  const onSubmit: SubmitHandler<InputsT> = async (data) => {
    try {
      const loginData = await login(data.email, data.password);

      await mergeCarts(loginData.uid);

      navigate(location.state?.from ?? ROUTES.home);
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
        heading="Sign in"
        formFields={formFields}
        onSubmit={onSubmit}
      />
      {isLoginError && <div style={{ color: "red" }}>User login fails!</div>}
    </AuthFormsContainer>
  );
}

export default SignIn;
