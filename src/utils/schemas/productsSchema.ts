import * as yup from "yup";
import { CategoryT, ProductI } from "../types/productTypes";

const categorySchema = yup
  .mixed<CategoryT>()
  .oneOf(["hair", "body", "face"])
  .required();

export const productSchema: yup.ObjectSchema<ProductI> = yup.object({
  id: yup.string().required(),
  name: yup.string().required(),
  price: yup.number().required(),
  currency: yup
    .mixed<ProductI["currency"]>()
    .oneOf(["USD", "EUR", "JPY", "RSD"])
    .required(),
  image: yup.string().required(),
  images: yup.array().of(yup.string().required()).required(),
  category: categorySchema,
  isBestSeller: yup.boolean().required(),
});

export const productsSchema = yup
  .array()
  .of(productSchema.required())
  .required();
