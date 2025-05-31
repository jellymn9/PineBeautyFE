import apiClient from "../utils/axios";
import endpoint from "./endpoints";

export const register = async (
  username: string,
  email = "someemail@some.com",
  password: string
) => {
  try {
    const user = await apiClient.post(endpoint.auth + "/register", {
      username,
      email,
      password,
    });

    return user;
  } catch (e) {
    console.log("user registration error: ", e);
    throw e;
  }
};

export const login = async (username: string, password: string) => {
  try {
    const jwtToken: string = await apiClient.post(endpoint.auth + "/login", {
      username,
      password,
    });

    return jwtToken;
  } catch (e) {
    console.log("user login error: ", e);
    throw e;
  }
};
