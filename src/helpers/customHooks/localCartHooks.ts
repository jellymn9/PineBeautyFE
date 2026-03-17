import { useState } from "react";
import {
  getCartLocalObj,
  minusAction,
  plusAction,
  removeItemFromCartLS,
} from "../cartHelper";
import {
  CartDataLocalI,
  CartItemLocalT,
  NewItemT,
} from "@/utils/types/cartTypes";
import { AppError } from "@/errors/appError";

const emptyCart: CartDataLocalI = { items: {} };

function useLocalCart() {
  const [error, setError] = useState<string | null>(null);
  const [cart, setCart] = useState<CartDataLocalI>(() => {
    try {
      return getCartLocalObj();
    } catch {
      setError("Could not load your cart");
      return emptyCart;
    }
  });

  const isEmpty = Object.keys(cart.items).length === 0;

  const removeItem = (id: string) => {
    try {
      removeItemFromCartLS(id);
      setCart(getCartLocalObj());
    } catch {
      throw new AppError("Failed to update cart");
    }
  };

  const increaseAction = (product: NewItemT) => {
    try {
      plusAction(product);
      setCart(getCartLocalObj());
    } catch {
      throw new AppError("Failed to update cart");
    }
  };

  const decreaseAction = (product: CartItemLocalT) => {
    try {
      minusAction(product);
      setCart(getCartLocalObj());
    } catch {
      throw new AppError("Failed to update cart");
    }
  };

  return { cart, removeItem, increaseAction, decreaseAction, isEmpty, error };
}

export default useLocalCart;
