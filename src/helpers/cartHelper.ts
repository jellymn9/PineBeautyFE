import {
  ActionCartT,
  CartItemsLocalT,
  CartDataLocalI,
  //ItemToAddOrUpdateT,
  CartItemLocalT,
  CartItemsUIT,
  NewItemT,
} from "@/utils/types/cartTypes";

export const calculateSubtotal = (
  products: Array<{ price: number; quantity: number }>
) => {
  return products.reduce((acc, cur) => {
    return acc + cur.price * cur.quantity;
  }, 0);
};

export const getCartLocal = () => window.localStorage.getItem("cart") || null;

export const getCartLocalObj = (): CartDataLocalI => {
  const cart = getCartLocal();
  return cart ? JSON.parse(cart) : { items: {} };
};

export const getCartItemsLocal = (): CartItemsLocalT => {
  const cart = getCartLocal();
  return cart ? JSON.parse(cart).items : {};
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
    (items: CartItemsLocalT) => {
      const newItems = removeItem(items, productId);
      setCartLocal({ items: newItems });
    }
  );
};

function cartActionWrapper(
  noCartCallback: () => void,
  actionCallback: (items: CartItemsLocalT) => void
) {
  const cartExistingItems = getCartItemsLocal();
  if (!getCartLocal()) {
    noCartCallback();
    return;
  }

  return actionCallback(cartExistingItems);
}

export const setCartLocal = (cart: CartDataLocalI) => {
  window.localStorage.setItem("cart", JSON.stringify(cart));
};

const newItem = (
  item: Omit<CartItemLocalT, "createdAt" | "updatedAt" | "quantity">
): CartItemLocalT => {
  return {
    ...item,
    quantity: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
};

const updateItem = (
  item: CartItemLocalT,
  action: ActionCartT = "increment"
): CartItemLocalT => {
  if (action === "increment") {
    return {
      ...item,
      quantity: item.quantity + 1,
      updatedAt: new Date(),
    };
  } else {
    return {
      ...item,
      quantity: item.quantity - 1,
      updatedAt: new Date(),
    };
  }
};

const removeItem = (
  cartItems: CartItemsLocalT,
  itemId: string
): CartItemsLocalT => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { [itemId]: _removedItem, ...items } = cartItems;
  return items;
};

const updateItems = (
  cartItems: CartItemsLocalT,
  item: NewItemT,
  action: "plus" | "minus"
): CartItemsLocalT => {
  const itemInCart = cartItems[item.id];

  switch (action) {
    case "plus": {
      const hasItem = !!itemInCart;

      return {
        ...cartItems,
        [item.id]: hasItem
          ? updateItem(itemInCart, "increment")
          : newItem(item),
      };
    }
    case "minus": {
      const itemQuantity = itemInCart.quantity;
      if (itemQuantity > 1) {
        return {
          ...cartItems,
          [item.id]: updateItem(itemInCart, "decrement"),
        };
      } else {
        return removeItem(cartItems, itemInCart.id);
      }
    }
    default:
      return cartItems;
  }
};

// action for "plus"
export const plusAction = (cartItem: NewItemT) => {
  cartActionWrapper(
    () => {
      const newCart = { items: { [cartItem.id]: newItem(cartItem) } };
      setCartLocal(newCart);
    },
    (items: CartItemsLocalT) => {
      const newItems = updateItems(items, cartItem, "plus");
      setCartLocal({ items: newItems });
    }
  );
};

// action for "minus"
export const minusAction = (cartItem: NewItemT) => {
  cartActionWrapper(
    () => {
      return;
    },
    (items: CartItemsLocalT) => {
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
  serverCart: CartDataLocalI
): CartDataLocalI | void => {
  return cartActionWrapper(
    () => {
      return;
    },
    (items: CartItemsLocalT) => {
      const merged: CartDataLocalI = {
        items: { ...serverCart.items, ...items },
      };
      return merged;
    }
  );
};

export const calcSubtotalPrice = (cartItems: CartItemsUIT): number => {
  const subtotalPrice = cartItems.reduce((acc, current) => {
    acc += current.price * current.quantity;
    return acc;
  }, 0);

  return subtotalPrice;
};
