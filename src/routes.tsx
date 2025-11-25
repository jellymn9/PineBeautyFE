import { RouteObject } from "react-router-dom";

import { routes as routesC } from "@/utils/constants";
import { getSingleProduct } from "@/APIs/products";

import PageLayout from "@/components/Layout/Layout";
import Error from "@/pages/Error/error";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import AuthRoute from "@/components/AuthRoute/AuthRoute";
import { withSuspense } from "./utils/withSuspense";
import {
  LazyHome,
  LazyCart,
  LazyProduct,
  LazyProducts,
  LazyProfile,
  LazySignIn,
  LazySignUp,
} from "./utils/lazyRoutes";

const routes: Array<RouteObject> = [
  {
    element: <PageLayout />,
    children: [
      {
        path: routesC.home,
        element: withSuspense(<LazyHome />),
        errorElement: <Error />,
      },
      {
        path: routesC.products,
        element: withSuspense(<LazyProducts />),
      },
      {
        path: routesC.product + "/:id",
        loader: async ({ params }) => {
          return await getSingleProduct(params.id);
        },
        element: withSuspense(<LazyProduct />),
        errorElement: <div>Error element</div>,
      },
      {
        path: routesC.profile,
        element: withSuspense(
          <PrivateRoute>
            <LazyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: routesC.cart,
        element: withSuspense(<LazyCart />),
      },
    ],
  },
  {
    path: routesC.signin,
    element: withSuspense(
      <AuthRoute>
        <LazySignIn />
      </AuthRoute>
    ),
  },
  {
    path: routesC.signup,
    element: withSuspense(
      <AuthRoute>
        <LazySignUp />
      </AuthRoute>
    ),
  },
];

export default routes;
