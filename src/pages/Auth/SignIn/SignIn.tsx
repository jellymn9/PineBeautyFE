import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { AuthFormsContainer } from "./SignInStyled";

import Button from "@/components/UI/Button/Button";
import { TextFormField } from "@/components/UI/Form/TextFormField";

import { useSignIn } from "@/hooks/authHooks";
import { SignInInputsT } from "@/utils/types/userTypes";
import { signInSchema } from "@/utils/schemas/userSchema";

const FIELDS = {
  email: {
    label: "Email address",
    type: "email" as const,
    placeholder: "Enter your email",
  },
  password: {
    label: "Password",
    type: "password" as const,
    placeholder: "Enter your password",
  },
};

function SignIn() {
  const { onSubmit, loginError } = useSignIn();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInInputsT>({
    mode: "onTouched",
    resolver: yupResolver(signInSchema),
  });

  return (
    <AuthFormsContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextFormField<SignInInputsT>
          label={FIELDS.email.label}
          type={FIELDS.email.type}
          placeholder={FIELDS.email.placeholder}
          register={register}
          name="email"
          error={errors.email}
        />

        <TextFormField<SignInInputsT>
          label={FIELDS.password.label}
          type={FIELDS.password.type}
          placeholder={FIELDS.password.placeholder}
          register={register}
          name="password"
          error={errors.password}
        />

        <Button type="submit" text="Sign in" />
      </form>

      {loginError && <div style={{ color: "red" }}>{loginError}</div>}
    </AuthFormsContainer>
  );
}

export default SignIn;
