import { useEffect, useState } from "react";

//import { useAuth } from "@/context/AuthContext";

import { CartItem } from "@/components/CartItem/CartItem";
//import { Loader } from "@/components/Loader/Loader";
import { formatPrice } from "@/helpers/formatters";
import Button from "@/components/Button/Button";
//import { useCart } from "@/helpers/customHooks/cartCustomHooks";
import { calcSubtotalPrice } from "@/helpers/cartHelper";

import {
  ButtonWrapper,
  Container,
  Heading,
  InnerContainer,
  List,
} from "./CartStyled";
//import { itemToArrAndSort } from "@/helpers/dataMapper";
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
