import {
  ActionCartT,
  CartDataI,
  CartItemsI,
  CartItemT,
} from "@/utils/types/cartTypes";

export const calculateSubtotal = (
  products: Array<{ price: number; quantity: number }>
) => {
  return products.reduce((acc, cur) => {
    return acc + cur.price * cur.quantity;
  }, 0);
};

export const getCartLocal = () => window.localStorage.getItem("cart");

export const setCartLocal = (cart: CartDataI) => {
  window.localStorage.setItem("cart", JSON.stringify(cart));
};

const updateQuantity = (item: CartItemT, action: ActionCartT = "increment") => {
  if (action === "increment") {
    return {
      ...item,
      quantity: item.quantity + 1,
    };
  } else {
    return {
      ...item,
      quantity: item.quantity - 1,
    };
  }
};

export const setOrUpdateCartLS = (cartItem: CartItemT) => {
  try {
    const cart = getCartLocal();
    if (!cart) {
      //create new cart
      const newCart = { items: { [cartItem.id]: cartItem } };
      setCartLocal(newCart);
      return true;
    }
    const cartExistingItems: CartItemsI = JSON.parse(cart).items ?? {};

    //update existing cart item or add new item
    const newItems = {
      ...cartExistingItems,
      [cartItem.id]: cartExistingItems[cartItem.id]
        ? updateQuantity(cartExistingItems[cartItem.id])
        : cartItem,
    };

    setCartLocal({ items: newItems });
    return true;
  } catch (e) {
    console.error("Error on updating cart in localStorage:", e);
  }
};

export const mergeCartsLocal = (serverCart: CartDataI) => {
  const localCart = getCartLocal();
  if (!localCart) {
    return;
  }

  const localCartData: CartDataI = JSON.parse(localCart);
  const merged: CartDataI = {
    items: { ...serverCart.items, ...localCartData.items },
  };

  return merged;
};

export const clearCartLocal = () => {
  window.localStorage.removeItem("cart");
  return true;
};

export const removeItemFromCartLS = (productId: string) => {
  const cartItem = getCartLocal();
  if (!cartItem) {
    return;
  }
  const cartExisting = JSON.parse(cartItem);
  const cartExistingItems = cartExisting.items ?? { items: {} };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { [productId]: _removedItem, ...rest } = cartExistingItems;

  setCartLocal({ items: rest });
};
