import { CartItemT, RawProductT } from "../utils/types";

export const mapQuantityToProducts = (
  products: Array<RawProductT>,
  productsWithQuantity: Array<CartItemT>
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
