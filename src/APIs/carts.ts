import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { CartData, CartItemI } from "../utils/types/cartTypes";
import { db } from "../firebase";

const setOrUpdateCart = async (
  userId: string,
  cartData: CartData
): Promise<void> => {
  if (!userId) {
    console.error("User ID is required to set or update cart.");
    return;
  }
  const cartRef = doc(db, "carts", userId);
  await setDoc(cartRef, cartData, { merge: true });
};

export const addProductToCart = async (
  userId: string,
  productToAdd: {
    id: string;
    name: string;
    price: number;
    image: string;
  }
): Promise<void> => {
  if (!userId || !productToAdd || !productToAdd.id) {
    console.error("User ID and a valid product with an ID are required.");
    return;
  }

  const cartRef = doc(db, "carts", userId);
  const cartSnap = await getDoc(cartRef);
  let cartItems: { [productId: string]: CartItemI } = {};

  if (cartSnap.exists()) {
    const currentCart = cartSnap.data() as CartData;
    cartItems = currentCart.items || {};
  }

  const existingItem = cartItems[productToAdd.id];
  if (existingItem) {
    existingItem.quantity += 1;
    cartItems[productToAdd.id] = existingItem;
  } else {
    const newItem: CartItemI = {
      ...productToAdd,
      quantity: 1,
    };
    cartItems[productToAdd.id] = newItem;
  }

  await setOrUpdateCart(userId, { items: cartItems });
};

export const removeProductFromCart = async (
  userId: string,
  productId: string
): Promise<void> => {
  if (!userId || !productId) {
    console.error("User ID and Product ID are required.");
    return;
  }

  const cartRef = doc(db, "carts", userId);
  const cartSnap = await getDoc(cartRef);

  if (cartSnap.exists()) {
    const currentCart = cartSnap.data() as CartData;
    const updatedItems = { ...currentCart.items };
    delete updatedItems[productId];

    try {
      await updateDoc(cartRef, { items: updatedItems });
    } catch (e) {
      console.error("Error updating cart items map:", e);
      throw e;
    }
  }
};

export const decreaseProductQuantity = async (
  userId: string,
  productId: string
): Promise<void> => {
  if (!userId || !productId) {
    console.error("User ID and Product ID are required.");
    return;
  }

  const cartRef = doc(db, "carts", userId);
  const cartSnap = await getDoc(cartRef);

  if (cartSnap.exists()) {
    const currentCart = cartSnap.data() as CartData;
    const cartItems = { ...currentCart.items };
    const existingItem = cartItems[productId];

    if (existingItem) {
      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        cartItems[productId] = existingItem;
        await setOrUpdateCart(userId, { items: cartItems });
      } else {
        await removeProductFromCart(userId, productId);
      }
    }
  }
};

export const increaseCartItemQuantity = async (
  userId: string,
  productId: string,
  amount: number = 1
): Promise<void> => {
  if (!userId || !productId) {
    console.error("User ID and Product ID are required.");
    return;
  }

  const cartRef = doc(db, "carts", userId);
  const cartSnap = await getDoc(cartRef);

  if (cartSnap.exists()) {
    const currentCart = cartSnap.data() as CartData;
    const cartItems = currentCart.items || {};
    const existingItem = cartItems[productId];

    if (existingItem) {
      existingItem.quantity += amount;

      cartItems[productId] = existingItem;

      await setOrUpdateCart(userId, { items: cartItems });
    } else {
      console.warn(
        `Attempted to increase quantity for non-existent product ID: ${productId}`
      );
    }
  }
};

export const getCart = async (userId: string | null): Promise<CartData> => {
  if (!userId) {
    return { items: {} };
  }

  try {
    const cartRef = doc(db, "carts", userId);

    const docSnap = await getDoc(cartRef);

    if (docSnap.exists()) {
      const cartData = docSnap.data() as CartData;
      return cartData;
    } else {
      return { items: {} };
    }
  } catch (err) {
    console.error("Error fetching cart:", err);
    return { items: {} };
  }
};

export const overwriteCart = async (
  userId: string,
  mergedCartData: CartData
): Promise<boolean> => {
  const cartRef = doc(db, "carts", userId);

  await setDoc(cartRef, mergedCartData);

  return true;
};
