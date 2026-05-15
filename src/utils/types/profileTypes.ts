import type { InferType } from "yup";
import {
  shippingAddressSchema,
  userProfileSchema,
} from "../schemas/profileSchema";

export type ShippingAddress = InferType<typeof shippingAddressSchema>;
export type UserProfile = InferType<typeof userProfileSchema>;

export type CreateProfileInput = {
  uid: string;
  email: string;
  displayName?: string;
};
