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

export const getCartItemsLocal = (): CartItemsI | null => {
  const cart = window.localStorage.getItem("cart");
  return cart ? JSON.parse(cart).items : null;
};

export function clearCartLocal() {
  window.localStorage.removeItem("cart");
  return true;
}

export const removeItemFromCartLS = (productId: string) => {
  cartActionWrapper(
    () => {
      return;
    },
    (items: CartItemsI) => {
      const newItems = removeItem(items, productId);
      setCartLocal({ items: newItems });
    }
  );
};

function cartActionWrapper(
  noCartCallback: () => void,
  actionCallback: (items: CartItemsI) => void
) {
  const cartExistingItems = getCartItemsLocal();
  if (!cartExistingItems) {
    noCartCallback();
    return;
  }

  actionCallback(cartExistingItems);
}

export const setCartLocal = (cart: CartDataI) => {
  window.localStorage.setItem("cart", JSON.stringify(cart));
};

const updateQuantity = (
  item: CartItemT,
  action: ActionCartT = "increment"
): CartItemT => {
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

const removeItem = (cartItems: CartItemsI, itemId: string): CartItemsI => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { [itemId]: _removedItem, ...items } = cartItems;
  return items;
};

const updateItems = (
  cartItems: CartItemsI,
  item: CartItemT,
  action: "plus" | "minus"
): CartItemsI => {
  const itemInCart = cartItems[item.id];

  switch (action) {
    case "plus": {
      const hasItem = !!itemInCart;

      return {
        ...cartItems,
        [item.id]: hasItem ? item : updateQuantity(item, "increment"),
      };
    }
    case "minus": {
      const itemQuantity = itemInCart.quantity;
      if (itemQuantity > 1) {
        return {
          ...cartItems,
          [item.id]: updateQuantity(item, "decrement"),
        };
      } else {
        return removeItem(cartItems, item.id);
      }
    }
    default:
      return cartItems;
  }
};

// action for "plus"
export const plusAction = (cartItem: CartItemT) => {
  cartActionWrapper(
    () => {
      const newCart = { items: { [cartItem.id]: cartItem } };
      setCartLocal(newCart);
    },
    (items: CartItemsI) => {
      const newItems = updateItems(items, cartItem, "plus");
      setCartLocal({ items: newItems });
    }
  );
};

// action for "minus"
export const minusAction = (cartItem: CartItemT) => {
  cartActionWrapper(
    () => {
      return;
    },
    (items: CartItemsI) => {
      const newItems = updateItems(items, cartItem, "minus");
      if (Object.keys(newItems).length === 0) {
        clearCartLocal();
        return;
      }

      setCartLocal({ items: newItems });
    }
  );
};

export const mergeCartsLocal = (
  serverCart: CartDataI
): CartDataI | undefined => {
  const localCartItems = getCartItemsLocal();
  if (!localCartItems) {
    return;
  }

  const merged: CartDataI = {
    items: { ...serverCart.items, ...localCartItems },
  };

  return merged;
};
