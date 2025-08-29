import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

type AuthContextType = {
  isLoggedIn: boolean;
  // login: (token: string) => void;
  // logout: () => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: AuthProviderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // const login = (token: string) => {
  //   setUserSession(token);
  //   setIsLoggedIn(true);
  // };
  // const logout = () => {
  //   removeUserSession();
  //   setIsLoggedIn(false);
  // };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn }}>
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
