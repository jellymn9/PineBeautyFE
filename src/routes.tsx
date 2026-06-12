import { RouteObject } from "react-router-dom";

import { ROUTES } from "@/utils/constants";

import Error from "@/pages/Error/error";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import AuthRoute from "@/components/AuthRoute/AuthRoute";
import Home from "@/pages/Home/Home";
import Products from "@/pages/Products/Products";
import NotFound from "@/pages/NotFound/NotFound";
import { withSuspense } from "./utils/withSuspense";
import {
  LazyCart,
  LazyProduct,
  LazyProfile,
  LazySignIn,
  LazySignUp,
  LazyLayout,
} from "./utils/lazyRoutes";
import OrderHistory from "./pages/Profile/OrderHistory";
import AccountDetails from "./pages/Profile/AccountDetails";

const routes: Array<RouteObject> = [
  {
    element: withSuspense(<LazyLayout />),
    children: [
      {
        path: ROUTES.home,
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: ROUTES.products,
        element: <Products />,
      },
      {
        path: ROUTES.products + "/:id",
        element: <LazyProduct />,
      },
      {
        path: ROUTES.profile,
        element: withSuspense(
          <PrivateRoute>
            <LazyProfile />
          </PrivateRoute>,
        ),
        children: [
          {
            path: "orders", //indlude later in ROUTES constants as subroutes
            element: <OrderHistory />,
          },
          {
            path: "account",
            element: <AccountDetails />,
          },
        ],
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
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
