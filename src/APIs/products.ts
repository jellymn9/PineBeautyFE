import apiClient from "../utils/axios";
import endpoint from "./endpoints";

import {
  FetchProductsData,
  GetProductsT,
  GetProductT,
  RawProductT,
} from "../utils/types";

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
  // fix type later
  try {
    const product = await apiClient.get(endpoint.products + "/" + id);

    return product;
  } catch (e) {
    console.log("error: ", e);
    throw e;
  }
};

export const getProductsBatch = async (ids: Array<string>) => {
  try {
    const products = await apiClient.post<{ products: Array<RawProductT> }>(
      endpoint.products,
      { ids }
    );

    return products.data?.products;
  } catch (e) {
    console.log("error: ", e);
    throw e;
  }
};
