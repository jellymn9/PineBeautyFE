export type CartItemT = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

export interface CartItemsI {
  [productId: string]: CartItemT;
}

export interface CartDataI {
  items: CartItemsI;
}

export type ActionCartT = "increment" | "decrement";
