import React from "react";
import { Navigate } from "react-router-dom";

import { routes as routesC } from "@/utils/constants";
import { useAuth } from "@/context/AuthContext";

interface AuthRouteProps {
  children: React.ReactNode;
}

const AuthRoute: React.FC<AuthRouteProps> = ({ children }) => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to={routesC.home} />;
  }

  return <>{children}</>;
};

export default AuthRoute;
