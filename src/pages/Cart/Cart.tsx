import { useEffect, useState } from "react";

import { getProductsBatch } from "../../APIs/products";
import { useAppSelector } from "../../withTypes";
import { mapQuantityToProducts } from "../../helpers/dataMapper";
import { CartDetailedProductT } from "../../utils/types";
import { calculateSubtotal } from "../../helpers/cartHelper";

import {
  selectAllItems,
  selectItemIds,
} from "../../state/selectors/cartSelector";
import { CartItem } from "../../components/CartItem/CartItem";
import { Loader } from "../../components/Loader/Loader";
import {
  ButtonWrapper,
  Container,
  Heading,
  InnerContainer,
  List,
} from "./CartStyled";
import { formatPrice } from "../../helpers/formatters";
import Button from "../../components/Button/Button";

function Cart() {
  const cartProductsIDs = useAppSelector(selectItemIds);
  const cartItems = useAppSelector(selectAllItems);
  const [products, setProducts] = useState<CartDetailedProductT>([]);
  const [subtotal, setSubtotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const title = "Shopping Cart";
  const emptyCart = "There are no products in the cart.";

  useEffect(() => {
    // I DONT LIKE IT!
    if (!products.length && cartItems.length) {
      // fetch products just first time, for other cases handle quantity updates
      const getCartProducts = async () => {
        // TEST THIS CODE
        try {
          setLoading(true);
          const cartProducts = await getProductsBatch(cartProductsIDs);

          console.log(cartProducts);

          setProducts(mapQuantityToProducts(cartProducts, cartItems));
        } catch (e) {
          console.log("111: ", e);
        } finally {
          setLoading(false);
        }
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
      {loading ? (
        <Loader />
      ) : (
        <InnerContainer>
          {!products.length ? (
            <p>{emptyCart}</p>
          ) : (
            <div>
              <List>
                {products.map((product) => (
                  <CartItem product={product} />
                ))}
              </List>
            </div>
          )}
          <ButtonWrapper>
            <Button
              styleVariant="primary"
              text={`Proceed to checkout ${formatPrice(subtotal)}`}
              handleClick={() => {}}
            />
          </ButtonWrapper>
        </InnerContainer>
      )}
    </Container>
  );
}

export default Cart;
