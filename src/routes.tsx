import { RouteObject } from "react-router-dom";

import { ROUTES } from "@/utils/constants";
import { getSingleProduct } from "@/APIs/products";

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
  LazyLayout,
} from "./utils/lazyRoutes";

const routes: Array<RouteObject> = [
  {
    element: withSuspense(<LazyLayout />),
    children: [
      {
        path: ROUTES.home,
        element: <LazyHome />,
        errorElement: <Error />,
      },
      {
        path: ROUTES.products,
        element: <LazyProducts />,
      },
      {
        path: ROUTES.product + "/:id",
        loader: async ({ params }) => {
          return await getSingleProduct(params.id);
        },
        element: <LazyProduct />,
        errorElement: <div>Error element</div>,
      },
      {
        path: ROUTES.profile,
        element: withSuspense(
          <PrivateRoute>
            <LazyProfile />
          </PrivateRoute>,
        ),
      },
      {
        path: ROUTES.cart,
        element: <LazyCart />,
      },
    ],
  },
  {
    path: ROUTES.signin,
    element: withSuspense(
      <AuthRoute>
        <LazySignIn />
      </AuthRoute>,
    ),
  },
  {
    path: ROUTES.signup,
    element: withSuspense(
      <AuthRoute>
        <LazySignUp />
      </AuthRoute>,
    ),
  },
];

export default routes;
