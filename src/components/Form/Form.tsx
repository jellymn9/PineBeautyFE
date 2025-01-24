import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, SubmitHandler, FieldValues, Path } from "react-hook-form";

import Button from "../Button/Button";
import {
  FieldError,
  FormCustom,
  FormHeading,
  InputCustom,
  LabelCustom,
  LabelInputWrapper,
} from "./FormStyle";

type FormFields<T extends FieldValues> = {
  label: string;
  inputType: string;
  inputId: string;
  registerName: Path<T>;
};

type FormPropsI<T extends FieldValues> = {
  heading: string;
  buttonText: string;
  formFields: Array<FormFields<T>>;
  onSubmit: SubmitHandler<T>;
  schema: yup.ObjectSchema<T>;
};

const Form = function <T extends FieldValues>({
  heading,
  formFields,
  buttonText,
  onSubmit,
  schema,
}: FormPropsI<T>) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<T>({
    mode: "onChange",
    shouldUseNativeValidation: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: yupResolver(schema) as any,
  });

  return (
    <>
      <FormHeading>{heading}</FormHeading>
      <FormCustom onSubmit={handleSubmit(onSubmit)}>
        {formFields.map(({ label, inputType, inputId, registerName }) => (
          <LabelInputWrapper>
            <LabelCustom htmlFor="registerUsername">{label}</LabelCustom>
            <InputCustom
              type={inputType}
              id={inputId}
              {...register(registerName)}
              aria-invalid={errors[register.name] ? "true" : "false"}
            />
            {errors[register.name] && (
              <FieldError>{String(errors[register.name]?.message)}</FieldError>
            )}
          </LabelInputWrapper>
        ))}

        <Button type="submit" text={buttonText} />
      </FormCustom>
    </>
  );
};

export default Form;
