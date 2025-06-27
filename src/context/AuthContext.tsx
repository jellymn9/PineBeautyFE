import { createContext, useContext, useState, ReactNode } from "react";

import {
  isUserAuthenticated,
  removeUserSession,
  setUserSession,
} from "../helpers/authHelper";

type AuthContextType = {
  isLoggedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: AuthProviderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return isUserAuthenticated();
  });

  const login = (token: string) => {
    setUserSession(token);
    setIsLoggedIn(true);
  };
  const logout = () => {
    removeUserSession();
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook with type safety
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
