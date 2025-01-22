import { FieldValues, SubmitHandler } from "react-hook-form";

import Form from "../../../components/Form/Form";
import { AuthFormsContainer } from "../SignIn/SignInStyled";

interface InputsT extends FieldValues {
  username: string;
  email: string;
  password: string;
  repeatPassword: string;
}

const SignUp = () => {
  const formFields = [
    {
      label: "Username",
      inputType: "text",
      inputId: "registerUsername",
      register: {
        name: "username",
        options: {
          required: "Username field is required",
          maxLength: {
            value: 12,
            message: "Username must be at most 12 characters",
          },
          minLength: {
            value: 4,
            message: "Username must be at least 12 characters",
          },
        },
      },
    },
    {
      label: "Email address",
      inputType: "email",
      inputId: "registerEmail",
      register: {
        name: "email",
        options: { required: "Username field is required" },
      },
    },
    {
      label: "Password",
      inputType: "password",
      inputId: "registerPassword",
      register: {
        name: "password",
        options: {
          required: "Username field is required",
          minLength: {
            value: 5,
            message: "Username must be at least 5 characters",
          },
        },
      },
    },
    {
      label: "Repeat password",
      inputType: "password",
      inputId: "registerRepeatPassword",
      register: {
        name: "repeatPassword",
        options: {
          required: "Username field is required",
          minLength: {
            value: 5,
            message: "Username must be at least 5 characters",
          },
        },
      },
    },
  ];

  const onSubmit: SubmitHandler<InputsT> = (data) => {
    console.log("Form Data", data);
  };

  return (
    <AuthFormsContainer>
      <Form<InputsT>
        buttonText="Sign up"
        heading="Sing up"
        formFields={formFields}
        onSubmit={onSubmit}
      />
    </AuthFormsContainer>
  );
};

export default SignUp;
