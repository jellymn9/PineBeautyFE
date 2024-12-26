import apiClient from "../utils/axios";
import endpoint from "./endpoints";

import { FetchProductsData, GetProductsT, GetProductT } from "../utils/types";

export const getProducts: GetProductsT = ({
  // go back to types here!
  isForward = true,
  page = 6,
  skip,
  cursor,
}) => {
  return apiClient
    .get<FetchProductsData>(endpoint.products, {
      params: {
        isForward: isForward ? "1" : "",
        page,
        skip,
        cursor: cursor ?? "",
      },
    })
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
