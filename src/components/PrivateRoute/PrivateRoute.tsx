import React from "react";
import { Navigate } from "react-router-dom";

import { routes as routesC } from "../../utils/constants";
import { useAuth } from "../../context/AuthContext";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to={routesC.signin} />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
