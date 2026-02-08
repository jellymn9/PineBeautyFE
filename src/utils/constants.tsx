import { Search, ShoppingCart, User } from "lucide-react";

export const PRODUCT_CATEGORIES = ["BODY", "HAIR", "FACE"]; // as const;

export const FOOTER_HEIGHT = 452;

export const ROUTES = {
  home: "/",
  products: "/products",
  product: "/product",
  cart: "/cart",
  profile: "/profile",
  signin: "/signin",
  signup: "/signup",
};

export const NAV_LINKS = {
  textualLinks: [
    { route: ROUTES.home, name: "home" },
    { route: ROUTES.products, name: "products" },
    { route: "2", name: "contact" },
  ],
  iconLinks: [
    {
      route: ROUTES.profile,
      icon: <User size={22} strokeWidth={2} />,
      mobile: true,
    },
    {
      route: "3",
      icon: <Search size={22} strokeWidth={2} />,
      mobile: false,
    },
    {
      route: ROUTES.cart,
      icon: <ShoppingCart size={22} strokeWidth={2} />,
      mobile: false,
    },
  ],
};

export const FOOTER_SECTIONS = {
  products: {
    heading: "products",
    links: [
      {
        name: "Scrubs & Masks",
        route: "",
      },
      {
        name: "Natural Deodorants",
        route: "",
      },
      {
        name: "Hair Oils & Serums",
        route: "",
      },
      {
        name: "Solid Shampoos & Hair Soaps",
        route: "",
      },
      {
        name: "Eau de Toilette",
        route: "",
      },
    ],
  },
  termsOfUse: {
    heading: "terms of use",
    links: [
      {
        name: "order confirmation",
        route: "",
      },
      {
        name: "availability",
        route: "",
      },
      {
        name: "order cancelation",
        route: "",
      },
      {
        name: "ordering methods",
        route: "",
      },
      {
        name: "returns/changes",
        route: "",
      },
      {
        name: "payment methods",
        route: "",
      },
      {
        name: "terms of use",
        route: "",
      },
      {
        name: "shipping",
        route: "",
      },
    ],
  },
};
