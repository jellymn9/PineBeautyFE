import { Link } from "react-router-dom";
import { routes } from "../../utils/constants";
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

// const addToCart = () => {
//   return; // come back to this
// };

function ProductCard({ product }: ProductCardPropsI) {
  return (
    <Card>
      <Link to={`${routes.product}/${product.id}`}>
        <ProductImage />
        <NameAndPriceContainer>
          <Name>{product.name}</Name>
          <Price>{product.price}</Price>
        </NameAndPriceContainer>
      </Link>
    </Card>
  );
}

export default ProductCard;
