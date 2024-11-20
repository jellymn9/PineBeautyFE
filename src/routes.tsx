import { RouteObject } from "react-router-dom";

import { getSingleProduct } from "./APIs/products";

import PageLayout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import Blog from "./pages/Blog/Blog";
import Cart from "./pages/Cart/Cart";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Profile from "./pages/Profile/Profile";
import Error from "./pages/Error/error";

const routes: Array<RouteObject> = [
  {
    element: <PageLayout />,
    children: [
      { path: "/", element: <Home />, errorElement: <Error /> },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/product/:id",
        loader: async ({ params }) => {
          return await getSingleProduct(params.id);
        },
        element: <Product />,
        errorElement: <div>Error element</div>,
      },
      {
        path: "/profile", // private route
        element: <Profile />,
      },
    ],
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  { path: "/blog", element: <Blog /> },
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
