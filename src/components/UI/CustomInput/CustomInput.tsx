import { forwardRef } from "react";
import { CustomTextInput } from "./InputStyled";

type TextInputPropsT = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type"
> & {
  type?: "text" | "email" | "password" | "tel" | "search";
};

const TextInput = forwardRef<HTMLInputElement, TextInputPropsT>(
  ({ type = "text", ...props }, ref) => {
    return <CustomTextInput ref={ref} type={type} {...props} />;
  },
);

TextInput.displayName = "TextInput";

export default TextInput;
