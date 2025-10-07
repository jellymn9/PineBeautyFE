import { useEffect, useState } from "react";

//import { getProductsBatch } from "../../APIs/products";
import { useAppSelector } from "../../withTypes";
//import { mapQuantityToProducts } from "../../helpers/dataMapper";
//import { CartDetailedProductT } from "../../utils/types";
//import { calculateSubtotal } from "../../helpers/cartHelper";
import { getCart } from "../../APIs/carts";
import { useAuth } from "../../context/AuthContext";

import {
  selectAllItems,
  //selectItemIds,
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
import { CartData } from "../../utils/types/cartTypes";

function Cart() {
  //const cartProductsIDs = useAppSelector(selectItemIds);
  const cartItems = useAppSelector(selectAllItems);
  const { user } = useAuth();
  const [products, setProducts] = useState<CartData>({ items: {} });
  const [subtotal, setSubtotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const title = "Shopping Cart";
  const emptyCart = "There are no products in the cart.";

  useEffect(() => {
    // I DONT LIKE IT!
    if (user) {
      const getCartProducts = async () => {
        try {
          setLoading(true);
          //const cartProducts = await getProductsBatch(cartProductsIDs);
          const cartProducts = await getCart(user.uid);

          console.log(cartProducts);

          if (cartProducts) {
            setProducts(cartProducts);
          }
        } catch (e) {
          console.log("111: ", e);
        } finally {
          setLoading(false);
        }
      };

      getCartProducts();
    }
  }, [cartItems, user]);

  useEffect(() => {
    const subtotalPrice = Object.keys(products.items).reduce((acc, current) => {
      acc += products.items[current].price * products.items[current].quantity;
      return acc;
    }, 0); // move to helper later..
    console.log(subtotalPrice);
    setSubtotal(subtotalPrice);
  }, [products]);

  return (
    <Container>
      <Heading>{title}</Heading>
      {loading ? (
        <Loader />
      ) : (
        <InnerContainer>
          {/* {!products.length ? (
            <p>{emptyCart}</p>
          ) : ( */}
          <div>
            <List>
              {Object.keys(products.items).map((product) => (
                <CartItem product={products.items[product]} />
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
        </InnerContainer>
      )}
    </Container>
  );
}

export default Cart;
