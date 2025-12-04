import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import {
  CartDataFirebaseI,
  CartDataLocalI,
  CartDataWriteI,
  CartItemWriteT,
  NewItemT,
} from "@/utils/types/cartTypes";
import { db } from "@/firebase";
import { serverCartDateConversion } from "@/helpers/dataMapper";

const setOrUpdateCart = async (
  userId: string,
  cartData: CartDataWriteI
): Promise<void> => {
  if (!userId) {
    console.error("User ID is required to set or update cart.");
    return;
  }
  const cartRef = doc(db, "carts", userId);
  try {
    await setDoc(cartRef, cartData, { merge: true });
  } catch (e) {
    console.error("Error setting or updating cart:", e);
    throw e;
  }
};

export const addProductToCart = async (
  userId: string,
  productToAdd: NewItemT
): Promise<void> => {
  if (!userId || !productToAdd || !productToAdd.id) {
    console.error("User ID and a valid product with an ID are required.");
    return;
  }
  try {
    const cartRef = doc(db, "carts", userId);

    const cartSnap = await getDoc(cartRef);
    let cartItems: { [productId: string]: CartItemWriteT } = {};

    if (cartSnap.exists()) {
      const currentCart = cartSnap.data() as CartDataFirebaseI;
      cartItems = currentCart.items ? { ...currentCart.items } : {};
    }

    const existingItem = cartItems[productToAdd.id];
    if (existingItem) {
      const quantity = existingItem.quantity + 1;
      const updatedAt = serverTimestamp();

      cartItems[productToAdd.id] = { ...existingItem, quantity, updatedAt };
    } else {
      const newItem: CartItemWriteT = {
        ...productToAdd,
        quantity: 1,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      };

      cartItems[productToAdd.id] = newItem;
    }

    //throw new Error("Test error");
    await setOrUpdateCart(userId, { items: cartItems });
  } catch (e) {
    console.error("Error adding product to cart:", e);
    throw e;
  }
};

export const removeProductFromCart = async (
  userId: string,
  productId: string
): Promise<void> => {
  if (!userId || !productId) {
    console.error("User ID and Product ID are required.");
    return;
  }
  try {
    const cartRef = doc(db, "carts", userId);
    const cartSnap = await getDoc(cartRef);

    if (cartSnap.exists()) {
      const currentCart = cartSnap.data() as CartDataFirebaseI;
      const updatedItems = { ...currentCart.items };
      delete updatedItems[productId];

      await updateDoc(cartRef, { items: updatedItems });
    }
  } catch (e) {
    console.error("Error updating cart items map:", e);
    throw e;
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
  try {
    const cartRef = doc(db, "carts", userId);
    const cartSnap = await getDoc(cartRef);

    if (cartSnap.exists()) {
      const currentCart = cartSnap.data() as CartDataWriteI;
      const cartItems = { ...currentCart.items };
      const existingItem = cartItems[productId];

      if (existingItem) {
        if (existingItem.quantity > 1) {
          cartItems[productId] = {
            ...existingItem,
            quantity: existingItem.quantity - 1,
            updatedAt: serverTimestamp(),
          };
          await setOrUpdateCart(userId, { items: cartItems });
        } else {
          await removeProductFromCart(userId, productId);
        }
      }
    }
  } catch (e) {
    console.error("Error decreasing product quantity:", e);
    throw e;
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

  try {
    const cartRef = doc(db, "carts", userId);
    const cartSnap = await getDoc(cartRef);

    if (cartSnap.exists()) {
      const currentCart = cartSnap.data() as CartDataWriteI;
      const cartItems = currentCart.items ? { ...currentCart.items } : {};
      const existingItem = cartItems[productId];

      if (existingItem) {
        cartItems[productId] = {
          ...existingItem,
          quantity: existingItem.quantity + amount,
          updatedAt: serverTimestamp(),
        };

        await setOrUpdateCart(userId, { items: cartItems });
      } else {
        console.warn(
          `Attempted to increase quantity for non-existent product ID: ${productId}`
        );
        throw new Error(
          "Attempted to increase quantity for non-existent product ID."
        );
      }
    }
  } catch (e) {
    console.error("Error increasing product quantity:", e);
    throw e;
  }
};

export const getCart = async (
  userId: string | null
): Promise<CartDataLocalI> => {
  if (!userId) {
    return { items: {} };
  }

  try {
    const cartRef = doc(db, "carts", userId);

    const docSnap = await getDoc(cartRef);

    if (docSnap.exists()) {
      const cartData = docSnap.data() as CartDataFirebaseI;
      return serverCartDateConversion(cartData);
    } else {
      return { items: {} };
    }
  } catch (err) {
    console.error("Error fetching cart:", err);
    return { items: {} }; //change this
  }
};

export const overwriteCart = async (
  userId: string,
  mergedCartData: CartDataLocalI
): Promise<boolean> => {
  const cartRef = doc(db, "carts", userId);
  try {
    await setDoc(cartRef, mergedCartData);

    return true;
  } catch (error) {
    console.error("Error overwriting cart:", error);
    return false;
  }
};
