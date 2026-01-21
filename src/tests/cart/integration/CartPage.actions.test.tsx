import { describe, expect, test } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithCart } from "@/tests/cart/utils/renderWithCart";
import { cartEmpty } from "@/tests/cart/fixtures/cartFixtures";
import Cart from "@/pages/Cart/Cart";

describe("CartPage actions", () => {
  test("shows empty state when cart is empty", () => {
    renderWithCart(<Cart />, { initialItems: cartEmpty() });

    expect(screen.getByRole("status")).toBeInTheDocument();
  });
});
