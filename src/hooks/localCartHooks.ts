import { useState } from "react";
import {
  getCartLocalObj,
  minusAction,
  plusAction,
  removeItemFromCartLS,
} from "../helpers/cartHelper";
import {
  CartDataLocalI,
  CartItemLocalT,
  NewItemT,
} from "@/utils/types/cartTypes";
import { AppError } from "@/errors/appError";
import { ERROR_CODES } from "@/errors/errorCodes";

const emptyCart: CartDataLocalI = { items: {} };

function useLocalCart() {
  const [error, setError] = useState<unknown>(null);

  const [cart, setCart] = useState<CartDataLocalI>(() => {
    try {
      return getCartLocalObj();
    } catch (e) {
      setError(e);
      return emptyCart;
    }
  });

  const isEmpty = Object.keys(cart.items).length === 0;

  const removeItem = (id: string) => {
    try {
      removeItemFromCartLS(id);
      setCart(getCartLocalObj());
    } catch (e) {
      throw new AppError(ERROR_CODES.UNKNOWN, undefined, e);
    }
  };

  const increaseAction = (product: NewItemT) => {
    try {
      plusAction(product);
      setCart(getCartLocalObj());
    } catch (e) {
      throw new AppError(ERROR_CODES.UNKNOWN, undefined, e);
    }
  };

  const decreaseAction = (product: CartItemLocalT) => {
    try {
      minusAction(product);
      setCart(getCartLocalObj());
    } catch (e) {
      throw new AppError(ERROR_CODES.UNKNOWN, undefined, e);
    }
  };

  return { cart, removeItem, increaseAction, decreaseAction, isEmpty, error };
}

export default useLocalCart;
