import { useForm, SubmitHandler } from "react-hook-form";

import { FormCustom } from "../SignIn/SignInStyled";

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
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("username"));

  return (
    <div>
      <h1>Sign up</h1>
      <FormCustom onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="registerUsername">Username:</label>
          <input
            type="text"
            id="registerUsername"
            {...register("username", { required: true })}
          />
          {errors.username && <span>This field is required</span>}
        </div>
        <div>
          <label htmlFor="registerEmail">Email address:</label>
          <input
            type="email"
            id="registerEmail"
            {...register("email", { required: true })}
          />
          {errors.username && <span>This field is required</span>}
        </div>
        <div>
          <label htmlFor="registerPassword">Password:</label>
          <input
            type="password"
            id="registerPassword"
            {...register("password", { required: true })}
          />
          {errors.password && <span>This field is required</span>}
        </div>
        <div>
          <label htmlFor="registerRepeatPassword">Password:</label>
          <input
            type="password"
            id="registerRepeatPassword"
            {...register("repeatPassword", { required: true })}
          />
          {errors.password && <span>This field is required</span>}
        </div>
        <input type="submit" />
      </FormCustom>
    </div>
  );
};

export default SignUp;
