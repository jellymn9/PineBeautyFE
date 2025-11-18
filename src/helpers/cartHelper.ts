import {
  CartItemsLocalT,
  CartDataLocalI,
  CartItemsUIT,
  NewItemT,
} from "@/utils/types/cartTypes";
import { createNewItem, removeItem, updateItems } from "./cartHelperCore";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function reviveCartDates(obj: CartDataLocalI): CartDataLocalI {
  const items = Object.fromEntries(
    Object.entries(obj.items || {}).map(([id, item]) => [
      id,
      {
        ...item,
        createdAt: new Date(item.createdAt),
        updatedAt: new Date(item.updatedAt),
      },
    ])
  );

  return { items };
}

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
  return cart ? reviveCartDates(JSON.parse(cart)) : { items: {} };
};

export const getCartItemsLocal = (): CartItemsLocalT => {
  const cart = getCartLocal();
  return cart ? reviveCartDates(JSON.parse(cart)).items : {};
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

// action for "plus"
export const plusAction = (cartItem: NewItemT) => {
  cartActionWrapper(
    () => {
      const newCart = {
        items: { [cartItem.id]: createNewItem(cartItem, new Date()) },
      };
      setCartLocal(newCart);
    },
    (items: CartItemsLocalT) => {
      const newItems = updateItems(items, cartItem, "plus", new Date());
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
      const newItems = updateItems(items, cartItem, "minus", new Date());
      if (Object.keys(newItems).length === 0) {
        clearCartLocal();
        return;
      }

      setCartLocal({ items: newItems });
    }
  );
};

export const mergeCartsLocal = (serverCart: CartDataLocalI): CartDataLocalI => {
  const itemsLocal = getCartLocalObj();

  const merged: CartDataLocalI = {
    items: { ...serverCart.items, ...itemsLocal.items },
  };
  return merged;
};

export const calcSubtotalPrice = (cartItems: CartItemsUIT): number => {
  const subtotalPrice = cartItems.reduce((acc, current) => {
    acc += current.price * current.quantity;
    return acc;
  }, 0);

  return subtotalPrice;
};
