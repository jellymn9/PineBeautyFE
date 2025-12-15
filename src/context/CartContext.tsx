import { createContext, ReactNode, useContext, useMemo } from "react";

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
  removeItem: (id: string) => Promise<void>;
  increase: (product: CartItemLocalT) => Promise<void>;
  decrease: (product: CartItemLocalT) => Promise<void>;
  addProduct: (product: NewItemT) => Promise<void>;
  isLoading: boolean;
  isEmpty: boolean;
  serverError?: string | null;
}

export const CartContext = createContext<CartContextTypeI | undefined>(
  undefined
);

export const CartProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const { user, isAuthLoading } = useAuth();
  const {
    cart: serverCart,
    status: serverStatus,
    error: serverError,
  } = useCart(user?.uid || null);
  const {
    cart: localCart,
    removeItem: removeLocalItem,
    increaseAction: increaseLocalAction,
    decreaseAction: decreaseLocalAction,
  } = useLocalCart();

  const isServerLoading = useMemo(() => {
    if (serverStatus === "loading" || serverStatus === "idle") {
      return true;
    }
    return false;
  }, [serverStatus]);

  let cart: Omit<CartContextTypeI, "isEmpty">;

  if (isAuthLoading) {
    cart = {
      cartItems: [],
      removeItem: async () => {},
      increase: async () => {},
      decrease: async () => {},
      addProduct: async () => {},
      isLoading: true,
    };
  } else if (user) {
    cart = {
      cartItems: itemToArrAndSort(serverCart.items),
      removeItem: async (productId: string) => {
        await removeProductFromCart(user.uid, productId);
      },
      increase: async (product) => {
        await increaseCartItemQuantity(user.uid, product.id);
      },
      decrease: async (product) => {
        await decreaseProductQuantity(user.uid, product.id);
      },
      addProduct: async (product) => {
        await addProductToCart(user.uid, product);
      },
      isLoading: isServerLoading,
    };
  } else {
    cart = {
      cartItems: itemToArrAndSort(localCart.items),
      removeItem: async (productId: string) => await removeLocalItem(productId),
      increase: async (product: CartItemLocalT) =>
        await increaseLocalAction(product),
      decrease: async (product: CartItemLocalT) =>
        await decreaseLocalAction(product),
      addProduct: async (product: NewItemT) =>
        await increaseLocalAction(product),
      isLoading: false,
    };
  }

  const isEmpty = !cart.isLoading && cart.cartItems.length === 0;

  return (
    <CartContext.Provider value={{ ...cart, isEmpty, serverError }}>
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
