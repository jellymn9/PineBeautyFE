import { createContext, ReactNode, useContext, useState } from "react";

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
import { AppError } from "@/errors/appError";
import { mapCartErrorSafe } from "@/errors/cartErrors/cartErrorMapper";
import { CartActionT } from "@/errors/cartErrors/cartErrorTypes";

interface CartContextTypeI {
  cartItems: CartItemsUIT;
  removeItem: (id: string) => Promise<void>;
  increase: (product: CartItemLocalT) => Promise<void>;
  decrease: (product: CartItemLocalT) => Promise<void>;
  addProduct: (product: NewItemT) => Promise<void>;
  isLoading: boolean;
  isEmpty: boolean;
  error?: string | null;
}

export const CartContext = createContext<CartContextTypeI | undefined>(
  undefined,
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
    error: localError,
  } = useLocalCart();

  const [mutationError, setMutationError] = useState<string | null>(null);

  const isServerLoading = serverStatus === "loading" || serverStatus === "idle";

  const handleMutationError = (e: unknown, action: CartActionT) => {
    if (e instanceof AppError) {
      setMutationError(mapCartErrorSafe(e, action));
    } else {
      setMutationError(mapCartErrorSafe(e, action));
    }
  };

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
        try {
          setMutationError(null);
          await removeProductFromCart(user.uid, productId);
        } catch (e) {
          handleMutationError(e, "remove");
        }
      },
      increase: async (product) => {
        try {
          setMutationError(null);
          await increaseCartItemQuantity(user.uid, product.id);
        } catch (e) {
          handleMutationError(e, "increase");
        }
      },
      decrease: async (product) => {
        try {
          setMutationError(null);
          await decreaseProductQuantity(user.uid, product.id);
        } catch (e) {
          handleMutationError(e, "decrease");
        }
      },
      addProduct: async (product) => {
        try {
          setMutationError(null);
          await addProductToCart(user.uid, product);
        } catch (e) {
          handleMutationError(e, "add");
        }
      },
      isLoading: isServerLoading,
      error: mutationError ?? serverError,
    };
  } else {
    cart = {
      cartItems: itemToArrAndSort(localCart.items),
      removeItem: async (productId: string) => {
        try {
          setMutationError(null);
          await removeLocalItem(productId);
        } catch (e) {
          handleMutationError(e, "remove");
        }
      },
      increase: async (product: CartItemLocalT) => {
        try {
          setMutationError(null);
          await increaseLocalAction(product);
        } catch (e) {
          handleMutationError(e, "increase");
        }
      },
      decrease: async (product: CartItemLocalT) => {
        try {
          setMutationError(null);
          await decreaseLocalAction(product);
        } catch (e) {
          handleMutationError(e, "decrease");
        }
      },
      addProduct: async (product: NewItemT) => {
        try {
          setMutationError(null);
          await increaseLocalAction(product);
        } catch (e) {
          handleMutationError(e, "add");
        }
      },
      isLoading: false,
      error: mutationError ?? localError,
    };
  }

  const isEmpty = !cart.isLoading && cart.cartItems.length === 0;

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
