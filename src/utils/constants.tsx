import { Search, ShoppingCart, User } from "lucide-react";

export const BASIC_CATEGORIES = {
  body: { name: "body", link: "/" },
  hair: { name: "hair", link: "/" },
  face: { name: "face", link: "/" },
};

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
