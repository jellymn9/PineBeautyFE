import axios from "axios";
import endpoint from "./endpoints";

import { RawProductDataT } from "../utils/types";

export const fetchProducts = async (isForward = true, page = 2) => {
  return axios
    .get<RawProductDataT>(
      `${endpoint.products}?isForward=${isForward}&page=${page}`
    )
    .then((v) => v)
    .catch((e) => {
      console.log("error: ", e);
      throw e;
    });
};