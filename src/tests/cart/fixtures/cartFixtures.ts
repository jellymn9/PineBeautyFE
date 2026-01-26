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

export const cartEmpty = (): CartItemsUIT => [];
