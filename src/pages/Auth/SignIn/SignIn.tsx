import { AuthFormsContainer } from "./SignInStyled";
import Form from "@/components/UI/Form/Form";
import { useSignIn, signInSchema, SignInInputsT } from "@/hooks/authHooks";

type FormFieldsT = {
  label: string;
  inputType: "email" | "password";
  inputId: string;
  registerName: keyof SignInInputsT;
};

const FORM_FIELDS: Array<FormFieldsT> = [
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

function SignIn() {
  const { onSubmit, loginError } = useSignIn();

  return (
    <AuthFormsContainer>
      <Form<SignInInputsT>
        schema={signInSchema}
        buttonText="Sign in"
        heading="Sign in"
        formFields={FORM_FIELDS}
        onSubmit={onSubmit}
      />
      {loginError && <div style={{ color: "red" }}>{loginError}</div>}
    </AuthFormsContainer>
  );
}

export default SignIn;
