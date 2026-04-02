import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/firebase";
import { handleFirebaseError } from "@/errors/firebaseErrorHandler";

export const register = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    // User account created and signed in successfully.
    // The user's information is available in userCredential.user
    console.log("User registered:", userCredential.user);

    return userCredential.user;
  } catch (e) {
    console.error("User registration error:", e);
    handleFirebaseError(e);
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
    console.log("user login error: ", e);
    throw handleFirebaseError(e);
  }
};
