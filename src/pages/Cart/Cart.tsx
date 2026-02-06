import { Loader } from "@/components/UI/Loader/Loader";
import { Helmet } from "react-helmet-async";
import { calcSubtotalPrice } from "@/helpers/cartHelper";
import { useCartContext } from "@/context/CartContext";

import { Container, Heading } from "./CartStyled";
import CartList from "./CartList";

const TITLE = "Shopping Cart";

const LOADER = <Loader ariaLabel="Loading cart list" />;

function Cart() {
  const { cartItems, isLoading, isEmpty, serverError } = useCartContext();

  const suubtotalPrice = calcSubtotalPrice(cartItems);

  return (
    <Container>
      <Helmet>
        <title>PineBeauty | Cart</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Heading>{TITLE}</Heading>
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
