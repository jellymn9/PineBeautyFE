import {
  useForm,
  SubmitHandler,
  RegisterOptions,
  FieldValues,
  Path,
} from "react-hook-form";

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
  register: { name: Path<T>; options?: RegisterOptions<T, Path<T>> };
};

type FormPropsI<T extends FieldValues> = {
  heading: string;
  buttonText: string;
  formFields: Array<FormFields<T>>;
  onSubmit: SubmitHandler<T>;
};

const Form = function <T extends FieldValues>({
  heading,
  formFields,
  buttonText,
  onSubmit,
}: FormPropsI<T>) {
  const {
    register,
    handleSubmit,
    //watch,
    formState: { errors },
  } = useForm<T>();

  //console.log(errors.email);

  return (
    <>
      <FormHeading>{heading}</FormHeading>
      <FormCustom onSubmit={handleSubmit(onSubmit)}>
        {formFields.map((field) => (
          <LabelInputWrapper>
            <LabelCustom htmlFor="registerUsername">{field.label}</LabelCustom>
            <InputCustom
              type={field.inputType}
              id={field.inputId}
              {...register(field.register.name, field.register.options)}
              aria-invalid={errors[field.inputId] ? "true" : "false"}
            />
            {errors[field.register.name] && (
              <FieldError>
                {String(errors[field.register.name]?.message)}
              </FieldError>
            )}
          </LabelInputWrapper>
        ))}

        <Button type="submit" text={buttonText} />
      </FormCustom>
    </>
  );
};

export default Form;
