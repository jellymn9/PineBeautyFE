import { RawProductT } from "../../utils/types";

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

function ProductCard({ product }: ProductCardPropsI) {
  return (
    <Card>
      <ProductImage />
      <NameAndPriceContainer>
        <Name>{product.name}</Name>
        <Price>{product.price}</Price>
        <button>Add to cart</button>
      </NameAndPriceContainer>
    </Card>
  );
}

export default ProductCard;
