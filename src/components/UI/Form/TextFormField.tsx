import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

import CustomInput from "../CustomInput/CustomInput";
import {
  ErrorStyled,
  LabelCustom,
  TextFormFieldWrapper,
} from "./FormFieldStyled";

type TextFormFieldProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  type?: "text" | "email" | "password" | "tel" | "search";
  register: UseFormRegister<T>;
  error?: FieldError;
  placeholder?: string;
};

export function TextFormField<T extends FieldValues>({
  label,
  name,
  type = "text",
  register,
  error,
  placeholder,
}: TextFormFieldProps<T>) {
  const errorId = error ? `${name}-error` : undefined;

  return (
    <TextFormFieldWrapper>
      <LabelCustom htmlFor={name}>{label}</LabelCustom>

      <CustomInput
        id={name}
        type={type}
        placeholder={placeholder}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={errorId}
        {...register(name)}
      />

      {error && (
        <ErrorStyled id={errorId} role="alert">
          {String(error.message)}
        </ErrorStyled>
      )}
    </TextFormFieldWrapper>
  );
}
