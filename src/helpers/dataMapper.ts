import { CartItemI } from "@/utils/types/cartTypes";
import { ProductI } from "@/utils/types/productTypes";

export const mapQuantityToProducts = (
  products: Array<ProductI>,
  productsWithQuantity: Array<CartItemI>
) => {
  const productsMap = new Map(products.map((p) => [p.id, p]));

  return productsWithQuantity.map((p) => {
    const product = productsMap.get(p.id);
    if (!product) {
      // type guard
      throw new Error(`Product with ID ${p.id} not found.`);
    }
    return {
      ...product,
      quantity: p.quantity,
      //accPrice: product.price * p.quantity,
    };
  });
};
