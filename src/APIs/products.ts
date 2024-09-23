import axios from "axios";
import endpoint from "./endpoints";

export const fetchProducts = async (isForward = true, page = 2) => {
  return axios
    .get(`${endpoint.products}?isForward=${isForward}&page=${page}`)
    .then((v) => v)
    .catch((e) => {
      console.log("error: ", e);
      return e;
    });
};
