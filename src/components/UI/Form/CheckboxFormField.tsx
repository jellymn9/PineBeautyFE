import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

import Checkbox from "../CustomInput/Checkbox";
import { ErrorStyled } from "./FormFieldStyled";

type CheckboxFormFieldProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  error?: FieldError;
};

export function CheckboxFormField<T extends FieldValues>({
  label,
  name,
  register,
  error,
}: CheckboxFormFieldProps<T>) {
  const errorId = error ? `${name}-error` : undefined;

  return (
    <div>
      <Checkbox
        id={name}
        label={label}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={errorId}
        {...register(name)}
      />

      {error && (
        <ErrorStyled id={errorId} role="alert">
          {String(error.message)}
        </ErrorStyled>
      )}
    </div>
  );
}
