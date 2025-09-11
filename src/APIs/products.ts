import {
  collection,
  query,
  orderBy,
  startAfter,
  limit,
  getDocs,
  QueryDocumentSnapshot,
} from "firebase/firestore";

import { db } from "../firebase";

import apiClient from "../utils/axios";
import endpoint from "./endpoints";
import { ProductsApiResponseI, ProductI } from "../utils/types/productTypes";

import { RawProductT, GetProductT } from "../utils/types";

export const getProducts = async (
  currentLastProduct: QueryDocumentSnapshot | null,
  productsPerPage = 20
): Promise<ProductsApiResponseI> => {
  try {
    const productsRef = collection(db, "products");

    let q;
    if (!currentLastProduct) {
      q = query(productsRef, orderBy("name"), limit(productsPerPage));
    } else {
      q = query(
        productsRef,
        orderBy("name"),
        startAfter(currentLastProduct),
        limit(productsPerPage)
      );
    }

    const querySnapshot = await getDocs(q);

    const newProducts = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Array<ProductI>;

    const newLastVisible =
      querySnapshot.docs[querySnapshot.docs.length - 1] || null;
    const possiblyMore = querySnapshot.docs.length === productsPerPage;

    return { list: newProducts, cursor: newLastVisible, hasMore: possiblyMore };
  } catch (e) {
    console.log("error: ", e);
    throw e;
  }
};

// export const getProducts: GetProductsT = ({
//   // go back to types here!
//   isForward = true,
//   page = 6,
//   skip,
//   cursor,
// }) => {
//   return apiClient
//     .get<FetchProductsData>(endpoint.products, {
//       params: {
//         isForward: isForward ? "1" : "",
//         page,
//         skip,
//         cursor: cursor ?? "",
//       },
//     })
//     .then(({ data }) => {
//       return data;
//     })
//     .catch((e) => {
//       console.log("error: ", e);
//       throw e;
//     });
// };

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
