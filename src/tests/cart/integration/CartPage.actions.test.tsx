import { describe, expect, test } from "vitest";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { renderWithCart } from "@/tests/cart/utils/renderWithCart";
import { cartEmpty, cartWithOneQty1 } from "@/tests/cart/fixtures/cartFixtures";
import Cart from "@/pages/Cart/Cart";

describe("CartPage list state", () => {
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

describe("CartPage actions", () => {
  test("remove item with quantity of 1 by decreasing quantity", async () => {
    const user = userEvent.setup();
    const cartItemQty1 = cartWithOneQty1();

    renderWithCart(<Cart />, { initialItems: cartItemQty1 });

    await user.click(
      screen.getByRole("button", { name: /decrease quantity/i }),
    );

    expect(screen.getByRole("status")).toHaveTextContent(
      /There are no products in the cart/i,
    );
  });
});
