import {
  collection,
  query,
  orderBy,
  startAfter,
  limit,
  getDocs,
  QueryDocumentSnapshot,
  doc,
  getDoc,
  where,
  DocumentData,
} from "firebase/firestore";

import { db } from "@/firebase";

//import apiClient from "../utils/axios";
//import endpoint from "./endpoints";
import {
  ProductsApiResponseI,
  ProductI,
  GetProductT,
  GetProductsBatchT,
  CategoryT,
} from "../utils/types/productTypes";
import { toLowercaseArray } from "@/helpers/formatters";

//import { RawProductT } from "../utils/types";

// export const getProducts = async (
//   currentLastProduct: QueryDocumentSnapshot | null,
//   productsPerPage = 20
// ): Promise<ProductsApiResponseI> => {
//   try {
//     const productsRef = collection(db, "products");

//     let q;
//     if (!currentLastProduct) {
//       q = query(productsRef, orderBy("name"), limit(productsPerPage));
//     } else {
//       q = query(
//         productsRef,
//         orderBy("name"),
//         startAfter(currentLastProduct),
//         limit(productsPerPage)
//       );
//     }

//     const querySnapshot = await getDocs(q);

//     const newProducts = querySnapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     })) as Array<ProductI>;

//     const newLastVisible =
//       querySnapshot.docs[querySnapshot.docs.length - 1] || null;
//     const possiblyMore = querySnapshot.docs.length === productsPerPage;

//     return { list: newProducts, cursor: newLastVisible, hasMore: possiblyMore };
//   } catch (e) {
//     console.log("error: ", e);
//     throw e;
//   }
// };

export const getProducts = async (
  currentLastProduct: QueryDocumentSnapshot<DocumentData> | null,
  productsPerPage = 20,
  selectedCategories: CategoryT[] = []
): Promise<ProductsApiResponseI> => {
  try {
    const productsRef = collection(db, "products");

    const lowerCaseCategories = toLowercaseArray(selectedCategories);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const constraints: any[] = [];

    // filtering
    if (lowerCaseCategories.length === 1) {
      constraints.push(where("category", "==", lowerCaseCategories[0]));
    } else if (lowerCaseCategories.length > 1) {
      constraints.push(
        where("category", "in", lowerCaseCategories.slice(0, 10))
      );
    }

    // sorting + pagination
    constraints.push(orderBy("name"));
    if (currentLastProduct) {
      constraints.push(startAfter(currentLastProduct));
    }
    constraints.push(limit(productsPerPage));

    const q = query(productsRef, ...constraints);
    const querySnapshot = await getDocs(q);

    const newProducts = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as ProductI[];

    console.log("fetched products: ", newProducts);

    const newLastVisible =
      querySnapshot.docs[querySnapshot.docs.length - 1] || null;

    const hasMore = querySnapshot.docs.length === productsPerPage;

    return { list: newProducts, cursor: newLastVisible, hasMore };
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

// export const getSingleProduct: GetProductT = async (id?: string) => {
//   // fix type later
//   try {
//     const product = await apiClient.get(endpoint.products + "/" + id);

//     return product;
//   } catch (e) {
//     console.log("error: ", e);
//     throw e;
//   }
// };

export const getSingleProduct: GetProductT = async (id?: string) => {
  if (!id) {
    return null;
  }

  try {
    const productRef = doc(db, "products", id);

    const productSnap = await getDoc(productRef);
    console.log("p: ", productSnap.data());

    if (productSnap.exists()) {
      return {
        id: productSnap.id,
        ...productSnap.data(),
      } as ProductI;
    } else {
      return null;
    }
  } catch (e) {
    console.error("Error getting product:", e);
    throw e;
  }
};

export const getProductsBatch: GetProductsBatchT = async (
  ids: Array<string>
) => {
  if (ids.length === 0) {
    return [];
  }

  try {
    const productsRef = collection(db, "products");
    const allProducts: Array<ProductI> = [];

    // Firestore `in` operator has a limit of 10 items.
    const chunks = [];
    for (let i = 0; i < ids.length; i += 10) {
      chunks.push(ids.slice(i, i + 10));
    }

    // Process each chunk with a separate query
    const promises = chunks.map((chunk) => {
      const q = query(productsRef, where("__name__", "in", chunk));
      return getDocs(q);
    });

    const snapshots = await Promise.all(promises);

    // Combine the results from all snapshots
    snapshots.forEach((snapshot) => {
      snapshot.docs.forEach((doc) => {
        allProducts.push({
          id: doc.id,
          ...(doc.data() as DocumentData),
        } as ProductI);
      });
    });

    return allProducts;
  } catch (e) {
    console.error("Error getting products batch:", e);
    throw e;
  }
};

// export const getProductsBatch = async (ids: Array<string>) => {
//   try {
//     const products = await apiClient.post<{ products: Array<RawProductT> }>(
//       endpoint.products,
//       { ids }
//     );

//     return products.data?.products;
//   } catch (e) {
//     console.log("error: ", e);
//     throw e;
//   }
// };
