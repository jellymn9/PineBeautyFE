import * as yup from "yup";
import { Timestamp } from "firebase/firestore";

export const shippingAddressSchema = yup.object({
  fullName: yup.string().required(),
  street: yup.string().required(),
  city: yup.string().required(),
  postalCode: yup.string().required(),
  country: yup.string().required(),
  phone: yup.string().required(),
});

export const userProfileSchema = yup
  .object({
    uid: yup.string().required(),
    email: yup.string().email().required(),
    displayName: yup.string().nullable().defined(),
    role: yup
      .mixed<"customer" | "admin">()
      .oneOf(["customer", "admin"])
      .required(),
    defaultShippingAddress: shippingAddressSchema.default(undefined).optional(),
    createdAt: yup.mixed<Timestamp>().required(),
    updatedAt: yup.mixed<Timestamp>().required(),
  })
  .required();

export const createProfileWriteSchema = userProfileSchema.omit([
  "createdAt",
  "updatedAt",
]);

export const updateProfileWriteSchema = userProfileSchema
  .omit(["uid", "email", "role", "createdAt", "updatedAt"])
  .partial();

export const shippingAddressFormSchema = yup.object({
  fullName: yup.string().required("Full name is required"),
  street: yup.string().required("Street is required"),
  city: yup.string().required("City is required"),
  postalCode: yup.string().required("Postal code is required"),
  country: yup.string().required("Country is required"),
  phone: yup.string().required("Phone number is required"),
});

export type ShippingAddressFormInputs = yup.InferType<
  typeof shippingAddressFormSchema
>;

export type FieldConfig = {
  label: string;
  type: "text" | "email" | "tel";
  placeholder: string;
};

export const SHIPPING_ADDRESS_FIELDS = {
  fullName: {
    label: "Full name",
    type: "text",
    placeholder: "Enter your full name",
  },
  phone: {
    label: "Phone",
    type: "tel",
    placeholder: "Enter your phone number",
  },
  street: { label: "Street", type: "text", placeholder: "Enter your street" },
  city: { label: "City", type: "text", placeholder: "Enter your city" },
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
} satisfies Record<keyof ShippingAddressFormInputs, FieldConfig>;
