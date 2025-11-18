import { useEffect, useState } from "react";

import { CartItem } from "@/components/CartItem/CartItem";
import { formatPrice } from "@/helpers/formatters";
import Button from "@/components/Button/Button";
import { calcSubtotalPrice } from "@/helpers/cartHelper";

import {
  ButtonWrapper,
  Container,
  Heading,
  InnerContainer,
  List,
} from "./CartStyled";
import { useCartContext } from "@/context/CartContext";

const title = "Shopping Cart";
const emptyCart = "There are no products in the cart.";

function Cart() {
  //const { user } = useAuth();
  const [subtotal, setSubtotal] = useState<number>(0);
  const { cartItems } = useCartContext();

  const isCartEmpty = Object.keys(cartItems).length === 0;

  useEffect(() => {
    setSubtotal(calcSubtotalPrice(cartItems));
  }, [cartItems]);

  return (
    <Container>
      <Heading>{title}</Heading>
      {/* {loading ? (
        <Loader />
      ) : ( */}
      <InnerContainer>
        {isCartEmpty ? (
          <p>{emptyCart}</p>
        ) : (
          <>
            <div>
              <List>
                {cartItems.map((item) => (
                  <CartItem product={item} key={item.id} />
                ))}
              </List>
            </div>
            <ButtonWrapper>
              <Button
                styleVariant="primary"
                text={`Proceed to checkout ${formatPrice(subtotal)}`}
                handleClick={() => {}}
              />
            </ButtonWrapper>
          </>
        )}
      </InnerContainer>
      {/* )} */}
    </Container>
  );
}

export default Cart;
