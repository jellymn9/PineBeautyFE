import { describe, expect, test } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithCart } from "@/tests/cart/utils/renderWithCart";
import { cartEmpty } from "@/tests/cart/fixtures/cartFixtures";
import Cart from "@/pages/Cart/Cart";

describe("CartPage actions", () => {
  test("shows empty state when cart is empty", () => {
    renderWithCart(<Cart />, { initialItems: cartEmpty() });

    expect(screen.getByRole("status")).toHaveTextContent(
      /There are no products in the cart/i,
    );
  });

  test("shows loader when cart is loading", () => {
    renderWithCart(<Cart />, { isLoading: true });

    expect(
      screen.getByRole("status", { name: /loading cart list/i }),
    ).toBeInTheDocument();
  });
});
