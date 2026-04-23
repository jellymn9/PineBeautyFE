import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SubmitHandler } from "react-hook-form";
import * as yup from "yup";

import { ROUTES } from "@/utils/constants";
import { login } from "@/APIs/auth";
import { getCartLocal } from "@/helpers/cartHelper";
import { mergeCarts } from "@/services/cartService";
import { useToast } from "@/context/ToastContext";
import { mapErrorToMessageSafe } from "@/errors/errorMapper";
import { mapCartErrorSafe } from "@/errors/cartErrors/cartErrorMapper";

export const signInSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email format.")
    .required("Email is required."),
  password: yup.string().required("Password is required."),
});

export type SignInInputsT = yup.InferType<typeof signInSchema>;

export function useSignIn() {
  const [loginError, setLoginError] = useState("");

  const { showToast } = useToast();
  const location = useLocation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<SignInInputsT> = async (data) => {
    setLoginError("");

    try {
      const loginData = await login(data.email, data.password);

      if (getCartLocal()) {
        try {
          await mergeCarts(loginData.uid);
          showToast("Carts merged successfully!", "success");
        } catch (e) {
          showToast(mapCartErrorSafe(e, "merge"), "error");
        }
      }

      navigate(location.state?.from ?? ROUTES.home);
    } catch (e) {
      setLoginError(mapErrorToMessageSafe(e));
    }
  };

  return { onSubmit, loginError };
}
