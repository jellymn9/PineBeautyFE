import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  User,
} from "firebase/auth";
import { auth } from "@/firebase";
import { handleFirebaseError } from "@/errors/firebaseErrorHandler";

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
    throw handleFirebaseError(e);
  }
};
