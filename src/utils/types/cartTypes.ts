import { FieldValue, Timestamp } from "firebase/firestore";

export type CartItemBaseT = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type TimestampsT = Date | Timestamp | FieldValue;

export type CartItemT<T extends TimestampsT> = CartItemBaseT & {
  createdAt: T;
  updatedAt: T;
};

export type CartItemsI<T extends TimestampsT> = Record<string, CartItemT<T>>;

export interface CartDataI<T extends TimestampsT> {
  items: CartItemsI<T>;
}

export type CartItemFirebaseT = CartItemT<Timestamp>;
export type CartItemLocalT = CartItemT<Date>;

export type CartItemsFirebaseT = CartItemsI<Timestamp>;
export type CartItemsLocalT = CartItemsI<Date>;

export interface CartDataFirebaseI extends CartDataI<Timestamp> {}
export interface CartDataLocalI extends CartDataI<Date> {}

//writeFirebase types
export type CartItemWriteT = CartItemT<FieldValue>;
export type CartItemsWriteT = CartItemsI<FieldValue>;
export interface CartDataWriteI extends CartDataI<FieldValue> {}

export type ActionCartT = "increment" | "decrement";

export type ItemToAddOrUpdateT = Omit<
  CartItemT<Date>,
  "createdAt" | "updatedAt" | "quantity"
>;
