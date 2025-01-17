import { RouteObject } from "react-router-dom";

import { routes as routesC } from "../src/utils/constants";
import { getSingleProduct } from "./APIs/products";

import PageLayout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import SignIn from "./pages/Auth/SignIn/SignIn";
import SignUp from "./pages/Auth/SignUp/SignUp";
import Cart from "./pages/Cart/Cart";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Profile from "./pages/Profile/Profile";
import Error from "./pages/Error/error";

const routes: Array<RouteObject> = [
  {
    element: <PageLayout />,
    children: [
      { path: routesC.home, element: <Home />, errorElement: <Error /> },
      {
        path: routesC.products,
        element: <Products />,
      },
      {
        path: routesC.product + "/:id",
        loader: async ({ params }) => {
          return await getSingleProduct(params.id);
        },
        element: <Product />,
        errorElement: <div>Error element</div>,
      },
      {
        path: routesC.profile, // private route
        element: <Profile />,
      },
      {
        path: routesC.cart,
        element: <Cart />,
      },
    ],
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/signin",
    element: <SignUp />,
  },
];

export default routes;
