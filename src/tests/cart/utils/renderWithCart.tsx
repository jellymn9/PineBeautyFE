// src/tests/cart/renderWithCart.tsx
import React, { useMemo, useState } from "react";
import { ThemeProvider } from "styled-components";
import { render } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";

import { theme } from "@/styles/theme";
import { CartContext } from "@/context/CartContext";
import type {
  CartItemLocalT,
  CartItemsUIT,
  NewItemT,
} from "@/utils/types/cartTypes";

type Options = {
  initialItems?: CartItemsUIT;
  isLoading?: boolean;
  serverError?: string | null;
};

function MockCartProvider({
  initialItems,
  isLoading,
  serverError,
  children,
}: {
  initialItems: CartItemsUIT;
  isLoading: boolean;
  serverError: string | null;
  children: React.ReactNode;
}) {
  const [cartItems, setCartItems] = useState<CartItemsUIT>(initialItems);

  const value = useMemo(() => {
    return {
      cartItems,
      removeItem: async (id: string) => {
        setCartItems((prev) => prev.filter((x) => x.id !== id));
      },
      increase: async (product: CartItemLocalT) => {
        setCartItems((prev) =>
          prev.map((x) =>
            x.id === product.id ? { ...x, quantity: x.quantity + 1 } : x,
          ),
        );
      },
      decrease: async (product: CartItemLocalT) => {
        setCartItems((prev) =>
          prev
            .map((x) => {
              if (x.id !== product.id) return x;
              return { ...x, quantity: x.quantity - 1 };
            })
            .filter((x) => x.quantity > 0),
        );
      },
      addProduct: async (product: NewItemT) => {
        setCartItems((prev) => {
          const exists = prev.find((x) => x.id === product.id);
          if (exists) {
            return prev.map((x) =>
              x.id === product.id ? { ...x, quantity: x.quantity + 1 } : x,
            );
          }
          return [
            ...prev,
            {
              ...product,
              quantity: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ];
        });
      },
      isLoading,
      isEmpty: !isLoading && cartItems.length === 0,
      serverError,
    };
  }, [cartItems, isLoading, serverError]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function renderWithCart(ui: React.ReactElement, options: Options = {}) {
  const { initialItems = [], isLoading = false, serverError = null } = options;

  return render(
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <MockCartProvider
          initialItems={initialItems}
          isLoading={isLoading}
          serverError={serverError}
        >
          {ui}
        </MockCartProvider>
      </HelmetProvider>
    </ThemeProvider>,
  );
}
