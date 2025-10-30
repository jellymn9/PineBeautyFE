import { CartData } from "@/utils/types/cartTypes";

export const calculateSubtotal = (
  products: Array<{ price: number; quantity: number }>
) => {
  return products.reduce((acc, cur) => {
    return acc + cur.price * cur.quantity;
  }, 0);
};

export const getCartLocal = () => window.localStorage.getItem("cart");

export const setOrUpdateCartLS = (cartData: CartData) => {
  try {
    const cartItem = window.localStorage.getItem("cart");
    if (!cartItem) {
      window.localStorage.setItem("cart", JSON.stringify(cartData));
      return true;
    }
    const cartExisting = JSON.parse(cartItem);
    const cartExistingItems = cartExisting.items ?? { items: {} };

    Object.keys(cartData.items).forEach((productId) => {
      const newItem = cartData.items[productId];
      if (cartExistingItems[productId]) {
        cartExistingItems[productId] = {
          ...cartExistingItems[productId],
          quantity: cartExistingItems[productId].quantity + 1,
        };
      } else {
        cartExistingItems[productId] = newItem;
      }
    });

    window.localStorage.setItem("cart", JSON.stringify(cartExisting));
    return true;
  } catch (e) {
    console.error("Error on updating cart in localStorage:", e);
  }
}; // improve function so it can be used for counter from cart page as well

export const mergeCartsLocal = (serverCart: CartData) => {
  const localCart = getCartLocal();
  if (!localCart) {
    return;
  }

  const localCartData: CartData = JSON.parse(localCart);
  const merged: CartData = {
    items: { ...serverCart.items, ...localCartData.items },
  };

  return merged;
};

export const clearCartLocal = () => {
  window.localStorage.removeItem("cart");
  return true;
};
