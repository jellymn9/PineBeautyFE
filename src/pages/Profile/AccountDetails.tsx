import * as yup from "yup";
import { useOutletContext } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import type { UserProfile } from "@/utils/types/profileTypes";
import { TextFormField } from "@/components/UI/Form/TextFormField";
import { FormStyled } from "./AccountDetailsStyled";
import Button from "@/components/UI/Button/Button";

const accountDetailsSchema = yup.object({
  fullName: yup.string().required("Full name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: yup.string().required("Phone number is required"),
  street: yup.string().required("Street is required"),
  city: yup.string().required("City is required"),
  postalCode: yup.string().required("Postal code is required"),
  country: yup.string().required("Country is required"),
});

type AccountDetailsInputs = yup.InferType<typeof accountDetailsSchema>;

type FieldConfig = {
  label: string;
  type: "text" | "email" | "tel";
  placeholder: string;
};

const FIELDS = {
  fullName: {
    label: "Full name",
    type: "text",
    placeholder: "Enter your full name",
  },
  email: {
    label: "Email",
    type: "email",
    placeholder: "Enter your email address",
  },
  phone: {
    label: "Phone",
    type: "tel",
    placeholder: "Enter your phone number",
  },
  street: {
    label: "Street",
    type: "text",
    placeholder: "Enter your street",
  },
  city: {
    label: "City",
    type: "text",
    placeholder: "Enter your city",
  },
  postalCode: {
    label: "Postal code",
    type: "text",
    placeholder: "Enter your postal code",
  },
  country: {
    label: "Country",
    type: "text",
    placeholder: "Enter your country",
  },
} satisfies Record<keyof AccountDetailsInputs, FieldConfig>;

export default function AccountDetails() {
  const { profile } = useOutletContext<{ profile: UserProfile }>();

  console.log("Profile in AccountDetails: ", profile);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AccountDetailsInputs>({
    mode: "onTouched",
    resolver: yupResolver(accountDetailsSchema),
    defaultValues: {
      fullName:
        profile?.defaultShippingAddress?.fullName ?? profile?.displayName ?? "",
      email: profile?.email,
      phone: profile?.defaultShippingAddress?.phone ?? "",
      street: profile?.defaultShippingAddress?.street ?? "",
      city: profile?.defaultShippingAddress?.city ?? "",
      postalCode: profile?.defaultShippingAddress?.postalCode ?? "",
      country: profile?.defaultShippingAddress?.country ?? "",
    },
  });

  const onSubmit: SubmitHandler<AccountDetailsInputs> = (data) => {
    console.log(data);
  };

  const fields = Object.entries(FIELDS) as Array<
    [keyof AccountDetailsInputs, FieldConfig]
  >;

  return (
    <div>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        {fields.map(([name, field]) => (
          <TextFormField<AccountDetailsInputs>
            key={name}
            label={field.label}
            type={field.type}
            placeholder={field.placeholder}
            register={register}
            name={name}
            error={errors[name]}
          />
        ))}

        <Button type="submit" text="Save changes" />
      </FormStyled>
    </div>
  );
}
