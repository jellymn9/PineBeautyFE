import { RawProductT } from "../../utils/types";
import Button from "../Button/Button";
import {
  Card,
  Name,
  NameAndPriceContainer,
  Price,
  ProductImage,
} from "./ProductCardStyled";

interface ProductCardPropsI {
  product: RawProductT;
}

const addToCart = () => {
  return; // come back to this
};

function ProductCard({ product }: ProductCardPropsI) {
  return (
    <Card>
      <ProductImage />
      <NameAndPriceContainer>
        <Name>{product.name}</Name>
        <Price>{product.price}</Price>
        <Button text="Add to cart" handleClick={addToCart} icon="cart" />
      </NameAndPriceContainer>
    </Card>
  );
}

export default ProductCard;
