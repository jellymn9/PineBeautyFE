import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

import RadioInput from "../CustomInput/RadioInput";
import { ErrorStyled } from "./FormFieldStyled";

type RadioOption = {
  label: string;
  value: string;
};

type RadioGroupFormFieldProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  options: RadioOption[];
  register: UseFormRegister<T>;
  error?: FieldError;
};

export function RadioGroupFormField<T extends FieldValues>({
  label,
  name,
  options,
  register,
  error,
}: RadioGroupFormFieldProps<T>) {
  const errorId = error ? `${name}-error` : undefined;

  return (
    <fieldset aria-describedby={errorId}>
      <legend>{label}</legend>

      {options.map((option) => (
        <RadioInput
          key={option.value}
          value={option.value}
          label={option.label}
          aria-invalid={error ? "true" : "false"}
          {...register(name)}
        />
      ))}

      {error && (
        <ErrorStyled id={errorId} role="alert">
          {String(error.message)}
        </ErrorStyled>
      )}
    </fieldset>
  );
}
