import { useEffect, useState } from "react";

import { useAuth } from "@/context/AuthContext";

import { CartItem } from "@/components/CartItem/CartItem";
import { Loader } from "@/components/Loader/Loader";
import {
  ButtonWrapper,
  Container,
  Heading,
  InnerContainer,
  List,
} from "./CartStyled";
import { formatPrice } from "@/helpers/formatters";
import Button from "@/components/Button/Button";
import { useCart } from "@/helpers/customHooks";

function Cart() {
  const { user } = useAuth();
  const [subtotal, setSubtotal] = useState<number>(0);

  const { cart, loading } = useCart(user?.uid || null);

  const title = "Shopping Cart";
  const emptyCart = "There are no products in the cart.";

  const isCartEmpty = Object.keys(cart.items).length === 0;

  useEffect(() => {
    const subtotalPrice = Object.keys(cart.items).reduce((acc, current) => {
      acc += cart.items[current].price * cart.items[current].quantity;
      return acc;
    }, 0); // move to helper later..

    setSubtotal(subtotalPrice);
  }, [cart]);

  return (
    <Container>
      <Heading>{title}</Heading>
      {loading ? (
        <Loader />
      ) : (
        <InnerContainer>
          {isCartEmpty ? (
            <p>{emptyCart}</p>
          ) : (
            <>
              <div>
                <List>
                  {Object.keys(cart.items).map((product) => (
                    <CartItem product={cart.items[product]} />
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
