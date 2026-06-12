import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  User,
} from "firebase/auth";
import { auth } from "@/firebase";
import { handleFirebaseError } from "@/errors/firebaseErrorHandler";
import { reportError } from "@/monitoring/reportError";

export const register = async (
  email: string,
  password: string,
): Promise<User> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    return userCredential.user;
  } catch (e) {
    reportError(e, {
      feature: "auth",
      action: "register",
      extra: {
        email,
      },
    });

    throw handleFirebaseError(e);
  }
};

export const login = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );

    return userCredential.user;
  } catch (e) {
    reportError(e, {
      feature: "auth",
      action: "login",
      extra: {
        email,
      },
    });

    throw handleFirebaseError(e);
  }
};
