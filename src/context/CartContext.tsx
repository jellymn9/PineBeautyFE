import {
  getCartLocalObj,
  plusAction,
  minusAction,
  removeItemFromCartLS,
} from "@/helpers/cartHelper";
import { itemToArrAndSort } from "@/helpers/dataMapper";
import {
  CartDataLocalI,
  CartItemLocalT,
  CartItemsUIT,
  NewItemT,
} from "@/utils/types/cartTypes";
import { createContext, ReactNode, useState } from "react";
import { useAuth } from "./AuthContext";
import {
  addProductToCart,
  decreaseProductQuantity,
  increaseCartItemQuantity,
  removeProductFromCart,
} from "@/APIs/carts";
import { useCart } from "@/helpers/customHooks/cartCustomHooks";

interface CartContextTypeI {
  cartItems: CartItemsUIT;
  removeItem: (id: string) => void;
  increase: (product: CartItemLocalT) => void;
  decrease: (product: CartItemLocalT) => void;
  productAdd: (product: NewItemT) => void;
}

const initialValue: CartContextTypeI = {
  cartItems: [],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  removeItem: (_id) => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  increase: (_product) => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  decrease: (_product) => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  productAdd: (_product) => {},
};

export const CartContext = createContext<CartContextTypeI>(initialValue);

export const CartProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const { user } = useAuth();
  const { cart: serverCart } = useCart(user?.uid || null);
  const [localCart, setLocalCart] = useState<CartDataLocalI>(getCartLocalObj());

  const cartItems = user
    ? itemToArrAndSort(serverCart.items)
    : itemToArrAndSort(localCart.items);

  const removeItemLocal = (id: string) => {
    removeItemFromCartLS(id);
    setLocalCart(getCartLocalObj()); // Is there event for ls changes???
  };

  const removeItemFromServer = async (userId: string, productId: string) => {
    await removeProductFromCart(userId, productId);
  };

  const removeItem = async (id: string) => {
    if (user) {
      await removeItemFromServer(user.uid, id);
    } else {
      removeItemLocal(id);
    }
  };

  const increaseActionServer = async (userId: string, productId: string) => {
    await increaseCartItemQuantity(userId, productId);
  };

  const increaseActionLocal = (product: NewItemT) => {
    plusAction(product);
    setLocalCart(getCartLocalObj());
  };

  const increase = async (product: CartItemLocalT) => {
    if (user) {
      await increaseActionServer(user.uid, product.id);
    } else {
      increaseActionLocal(product);
    }
  };

  const decreaseActionServer = async (userId: string, productId: string) => {
    await decreaseProductQuantity(userId, productId);
  };

  const decreaseActionLocal = (product: CartItemLocalT) => {
    minusAction(product);
    setLocalCart(getCartLocalObj());
  };

  const decrease = async (product: CartItemLocalT) => {
    if (user) {
      await decreaseActionServer(user.uid, product.id);
    } else {
      decreaseActionLocal(product);
    }
  };

  const productAddServer = async (userId: string, product: NewItemT) => {
    await addProductToCart(userId, product);
  };

  const productAdd = async (product: NewItemT) => {
    if (user) {
      await productAddServer(user.uid, product);
    } else {
      increaseActionLocal(product);
    }
  };

  return (
    <CartContext.Provider
      value={{ cartItems, removeItem, increase, decrease, productAdd }}
    >
      {children}
    </CartContext.Provider>
  );
};
