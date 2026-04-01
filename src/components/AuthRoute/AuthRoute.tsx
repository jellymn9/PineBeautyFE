import React from "react";
import { Navigate } from "react-router-dom";

import { ROUTES } from "@/utils/constants";
import { useAuth } from "@/context/AuthContext";
import { Loader } from "../UI/Loader/Loader";

interface AuthRouteProps {
  children: React.ReactNode;
}

const AuthRoute: React.FC<AuthRouteProps> = ({ children }) => {
  const { user, isAuthLoading } = useAuth();

  if (isAuthLoading) {
    return <Loader />;
  }

  if (user) {
    return <Navigate to={ROUTES.home} />;
  }

  return <>{children}</>;
};

export default AuthRoute;
