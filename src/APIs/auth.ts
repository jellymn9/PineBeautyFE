import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

//import apiClient from "../utils/axios";
//import endpoint from "./endpoints";

// export const register = async (
//   username: string,
//   email = "someemail@some.com",
//   password: string
// ) => {
//   try {
//     const user = await apiClient.post(endpoint.auth + "/register", {
//       username,
//       email,
//       password,
//     });

//     return user;
//   } catch (e) {
//     console.log("user registration error: ", e);
//     throw e;
//   }
// };

// export const login = async (username: string, password: string) => {
//   try {
//     const jwtToken: string = await apiClient.post(endpoint.auth + "/login", {
//       username,
//       password,
//     });

//     return jwtToken;
//   } catch (e) {
//     console.log("user login error: ", e);
//     throw e;
//   }
// };

export const register = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    // User account created and signed in successfully.
    // The user's information is available in userCredential.user
    console.log("User registered:", userCredential.user);

    return userCredential.user;
  } catch (e) {
    console.error("User registration error:", e);
    throw e;
  }
};

export const login = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    return userCredential.user;
  } catch (e) {
    console.log("user login error: ", e);
    throw e;
  }
};
