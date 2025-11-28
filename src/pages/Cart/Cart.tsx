import { useEffect, useState } from "react";

import { CartItem } from "@/components/CartItem/CartItem";
import { formatPrice } from "@/helpers/formatters";
import Button from "@/components/Button/Button";
import { calcSubtotalPrice } from "@/helpers/cartHelper";
import { useCartContext } from "@/context/CartContext";
import {
  ButtonWrapper,
  Container,
  Heading,
  InnerContainer,
  List,
} from "./CartStyled";
import { Loader } from "@/components/Loader/Loader";

const title = "Shopping Cart";
const emptyCart = "There are no products in the cart.";

const loadingUI = <Loader />;
const emptyCartUI = <p>{emptyCart}</p>;

function Cart() {
  const [subtotal, setSubtotal] = useState<number>(0);
  const { cartItems, isLoading, isEmpty } = useCartContext();

  useEffect(() => {
    setSubtotal(calcSubtotalPrice(cartItems));
  }, [cartItems]);

  return (
    <Container>
      <Heading>{title}</Heading>
      {isLoading ? (
        loadingUI
      ) : (
        <InnerContainer>
          {isEmpty ? (
            emptyCartUI
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
      )}
    </Container>
  );
}

export default Cart;
