import React from "react";
import { Navigate, useLocation } from "react-router-dom";

import { routes as routesC } from "@/utils/constants";
import { useAuth } from "@/context/AuthContext";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { user } = useAuth();

  const location = useLocation();

  if (!user) {
    return (
      <Navigate
        to={routesC.signin}
        state={{ from: location.pathname }}
        replace
      />
    );
  }

  return <>{children}</>;
};

export default PrivateRoute;
