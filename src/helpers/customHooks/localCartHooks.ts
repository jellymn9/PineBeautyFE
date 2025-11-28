import { useState } from "react";
import {
  getCartLocalObj,
  minusAction,
  plusAction,
  removeItemFromCartLS,
} from "../cartHelper";
import { CartItemLocalT, NewItemT } from "@/utils/types/cartTypes";

function useLocalCart() {
  const [cart, setCart] = useState(getCartLocalObj());

  const isEmpty = Object.keys(cart.items).length === 0;

  const removeItem = (id: string) => {
    removeItemFromCartLS(id);
    setCart(getCartLocalObj());
  };

  const increaseAction = (product: NewItemT) => {
    plusAction(product);
    setCart(getCartLocalObj());
  };

  const decreaseAction = (product: CartItemLocalT) => {
    minusAction(product);
    setCart(getCartLocalObj());
  };

  return { cart, removeItem, increaseAction, decreaseAction, isEmpty };
}

export default useLocalCart;
