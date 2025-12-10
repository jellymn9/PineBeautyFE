import { Loader } from "@/components/Loader/Loader";
import { calcSubtotalPrice } from "@/helpers/cartHelper";
import { useCartContext } from "@/context/CartContext";

import { Container, Heading } from "./CartStyled";
import CartList from "./CartList";

const title = "Shopping Cart";

const LOADER = <Loader />;

function Cart() {
  const { cartItems, isLoading, isEmpty, serverError } = useCartContext();

  const suubtotalPrice = calcSubtotalPrice(cartItems);

  return (
    <Container>
      <Heading>{title}</Heading>
      {isLoading ? (
        LOADER
      ) : (
        <CartList
          items={cartItems}
          error={serverError}
          isEmpty={isEmpty}
          formatedPrice={suubtotalPrice}
        />
      )}
    </Container>
  );
}

export default Cart;
