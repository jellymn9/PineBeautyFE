import { createContext, ReactNode, useContext } from "react";

import { useAuth } from "./AuthContext";
import {
  addProductToCart,
  decreaseProductQuantity,
  increaseCartItemQuantity,
  removeProductFromCart,
} from "@/APIs/carts";
import { itemToArrAndSort } from "@/helpers/dataMapper";
import { useCart } from "@/helpers/customHooks/serverCartHooks";
import useLocalCart from "@/helpers/customHooks/localCartHooks";
import {
  CartItemLocalT,
  CartItemsUIT,
  NewItemT,
} from "@/utils/types/cartTypes";

interface CartContextTypeI {
  cartItems: CartItemsUIT;
  removeItem: (id: string) => void;
  increase: (product: CartItemLocalT) => void;
  decrease: (product: CartItemLocalT) => void;
  addProduct: (product: NewItemT) => void;
  isLoading: boolean;
  isEmpty: boolean;
}

export const CartContext = createContext<CartContextTypeI | undefined>(
  undefined
);

export const CartProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const { user, isAuthLoading } = useAuth();
  const { cart: serverCart, loading: serverLoading } = useCart(
    user?.uid || null
  );
  const {
    cart: localCart,
    removeItem,
    increaseAction,
    decreaseAction,
  } = useLocalCart();

  let cart: Omit<CartContextTypeI, "isEmpty">;

  if (isAuthLoading) {
    cart = {
      cartItems: [],
      removeItem: () => {},
      increase: () => {},
      decrease: () => {},
      addProduct: () => {},
      isLoading: true,
      //isEmpty: true,
    };
  } else if (user) {
    cart = {
      cartItems: itemToArrAndSort(serverCart.items),
      removeItem: (productId: string) => {
        removeProductFromCart(user.uid, productId);
      },
      increase: (product) => {
        increaseCartItemQuantity(user.uid, product.id);
      },
      decrease: (product) => {
        decreaseProductQuantity(user.uid, product.id);
      },
      addProduct: (product) => {
        addProductToCart(user.uid, product);
      },
      isLoading: isAuthLoading || serverLoading,
    };
  } else {
    cart = {
      cartItems: itemToArrAndSort(localCart.items),
      removeItem: removeItem,
      increase: increaseAction,
      decrease: decreaseAction,
      addProduct: increaseAction,
      isLoading: false,
    };
  }

  const isEmpty = !cart.cartItems.length;

  return (
    <CartContext.Provider value={{ ...cart, isEmpty }}>
      {children}
    </CartContext.Provider>
  );
};

export function useCartContext() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCartContext must be used within CartProvider");
  }
  return ctx;
}
