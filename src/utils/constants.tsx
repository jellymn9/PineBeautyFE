import { Search, ShoppingCart, User } from "lucide-react";
import type { ProductCategoriesMappedT } from "./types";

export const BasicCategories = {
  body: { name: "body", link: "/" },
  hair: { name: "hair", link: "/" },
  face: { name: "face", link: "/" },
};

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

export const navLinks = {
  textualLinks: [
    { route: routes.home, name: "home" },
    { route: routes.products, name: "products" },
    { route: "2", name: "contact" },
  ],
  iconLinks: [
    {
      route: routes.profile,
      icon: <User size={22} strokeWidth={2} />,
      mobile: true,
    },
    {
      route: "3",
      icon: <Search size={22} strokeWidth={2} />,
      mobile: false,
    },
    {
      route: routes.cart,
      icon: <ShoppingCart size={22} strokeWidth={2} />,
      mobile: false,
    },
  ],
};
