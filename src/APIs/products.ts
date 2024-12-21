import apiClient from "../utils/axios";
import endpoint from "./endpoints";

import { FetchProductsT } from "../utils/types";

export const fetchProducts: FetchProductsT = async ({
  isForward = true,
  page = 6,
  skip,
  cursor,
}) => {
  return apiClient
    .get(
      `${endpoint.products}?isForward=${
        isForward ? "1" : ""
      }&page=${page}&skip=${skip[0]}&skip=${skip[1]}&cursor=${cursor ?? ""}`
    )
    .then(({ data }) => {
      return data;
    })
    .catch((e) => {
      console.log("error: ", e);
      throw e;
    });
};
