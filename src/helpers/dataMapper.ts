import {
  CartDataFirebaseI,
  CartDataLocalI,
  CartItemsLocalT,
  CartItemsUIT,
} from "@/utils/types/cartTypes";
import { Timestamp } from "firebase/firestore";

// export const mapQuantityToProducts = (
//   products: Array<ProductI>,
//   productsWithQuantity: Array<CartItemI>
// ) => {
//   const productsMap = new Map(products.map((p) => [p.id, p]));

//   return productsWithQuantity.map((p) => {
//     const product = productsMap.get(p.id);
//     if (!product) {
//       // type guard
//       throw new Error(`Product with ID ${p.id} not found.`);
//     }
//     return {
//       ...product,
//       quantity: p.quantity,
//       //accPrice: product.price * p.quantity,
//     };
//   });
// };

const normalizeTimestamp = (date: Timestamp | null): Date => {
  return date instanceof Timestamp ? date.toDate() : new Date(Date.now());
};

export const serverCartDateConversion = (
  cart: CartDataFirebaseI
): CartDataLocalI => {
  const items = { ...cart.items };
  const newItems: CartItemsLocalT = {};

  Object.keys(items).forEach((key) => {
    newItems[key] = {
      ...items[key],
      createdAt: normalizeTimestamp(items[key].createdAt),
      updatedAt: normalizeTimestamp(items[key].updatedAt),
    };
  });
  return { items: newItems };
};

export const itemToArrAndSort = (items: CartItemsLocalT): CartItemsUIT => {
  return Object.values(items).sort((a, b) =>
    a.createdAt > b.createdAt ? 1 : -1
  );
};
