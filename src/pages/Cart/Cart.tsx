import { useEffect, useState } from "react";

import { getProductsBatch } from "../../APIs/products";
import { useAppSelector } from "../../withTypes";
import { mapQuantityToProducts } from "../../helpers/dataMapper";
import {
  selectAllItems,
  selectItemIds,
} from "../../state/selectors/cartSelector";
import { Container, Heading, List, Product, Subtotal } from "./CartStyled";
import { CartItemT, RawProductT } from "../../utils/types";

function Cart() {
  const cartProductsIDs = useAppSelector(selectItemIds);
  const cartItems = useAppSelector(selectAllItems);
  const [products, setProducts] = useState<Array<RawProductT & CartItemT>>([]);

  const title = "Shopping Cart";

  useEffect(() => {
    const getCartProducts = async () => {
      const cartProducts = await getProductsBatch(cartProductsIDs);

      setProducts(mapQuantityToProducts(cartProducts, cartItems));
    };
    getCartProducts();
  }, [cartProductsIDs, cartItems]);

  return (
    <Container>
      <Heading>{title}</Heading>
      <List>
        {!products.length ? (
          <p>There are no products in a cart</p>
        ) : (
          products.map((product) => (
            <Product>
              <h1>{product.name}</h1>
              <span itemProp="price">{product.price}</span>
              <data itemProp="priceCurrency" value="EUR">
                €
              </data>
            </Product>
          ))
        )}
      </List>
      <Subtotal>
        <span itemProp="price">3.50</span>
        <data itemProp="priceCurrency" value="EUR">
          €
        </data>
      </Subtotal>
    </Container>
  );
}

export default Cart;
