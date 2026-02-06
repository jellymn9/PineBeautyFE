//import { Loader } from "@/components/Loader/Loader";
import { useState } from "react";
import { ButtonWrapper, InnerContainer, List } from "./CartListStyled";
import Button from "@/components/UI/Button/Button";
import { CartItem } from "@/components/CartItem/CartItem";
import { CartItemsUIT } from "@/utils/types/cartTypes";

const emptyCart = "There are no products in the cart.";

//const LOADER = <Loader />;
const errorUI = (errorMessage: string) => <p role="alert">{errorMessage}</p>;
const emptyCartUI = (
  <p role="status" aria-live="polite">
    {emptyCart}
  </p>
);

interface CartListPropI {
  //loading: boolean;
  error?: string | null;
  items: CartItemsUIT;
  isEmpty: boolean;
  formatedPrice: number;
}

const CartList = ({ error, items, isEmpty, formatedPrice }: CartListPropI) => {
  const [actionLoading, setActionLoading] = useState(false);

  if (error) {
    return errorUI(error);
  }
  if (isEmpty) {
    return emptyCartUI;
  }

  return (
    <InnerContainer>
      <>
        <div>
          <List>
            {items.map((item) => (
              <CartItem
                product={item}
                key={item.id}
                actionLoading={actionLoading}
                handleLoading={setActionLoading}
              />
            ))}
          </List>
        </div>
        <ButtonWrapper>
          <Button
            styleVariant="primary"
            text={`Proceed to checkout ${formatedPrice}`}
            disabled={actionLoading}
            handleClick={() => {}}
          />
        </ButtonWrapper>
      </>
    </InnerContainer>
  );
};

export default CartList;
