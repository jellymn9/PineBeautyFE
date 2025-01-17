import { useForm, SubmitHandler } from "react-hook-form";

import { FormCustom } from "./SignInStyled";

type Inputs = {
  username: string;
  password: string;
};

function SignIn() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("username"));

  return (
    <div>
      <h1>Sign in</h1>
      <FormCustom onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="loginUsername">Username:</label>
          <input
            type="text"
            id="loginUsername"
            {...register("username", { required: true })}
          />
          {errors.username && <span>This field is required</span>}
        </div>
        <div>
          <label htmlFor="loginPassword">Password:</label>
          <input
            type="password"
            id="loginPassword"
            {...register("password", { required: true })}
          />
          {errors.password && <span>This field is required</span>}
        </div>
        <input type="submit" />
      </FormCustom>
    </div>
  );
}

export default SignIn;
