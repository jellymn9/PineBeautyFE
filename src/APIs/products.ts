import apiClient from "../utils/axios";
import endpoint from "./endpoints";

import { FetchProductsT, GetProductT } from "../utils/types";

export const fetchProducts: FetchProductsT = ({
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

export const getSingleProduct: GetProductT = async (id?: string) => {
  try {
    const product = await apiClient.get(endpoint.products + "/" + id);

    return product;
  } catch (e) {
    console.log("error: ", e);
    throw e;
  }
};
