import {
  ActionCartT,
  CartDataI,
  CartItemsI,
  CartItemT,
  NewItemT,
  TimestampsT,
} from "@/utils/types/cartTypes";

export function createNewItem<TimeT extends TimestampsT>(
  item: NewItemT,
  now: TimeT
): CartItemT<TimeT> {
  return {
    ...item,
    quantity: 1,
    createdAt: now,
    updatedAt: now,
  };
}

export function removeItem<TimeT extends TimestampsT>(
  cartItems: CartItemsI<TimeT>,
  itemId: string
): CartItemsI<TimeT> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { [itemId]: _removedItem, ...items } = cartItems;
  return items;
}

export function updateItem<TimeT extends TimestampsT>(
  item: CartItemT<TimeT>,
  action: ActionCartT = "increment",
  now: TimeT
): CartItemT<TimeT> {
  if (action === "increment") {
    return {
      ...item,
      quantity: item.quantity + 1,
      updatedAt: now,
    };
  } else {
    return {
      ...item,
      quantity: item.quantity - 1,
      updatedAt: now,
    };
  }
}

export function updateItems<TimeT extends TimestampsT>(
  cartItems: CartItemsI<TimeT>,
  item: NewItemT,
  action: "plus" | "minus",
  now: TimeT
): CartItemsI<TimeT> {
  const itemInCart = cartItems[item.id];

  switch (action) {
    case "plus": {
      const hasItem = !!itemInCart;

      return {
        ...cartItems,
        [item.id]: hasItem
          ? updateItem(itemInCart, "increment", now)
          : createNewItem(item, now),
      };
    }
    case "minus": {
      const itemQuantity = itemInCart.quantity;
      if (itemQuantity > 1) {
        return {
          ...cartItems,
          [item.id]: updateItem(itemInCart, "decrement", now),
        };
      } else {
        return removeItem(cartItems, itemInCart.id);
      }
    }
    default:
      return cartItems;
  }
}

// helpers operating on whole cart
export function plusCore<TimeT extends TimestampsT>(
  cart: CartDataI<TimeT>,
  item: NewItemT,
  now: TimeT
): CartDataI<TimeT> {
  return {
    items: updateItems(cart.items, item, "plus", now),
  };
}

export function minusCore<TimeT extends TimestampsT>(
  cart: CartDataI<TimeT>,
  item: NewItemT,
  now: TimeT
): CartDataI<TimeT> {
  return {
    items: updateItems(cart.items, item, "minus", now),
  };
}
