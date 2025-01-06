import { useEffect, useState } from "react";

import { getProductsBatch } from "../../APIs/products";
import { useAppSelector } from "../../withTypes";
import { mapQuantityToProducts } from "../../helpers/dataMapper";
import { CartDetailedProductT } from "../../utils/types";
import { calculateSubtotal } from "../../helpers/cartHelper";
import { CartItem } from "../../components/CartItem/CartItem";
import {
  selectAllItems,
  selectItemIds,
} from "../../state/selectors/cartSelector";
import { Container, Heading, HSeparator, List, Subtotal } from "./CartStyled";

function Cart() {
  const cartProductsIDs = useAppSelector(selectItemIds);
  const cartItems = useAppSelector(selectAllItems);
  const [products, setProducts] = useState<CartDetailedProductT>([]);
  const [subtotal, setSubtotal] = useState<number>(0);

  const title = "Shopping Cart";

  useEffect(() => {
    // I DONT LIKE IT!
    if (!products.length && cartItems.length) {
      // fetch products just first time, for other cases handle quantity updates
      const getCartProducts = async () => {
        const cartProducts = await getProductsBatch(cartProductsIDs);

        setProducts(mapQuantityToProducts(cartProducts, cartItems));
      };
      getCartProducts();
    } else {
      //map new quantity from cart to products
      setProducts((p) => mapQuantityToProducts(p, cartItems));
    }
  }, [cartProductsIDs, cartItems, products.length]);

  useEffect(() => {
    setSubtotal(calculateSubtotal(products));
  }, [products]);

  return (
    <Container>
      <Heading>{title}</Heading>
      {!products.length ? (
        <p>There are no products in a cart</p>
      ) : (
        <>
          <HSeparator />
          <List>
            {products.map((product) => (
              <CartItem product={product} />
              // <Product>
              //   <h1>{product.name}</h1>
              //   <span itemProp="price">{product.price}</span>
              //   <data itemProp="priceCurrency" value="EUR">
              //     €
              //   </data>
              // </Product>
            ))}
          </List>
        </>
      )}
      <Subtotal>
        <span itemProp="price">{subtotal}</span>
        <data itemProp="priceCurrency" value="EUR">
          €
        </data>
      </Subtotal>
    </Container>
  );
}

export default Cart;
