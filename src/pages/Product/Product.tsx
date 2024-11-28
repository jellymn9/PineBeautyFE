import { useLoaderData } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "../../withTypes";
import { selectItemById } from "../../state/selectors/cartSelector";
import { remove, upsert } from "../../state/reducers/cartReducer";
import { GetProductAxiosResT } from "../../utils/types";
import Counter from "../../components/Counter/Counter";
import {
  Container,
  CounterAndAddBtnWrapper,
  Price,
  ProductData,
  ProductDescription,
  ProductImage,
  ProductName,
} from "./ProductStyled";

const desc =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla eleifend nunc ut pharetra molestie. Ut ut luctus augue. Quisque dolor metus, cursus sed dapibus ac, tristique sed nisi. Nam placerat tortor at malesuada laoreet. Ut volutpat, turpis et commodo tempus, nulla augue ullamcorper diam, ac mattis dui risus vel felis. Sed pellentesque efficitur sem, fringilla vulputate nunc tristique sed. Nam orci lorem, molestie vel libero at, dapibus ullamcorper lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer nec odio eu dolor consequat viverra eu id lacus. Integer in mollis lacus. Fusce tincidunt mollis turpis nec lacinia. Duis lectus arcu, fringilla at fermentum eu, feugiat ut purus. Aenean tristique lobortis massa. Ut ultrices tellus ac erat fermentum suscipit. Mauris efficitur aliquet turpis, vel feugiat eros viverra tincidunt. Integer viverra ac nulla non accumsan. Donec ac laoreet nisi. Ut vestibulum at lectus eget semper. Suspendisse lacinia mi vel orci varius condimentum. Sed justo sapien, convallis non pretium vel, consectetur vel arcu. Nunc auctor porttitor nibh sed convallis. Phasellus aliquet nunc quis mauris posuere, egestas euismod mauris dapibus. Phasellus fermentum ligula lacinia purus ultricies tempor.";

function Product() {
  const dispatch = useAppDispatch();
  const productRes = useLoaderData() as GetProductAxiosResT;

  const product = productRes.data.product;
  const productId = product.id; //change later
  const itemInCart = useAppSelector((state) =>
    selectItemById(state, productId)
  );

  const updateCart = (newQuantity: number) => {
    if (newQuantity) {
      dispatch(upsert({ id: productId, quantity: newQuantity }));
    } else {
      dispatch(remove(productId));
    }
  };

  return (
    <Container>
      <ProductImage />
      <ProductData>
        <ProductName>{product.name}</ProductName>
        <ProductDescription>{desc}</ProductDescription>
        <Price>{product.price}</Price>
        <CounterAndAddBtnWrapper>
          <Counter
            quantity={itemInCart?.quantity || 0}
            updateCart={updateCart}
          />
        </CounterAndAddBtnWrapper>
      </ProductData>
    </Container>
  );
}

export default Product;
