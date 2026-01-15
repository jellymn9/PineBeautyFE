import { describe, expect, test } from "vitest";

import { removeItem } from "@/helpers/cartHelperCore";
import { cartItem1, cartItem2 } from "../fixtures/cartFixtures";

describe("cartHelperCore", () => {
  const cartItems = { [cartItem1.id]: cartItem1, [cartItem2.id]: cartItem2 };
  test("remove item successfully", () => {
    expect(removeItem(cartItems, cartItem1.id)).toEqual({
      [cartItem2.id]: cartItem2,
    });
  });
  test("remove un-existing item, no changes in cart", () => {
    expect(removeItem(cartItems, "non-existing-id")).toEqual(cartItems);
  });
  test("remove item from empty cart, no changes in cart", () => {
    expect(removeItem({}, "any-id")).toEqual({});
  });
  test("remove last item from cart results in empty cart", () => {
    const singleItemCart = { [cartItem1.id]: cartItem1 };
    expect(removeItem(singleItemCart, cartItem1.id)).toEqual({});
  });
});
