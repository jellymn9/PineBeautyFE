import { User } from "lucide-react";
import type { ProductCategoriesMappedT } from "./types";

export const ProductCategories: ProductCategoriesMappedT = {
  SCRUBS_AND_MASKS: { name: "scrubs and masks", link: "/" },
  NATURAL_DEODORANTS: { name: "natural deodorants", link: "/" },
  HAIR_OILD_AND_SERUMS: { name: "hair oils and serums", link: "/" },
  SOLID_SHAMPOOS_AND_HAIR_SOAPS: {
    name: "solid shampoos and hair soaps",
    link: "/",
  },
  EAU_DE_TOILETE: { name: "eau de toilete", link: "/" },
};

export const footerHeight = 452;

export const routes = {
  home: "/",
  products: "/products",
  product: "/product",
  cart: "/cart",
  profile: "/profile",
  signin: "/signin",
  signup: "/signup",
};

export const navLinks = [
  { route: routes.home, nameOrIcon: "home" },
  { route: routes.products, nameOrIcon: "products" },
  { route: "2", nameOrIcon: "contact" },
  //{ route: "1", nameOrIcon: <User size={22} strokeWidth={2} /> },
  //{ route: "3", nameOrIcon: <Search size={22} strokeWidth={2} /> },
  //{ route: "4", nameOrIcon: <ShoppingCart size={22} strokeWidth={2} /> },
];
