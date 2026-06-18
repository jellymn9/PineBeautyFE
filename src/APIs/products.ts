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
} from "firebase/firestore";
import { ValidationError as YupValidationError } from "yup";

import { db } from "@/firebase";

import { reportError } from "@/monitoring/reportError";
import {
  ProductsApiResponseI,
  //ProductI,
  GetProductT,
  //GetProductsBatchT,
  CategoryT,
} from "../utils/types/productTypes";
import { toLowercaseArray } from "@/helpers/formatters";
import { handleFirebaseError } from "@/errors/firebaseErrorHandler";
import { ERROR_CODES } from "@/errors/errorCodes";
import { NotFoundError } from "@/errors/appError";
import { productSchema, productsSchema } from "@/utils/schemas/productsSchema";
import { handleValidationError } from "@/errors/validationErrorHandler";

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

    const newProducts = await productsSchema.validate(
      querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })),
      { abortEarly: false, stripUnknown: true },
    );

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

    if (e instanceof YupValidationError) {
      handleValidationError(e);
    }

    throw handleFirebaseError(e);
  }
};

export const getSingleProduct: GetProductT = async (id: string) => {
  try {
    const productRef = doc(db, "products", id);
    const productSnap = await getDoc(productRef);

    if (!productSnap.exists()) {
      throw new NotFoundError(ERROR_CODES.NOT_FOUND);
    }

    const product = {
      id: productSnap.id,
      ...productSnap.data(),
    };

    return await productSchema.validate(product, {
      abortEarly: false,
      stripUnknown: true,
    });
  } catch (e) {
    reportError(e, {
      feature: "product",
      action: "get_product",
      extra: { id },
    });

    if (e instanceof YupValidationError) {
      handleValidationError(e);
    }

    if (e instanceof NotFoundError) {
      throw e;
    }

    throw handleFirebaseError(e);
  }
};

export const getFavsProducts = async () => {
  const bestSellers = query(
    collection(db, "products"),
    where("isBestSeller", "==", true),
    limit(9),
  );

  try {
    const snapshot = await getDocs(bestSellers);
    const products = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return await productsSchema.validate(products, {
      abortEarly: false,
      stripUnknown: true,
    });
  } catch (e) {
    reportError(e, {
      feature: "products",
      action: "get_favorite_products",
    });

    if (e instanceof YupValidationError) {
      handleValidationError(e);
    }

    throw handleFirebaseError(e);
  }
};
