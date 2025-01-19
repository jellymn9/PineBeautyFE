import { useForm, SubmitHandler } from "react-hook-form";

import Button from "../../../components/Button/Button";
import {
  AuthFormsContainer,
  FieldError,
  FormCustom,
  FormHeading,
  InputCustom,
  LabelCustom,
  LabelInputWrapper,
} from "../SignIn/SignInStyled";

type Inputs = {
  username: string;
  email: string;
  password: string;
  repeatPassword: string;
};

const SignUp = () => {
  const {
    register,
    handleSubmit,
    //watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  //console.log(watch("username"));
  console.log(errors.email);

  return (
    <AuthFormsContainer>
      <FormHeading>Sign up</FormHeading>
      <FormCustom onSubmit={handleSubmit(onSubmit)}>
        <LabelInputWrapper>
          <LabelCustom htmlFor="registerUsername">Username:</LabelCustom>
          <InputCustom
            type="text"
            id="registerUsername"
            {...register("username", {
              required: "Username field is required",
            })}
            aria-invalid={errors.username ? "true" : "false"}
          />
          {errors.username && (
            <FieldError>{errors.username.message}</FieldError>
          )}
        </LabelInputWrapper>
        <LabelInputWrapper>
          <LabelCustom htmlFor="registerEmail">Email address:</LabelCustom>
          <InputCustom
            type="email"
            id="registerEmail"
            {...register("email", { required: true })}
          />
          {errors.email && <FieldError>{errors.email.message}</FieldError>}
        </LabelInputWrapper>
        <LabelInputWrapper>
          <LabelCustom htmlFor="registerPassword">Password:</LabelCustom>
          <InputCustom
            type="password"
            id="registerPassword"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <FieldError>{errors.password.message}</FieldError>
          )}
        </LabelInputWrapper>
        <LabelInputWrapper>
          <LabelCustom htmlFor="registerRepeatPassword">
            Repeat password:
          </LabelCustom>
          <InputCustom
            type="password"
            id="registerRepeatPassword"
            {...register("repeatPassword", { required: true })}
          />
          {errors.repeatPassword && (
            <FieldError>{errors.repeatPassword.message}</FieldError>
          )}
        </LabelInputWrapper>
        <Button type="submit" text="Sign Up" />
      </FormCustom>
    </AuthFormsContainer>
  );
};

export default SignUp;
