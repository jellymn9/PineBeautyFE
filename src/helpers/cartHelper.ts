import { CartData } from "../utils/types/cartTypes";

export const calculateSubtotal = (
  products: Array<{ price: number; quantity: number }>
) => {
  return products.reduce((acc, cur) => {
    return acc + cur.price * cur.quantity;
  }, 0);
};

export const setOrUpdateCartLS = (cartData: CartData) => {
  window.localStorage.setItem("cart", JSON.stringify(cartData));
};
//improve add to cart new features
//items: {
//  jsdfsjfjs: {
//    id: "vkvkwCZw3wlNbFN3VASR";
//    image: "djsdkajsdjak";
//    name: "Chamomile Calm Floral Water";
//    price: 140;
//    quantity: 1;
//  }
//}
//add merge logic after user signs in
