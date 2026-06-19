//import * as yup from "yup";
import { useOutletContext } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  shippingAddressFormSchema,
  ShippingAddressFormInputs,
  FieldConfig,
  SHIPPING_ADDRESS_FIELDS,
} from "@/utils/schemas/profileSchema";
import type { UserProfile } from "@/utils/types/profileTypes";
import { TextFormField } from "@/components/UI/Form/TextFormField";
import { Container, FormStyled } from "./AccountDetailsStyled";
import Button from "@/components/UI/Button/Button";
import { useUpdateProfile } from "@/queries/profile/useUpdateProfile";
import {
  LabelCustom,
  TextFormFieldWrapper,
} from "@/components/UI/Form/FormFieldStyled";
import CustomInput from "@/components/UI/CustomInput/CustomInput";

export default function AccountDetails() {
  const { profile } = useOutletContext<{ profile: UserProfile }>();
  const { mutate: updateProfile, isPending } = useUpdateProfile();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingAddressFormInputs>({
    mode: "onTouched",
    resolver: yupResolver(shippingAddressFormSchema),
    defaultValues: {
      fullName:
        profile?.defaultShippingAddress?.fullName ?? profile?.displayName ?? "",
      phone: profile?.defaultShippingAddress?.phone ?? "",
      street: profile?.defaultShippingAddress?.street ?? "",
      city: profile?.defaultShippingAddress?.city ?? "",
      postalCode: profile?.defaultShippingAddress?.postalCode ?? "",
      country: profile?.defaultShippingAddress?.country ?? "",
    },
  });

  const onSubmit = (data: ShippingAddressFormInputs) => {
    updateProfile({
      uid: profile.uid,
      displayName: data.fullName,
      defaultShippingAddress: {
        fullName: data.fullName,
        street: data.street,
        city: data.city,
        postalCode: data.postalCode,
        country: data.country,
        phone: data.phone,
      },
    });
  };

  const fields = Object.entries(SHIPPING_ADDRESS_FIELDS) as Array<
    [keyof ShippingAddressFormInputs, FieldConfig]
  >;

  return (
    <Container>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <TextFormFieldWrapper>
          <LabelCustom htmlFor="email">Email</LabelCustom>

          <CustomInput id="email" type="email" value={profile.email} readOnly />
        </TextFormFieldWrapper>
        {fields.map(([name, field]) => (
          <TextFormField<ShippingAddressFormInputs>
            key={name}
            label={field.label}
            type={field.type}
            placeholder={field.placeholder}
            register={register}
            name={name}
            error={errors[name]}
          />
        ))}

        <Button
          type="submit"
          text={isPending ? "Saving..." : "Save changes"}
          disabled={isPending}
        />
      </FormStyled>
    </Container>
  );
}
