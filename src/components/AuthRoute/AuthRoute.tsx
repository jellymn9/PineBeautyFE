import React from "react";
import { Navigate } from "react-router-dom";

import { routes as routesC } from "../../utils/constants";
import { isUserAuthenticated } from "../../helpers/authHelper";

interface AuthRouteProps {
  children: React.ReactNode;
}

const AuthRoute: React.FC<AuthRouteProps> = ({ children }) => {
  if (isUserAuthenticated()) {
    return <Navigate to={routesC.home} />;
  }

  return <>{children}</>;
};

export default AuthRoute;
