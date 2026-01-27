import {
  CartItemBaseT,
  CartItemsUIT,
  CartItemT,
} from "@/utils/types/cartTypes";
import { Timestamp } from "firebase/firestore";

const cartItemBase: CartItemBaseT = {
  id: "default",
  quantity: 1,
  price: 1000,
  name: "Product1",
  image: "image1.jpg",
};

export const cartItemGenerator = <T extends Date | Timestamp>({
  id,
  date,
  name,
  quantity,
  price,
}: {
  id: string;
  date: T;
  name?: string;
  quantity?: number; //improve type
  price?: number;
}): CartItemT<T> => {
  return {
    ...cartItemBase,
    id,
    name: name || cartItemBase.name,
    quantity: quantity !== undefined ? quantity : cartItemBase.quantity,
    price: price !== undefined ? price : cartItemBase.price,
    createdAt: date,
    updatedAt: date,
  };
};

const cartItem1Date = new Date("2024-01-01T10:00:00Z");
const cartItem2Date = new Date("2024-01-02T11:00:00Z");

export const cartItem1 = cartItemGenerator({
  id: "item1",
  date: cartItem1Date,
});
export const cartItem2 = cartItemGenerator({
  id: "item2",
  date: cartItem2Date,
});

export const cartWithOneQty1 = (): CartItemsUIT => [
  cartItemGenerator({
    id: "item1",
    name: "Rose Oil",
    quantity: 1,
    date: new Date(),
  }),
];

export const cartWithOneQty2 = (): CartItemsUIT => [
  cartItemGenerator({
    id: "itemQty2",
    name: "Rose Oil 2",
    quantity: 2,
    date: new Date(),
  }),
];

export const cartEmpty = (): CartItemsUIT => [];

export const cartWithMultipleItems = (): CartItemsUIT => {
  const cartItem1 = cartItemGenerator({
    id: "item1",
    name: "Rose Oil",
    quantity: 2,
    date: new Date(),
  });
  const cartItem2 = cartItemGenerator({
    id: "item2",
    name: "Lavender Oil",
    quantity: 1,
    date: new Date(),
  });
  const cartItem3 = cartItemGenerator({
    id: "item3",
    name: "Jasmine Oil",
    quantity: 3,
    date: new Date(),
  });

  return [cartItem1, cartItem2, cartItem3];
};
