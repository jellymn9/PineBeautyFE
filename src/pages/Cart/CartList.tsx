//import { Loader } from "@/components/Loader/Loader";
import { ButtonWrapper, InnerContainer, List } from "./CartListStyled";
import Button from "@/components/Button/Button";
import { CartItem } from "@/components/CartItem/CartItem";
import { CartItemsUIT } from "@/utils/types/cartTypes";

const emptyCart = "There are no products in the cart.";

//const LOADER = <Loader />;
const errorUI = (errorMessage: string) => <p>{errorMessage}</p>;
const emptyCartUI = <p>{emptyCart}</p>;

interface CartListPropI {
  //loading: boolean;
  error?: string | null;
  items: CartItemsUIT;
  isEmpty: boolean;
  formatedPrice: number;
}

const CartList = ({
  //loading,
  error,
  items,
  isEmpty,
  formatedPrice,
}: CartListPropI) => {
  //   if (loading) {
  //     return LOADER;
  //   }
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
              <CartItem product={item} key={item.id} />
            ))}
          </List>
        </div>
        <ButtonWrapper>
          <Button
            styleVariant="primary"
            text={`Proceed to checkout ${formatedPrice}`}
            handleClick={() => {}}
          />
        </ButtonWrapper>
      </>
    </InnerContainer>
  );
};

export default CartList;
