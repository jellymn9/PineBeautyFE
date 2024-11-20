import axios from "axios";
import endpoint from "./endpoints";

import { FetchProductsT, GetProductT } from "../utils/types";

export const fetchProducts: FetchProductsT = async ({
  isForward = true,
  page = 6,
  skip,
  cursor,
}) => {
  // const product = await axios.get(endpoint.products, {
  //   params: { try params instead manualy adding params!
  //     id,
  //   },
  // });
  return axios //use either async/await or then syntax
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
    const product = await axios.get(endpoint.products + "/" + id);

    return product;
  } catch (e) {
    console.log("error: ", e);
    throw e;
  }
};
