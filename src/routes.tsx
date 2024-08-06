import { RouteObject } from "react-router-dom";

import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import Blog from "./pages/Blog/Blog";
import Cart from "./pages/Cart/Cart";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Profile from "./pages/Profile/Profile";
import Error from "./pages/Error/error";

const routes: Array<RouteObject> = [
  { path: "/", element: <Home />, errorElement: <Error /> },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/product/:id",
    element: <Product />,
  },
  { path: "/blog", element: <Blog /> },
  {
    path: "/profile", // private route
    element: <Profile />,
  },
  {
    element: <Auth />,
    children: [
      {
        path: "/login",
        element: <Auth />, // change element later
      },
      {
        path: "/signin",
        element: <Auth />, // change element later
      },
    ],
  },
];

export default routes;
