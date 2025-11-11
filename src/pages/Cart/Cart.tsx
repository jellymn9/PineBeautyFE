import { useEffect, useState } from "react";

import { useAuth } from "@/context/AuthContext";

import { CartItem } from "@/components/CartItem/CartItem";
import { Loader } from "@/components/Loader/Loader";
import { formatPrice } from "@/helpers/formatters";
import Button from "@/components/Button/Button";
import { useCart } from "@/helpers/customHooks/cartCustomHooks";
import { calcSubtotalPrice } from "@/helpers/cartHelper";

import {
  ButtonWrapper,
  Container,
  Heading,
  InnerContainer,
  List,
} from "./CartStyled";

function Cart() {
  const { user } = useAuth();
  const [subtotal, setSubtotal] = useState<number>(0);

  const { cart, loading } = useCart(user?.uid || null);

  const cartItems = cart.items;

  const title = "Shopping Cart";
  const emptyCart = "There are no products in the cart.";

  const isCartEmpty = Object.keys(cartItems).length === 0;

  useEffect(() => {
    setSubtotal(calcSubtotalPrice(cartItems));
  }, [cartItems]);

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
                  {Object.keys(cartItems).map((product) => (
                    <CartItem product={cartItems[product]} key={product} />
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
