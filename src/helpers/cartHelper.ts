import { CartData } from "../utils/types/cartTypes";

export const calculateSubtotal = (
  products: Array<{ price: number; quantity: number }>
) => {
  return products.reduce((acc, cur) => {
    return acc + cur.price * cur.quantity;
  }, 0);
};

export const setOrUpdateCartLS = (cartData: CartData) => {
  try {
    const cartItem = window.localStorage.getItem("cart");
    if (!cartItem) {
      window.localStorage.setItem("cart", JSON.stringify(cartData));
      return true;
    }
    const cartExisting = JSON.parse(cartItem);
    const cartExistingItems = cartExisting.items ?? { items: {} };

    Object.keys(cartData.items).forEach((productId) => {
      const newItem = cartData.items[productId];
      if (cartExistingItems[productId]) {
        cartExistingItems[productId] = {
          ...cartExistingItems[productId],
          quantity: cartExistingItems[productId].quantity + 1,
        };
      } else {
        cartExistingItems[productId] = newItem;
      }
    });

    window.localStorage.setItem("cart", JSON.stringify(cartExisting));
    return true;
  } catch (e) {
    console.error("Error setting or updating cart in localStorage:", e);
  }
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
