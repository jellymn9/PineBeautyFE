import { describe, expect, test } from "vitest";
import userEvent from "@testing-library/user-event";
import { screen, within } from "@testing-library/react";
import { renderWithCart } from "@/tests/cart/utils/renderWithCart";
import {
  cartEmpty,
  cartWithMultipleItems,
  cartWithOneQty1,
  cartWithOneQty2,
} from "@/tests/cart/fixtures/cartFixtures";
import Cart from "@/pages/Cart/Cart";
import { calculateSubtotal } from "@/helpers/cartHelper";

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

  test("displays cart items when cart has products", () => {
    const cart = cartWithMultipleItems();
    renderWithCart(<Cart />, { initialItems: cart });

    const list = screen.getByRole("list");
    const items = within(list).getAllByRole("listitem");

    expect(items).toHaveLength(cart.length);
  });

  test("displays total price correctly", () => {
    const cart = cartWithMultipleItems();
    renderWithCart(<Cart />, { initialItems: cart });

    const expectedTotal = calculateSubtotal(cart);
    expect(screen.getByText(/proceed to checkout/i)).toHaveTextContent(
      `${expectedTotal}`,
    );
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

  test("increases item quantity when increase button clicked", async () => {
    const user = userEvent.setup();
    const cart = cartWithOneQty1();

    renderWithCart(<Cart />, { initialItems: cart });

    await user.click(
      screen.getByRole("button", { name: /increase quantity/i }),
    );

    expect(screen.getByLabelText("Quantity")).toHaveTextContent("2");
  });

  test("decreases item quantity without removing when quantity > 1", async () => {
    const user = userEvent.setup();
    const cart = cartWithOneQty2();

    console.log("cart log:", JSON.stringify(cart, null, 2));

    renderWithCart(<Cart />, { initialItems: cart });

    await user.click(
      screen.getByRole("button", { name: /decrease quantity/i }),
    );
    //screen.debug();
    expect(screen.getByLabelText("Quantity")).toHaveTextContent("1");
  });
});
