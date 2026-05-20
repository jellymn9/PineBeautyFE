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
