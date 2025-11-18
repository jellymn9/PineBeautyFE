import { FieldValue, Timestamp } from "firebase/firestore";

export type CartItemBaseT = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

export type TimestampsT = Date | Timestamp | FieldValue | string;

export type CartItemT<T extends TimestampsT> = CartItemBaseT & {
  createdAt: T;
  updatedAt: T;
};

export type CartItemsI<T extends TimestampsT> = Record<string, CartItemT<T>>;

export interface CartDataI<T extends TimestampsT> {
  items: CartItemsI<T>;
}

//cart item types
export type CartItemFirebaseT = CartItemT<Timestamp>;
export type CartItemLocalT = CartItemT<Date>;
//cart items types
export type CartItemsFirebaseT = CartItemsI<Timestamp>;
export type CartItemsLocalT = CartItemsI<Date>;
//cart data types
export interface CartDataFirebaseI extends CartDataI<Timestamp> {}
export interface CartDataLocalI extends CartDataI<Date> {}

//cart items type array for UI
export type CartItemsUIT = Array<CartItemLocalT>;

//writeFirebase types
export type CartItemWriteT = CartItemT<FieldValue>;
export type CartItemsWriteT = CartItemsI<FieldValue>;
export interface CartDataWriteI extends CartDataI<FieldValue> {}

export type ActionCartT = "increment" | "decrement";

export type NewItemT = Omit<
  CartItemT<Date>,
  "createdAt" | "updatedAt" | "quantity"
>;
