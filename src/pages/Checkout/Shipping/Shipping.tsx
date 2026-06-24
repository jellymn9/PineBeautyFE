import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  shippingAddressFormSchema,
  ShippingAddressFormInputs,
  FieldConfig,
  SHIPPING_ADDRESS_FIELDS,
} from "@/utils/schemas/profileSchema";
import { TextFormField } from "@/components/UI/Form/TextFormField";
import { FormStyled } from "./ShippingStyled";
import {
  saveShippingAddress,
  getShippingAddressFromSession,
} from "@/helpers/checkoutHelpers/checkoutHelper";
import { useAuth } from "@/context/AuthContext";
import { useProfile } from "@/queries/profile/useProfile";
import error from "@/pages/Error/error";
import { mapErrorToMessageSafe } from "@/errors/errorMapper";
import Button from "@/components/UI/Button/Button";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const { user } = useAuth();
  const { data: profile, isError } = useProfile(user?.uid || "");
  const navigate = useNavigate();

  const sessionAddress = getShippingAddressFromSession();
  const defaultValues: ShippingAddressFormInputs = sessionAddress
    ? {
        fullName: sessionAddress.fullName ?? "",
        phone: sessionAddress.phone ?? "",
        street: sessionAddress.street ?? "",
        city: sessionAddress.city ?? "",
        postalCode: sessionAddress.postalCode ?? "",
        country: sessionAddress.country ?? "",
      }
    : {
        fullName:
          profile?.defaultShippingAddress?.fullName ??
          profile?.displayName ??
          "",
        phone: profile?.defaultShippingAddress?.phone ?? "",
        street: profile?.defaultShippingAddress?.street ?? "",
        city: profile?.defaultShippingAddress?.city ?? "",
        postalCode: profile?.defaultShippingAddress?.postalCode ?? "",
        country: profile?.defaultShippingAddress?.country ?? "",
      };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingAddressFormInputs>({
    mode: "onTouched",
    resolver: yupResolver(shippingAddressFormSchema),
    defaultValues: defaultValues,
  });

  if (isError) {
    return <div>{mapErrorToMessageSafe(error)}</div>;
  }

  const fields = Object.entries(SHIPPING_ADDRESS_FIELDS) as Array<
    [keyof ShippingAddressFormInputs, FieldConfig]
  >;

  const onSubmit = (data: ShippingAddressFormInputs) => {
    console.log("Shipping data submitted:", data);
    try {
      saveShippingAddress(data);
      navigate("/checkout/review");
    } catch (error) {
      // back to this..
      console.error("Error saving shipping address:", error);
    }
  };

  return (
    <div>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
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
          text={"Continue to Review"}
          //disabled={isPending}
        />
      </FormStyled>
    </div>
  );
};

export default Shipping;
