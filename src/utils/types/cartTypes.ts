export interface CartItemI {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export interface CartData {
  items: { [productId: string]: CartItemI };
}
