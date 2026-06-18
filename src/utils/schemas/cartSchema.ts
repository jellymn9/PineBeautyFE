import * as yup from "yup";
import { CartItemBaseT } from "@/utils/types/cartTypes";

export const cartItemBaseSchema: yup.ObjectSchema<CartItemBaseT> = yup.object({
  id: yup.string().required(),
  name: yup.string().required(),
  price: yup.number().positive().required(),
  image: yup.string().url().required(),
  quantity: yup.number().integer().positive().required(),
});

export const cartItemsArraySchema = yup
  .array()
  .of(cartItemBaseSchema)
  .required();

export const newItemSchema = cartItemBaseSchema.omit(["quantity"]);
