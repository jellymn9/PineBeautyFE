import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { ROUTES } from "@/utils/constants";
import { mapErrorToMessageSafe } from "@/errors/errorMapper";
import { registerUserWithProfile } from "@/services/registerUserWithProfile";

import Button from "@/components/UI/Button/Button";
import { TextFormField } from "@/components/UI/Form/TextFormField";
import { AuthFormsContainer } from "@/pages/Auth/SignIn/SignInStyled";

import { signUpSchema } from "@/utils//schemas/userSchema";
import { SignUpInputsT } from "@/utils/types/userTypes";

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [regError, setRegError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInputsT>({
    mode: "onTouched",
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit: SubmitHandler<SignUpInputsT> = async (data) => {
    try {
      await registerUserWithProfile(data);

      navigate(location.state?.from ?? ROUTES.home);
    } catch (e) {
      setRegError(mapErrorToMessageSafe(e));
    }
  };

  return (
    <AuthFormsContainer>
      <h2>Sign up</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextFormField<SignUpInputsT>
          label="Name"
          type="text"
          placeholder="Enter your name"
          register={register}
          name="name"
          error={errors.name}
        />

        <TextFormField<SignUpInputsT>
          label="Email address"
          type="email"
          placeholder="Enter your email address"
          register={register}
          name="email"
          error={errors.email}
        />

        <TextFormField<SignUpInputsT>
          label="Password"
          type="password"
          placeholder="Enter your password"
          register={register}
          name="password"
          error={errors.password}
        />

        <TextFormField<SignUpInputsT>
          label="Repeat password"
          type="password"
          placeholder="Repeat your password"
          register={register}
          name="repeatPassword"
          error={errors.repeatPassword}
        />

        <Button type="submit" text="Sign up" />
      </form>

      {regError && <div style={{ color: "red" }}>{regError}</div>}
    </AuthFormsContainer>
  );
};

export default SignUp;
