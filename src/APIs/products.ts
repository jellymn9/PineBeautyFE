import {
  collection,
  query,
  orderBy,
  startAfter,
  limit,
  getDocs,
  doc,
  getDoc,
  where,
  //DocumentData,
} from "firebase/firestore";

import { db } from "@/firebase";

import { reportError } from "@/monitoring/reportError";
import {
  ProductsApiResponseI,
  ProductI,
  GetProductT,
  //GetProductsBatchT,
  CategoryT,
} from "../utils/types/productTypes";
import { toLowercaseArray } from "@/helpers/formatters";
import { handleFirebaseError } from "@/errors/firebaseErrorHandler";
import { ERROR_CODES } from "@/errors/errorCodes";
import { NotFoundError } from "@/errors/appError";

export const getProducts = async (
  currentLastProduct: { name: string; id: string } | null,
  productsPerPage = 20,
  selectedCategories: CategoryT[] = [],
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
        where("category", "in", lowerCaseCategories.slice(0, 10)),
      );
    }

    // sorting + pagination
    constraints.push(orderBy("name"));
    if (currentLastProduct) {
      constraints.push(startAfter(currentLastProduct.name));
    }
    constraints.push(limit(productsPerPage));

    const q = query(productsRef, ...constraints);
    const querySnapshot = await getDocs(q);

    const newProducts = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as ProductI[];

    console.log("fetched products: ", newProducts);

    const newLastVisibleDoc = querySnapshot.docs[querySnapshot.docs.length - 1];

    const newLastVisible = newLastVisibleDoc
      ? { name: newLastVisibleDoc.data().name, id: newLastVisibleDoc.id }
      : null;

    const hasMore = querySnapshot.docs.length === productsPerPage;

    return { list: newProducts, cursor: newLastVisible, hasMore };
  } catch (e) {
    reportError(e, {
      feature: "products",
      action: "get_products_list",
      extra: { currentLastProduct, productsPerPage, selectedCategories },
    });

    throw handleFirebaseError(e);
  }
};

export const getSingleProduct: GetProductT = async (id: string) => {
  try {
    const productRef = doc(db, "products", id);

    const productSnap = await getDoc(productRef);

    if (productSnap.exists()) {
      return {
        id: productSnap.id,
        ...productSnap.data(),
      } as ProductI;
    } else {
      throw new NotFoundError(ERROR_CODES.NOT_FOUND);
    }
  } catch (e) {
    console.error("Error getting product:", e);
    reportError(e, {
      feature: "product",
      action: "get_product",
      extra: { id },
    });

    throw handleFirebaseError(e);
  }
};

// export const getProductsBatch: GetProductsBatchT = async (
//   ids: Array<string>,
// ) => {
//   if (ids.length === 0) {
//     return [];
//   }

//   try {
//     const productsRef = collection(db, "products");
//     const allProducts: Array<ProductI> = [];

//     // Firestore `in` operator has a limit of 10 items.
//     const chunks = [];
//     for (let i = 0; i < ids.length; i += 10) {
//       chunks.push(ids.slice(i, i + 10));
//     }

//     // Process each chunk with a separate query
//     const promises = chunks.map((chunk) => {
//       const q = query(productsRef, where("__name__", "in", chunk));
//       return getDocs(q);
//     });

//     const snapshots = await Promise.all(promises);

//     // Combine the results from all snapshots
//     snapshots.forEach((snapshot) => {
//       snapshot.docs.forEach((doc) => {
//         allProducts.push({
//           id: doc.id,
//           ...(doc.data() as DocumentData),
//         } as ProductI);
//       });
//     });

//     return allProducts;
//   } catch (e) {
//     console.error("Error getting products batch:", e);
//     reportError(e, {
//       feature: "products",
//       action: "get_favorite_products_batch",
//       extra: { productsIds: ids },
//     });

//     throw handleFirebaseError(e);
//   }
// };

export const getFavsProducts = async () => {
  const bestSellers = query(
    collection(db, "products"),
    where("isBestSeller", "==", true),
    limit(9),
  );

  try {
    const snapshot = await getDocs(bestSellers);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Array<ProductI>;
  } catch (e) {
    console.error("Error getting best sellers:");
    reportError(e, {
      feature: "products",
      action: "get_favorite_products",
    });

    throw handleFirebaseError(e);
  }
};
