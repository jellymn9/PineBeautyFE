import React from "react";
import { Navigate, useLocation } from "react-router-dom";

import { ROUTES } from "@/utils/constants";
import { useAuth } from "@/context/AuthContext";
import { Loader } from "../UI/Loader/Loader";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { user, isAuthLoading } = useAuth();

  const location = useLocation();

  if (isAuthLoading) {
    return <Loader />;
  }

  if (!user) {
    return (
      <Navigate
        to={ROUTES.signin}
        state={{ from: location.pathname }}
        replace
      />
    );
  }

  return <>{children}</>;
};

export default PrivateRoute;
