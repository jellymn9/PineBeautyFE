import React from "react";
import { Navigate } from "react-router-dom";

import { isUserAuthenticated } from "../../helpers/authHelper";
import { routes as routesC } from "../../utils/constants";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  if (!isUserAuthenticated()) {
    return <Navigate to={routesC.signin} />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
