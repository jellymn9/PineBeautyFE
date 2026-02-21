import { Link } from "react-router-dom";
import { ROUTES } from "@/utils/constants";
import { ProductI } from "@/utils/types/productTypes";
import {
  Card,
  Name,
  NameAndPriceContainer,
  Price,
  ProductImage,
} from "./ProductCardStyled";
import { useState } from "react";

interface ProductCardPropsI {
  product: ProductI;
}

const imageURL = "/defaultProductImage.svg";
// const addToCart = () => {
//   return; // come back to this
// };

function ProductCard({ product }: ProductCardPropsI) {
  const [imageError, setImageError] = useState(false);

  return (
    <Card className="keen-slider__slide">
      <Link to={`${ROUTES.product}/${product.id}`}>
        <ProductImage
          src={imageError ? imageURL : product.image}
          alt={product.name}
          onError={() => setImageError(true)}
        />
        <NameAndPriceContainer>
          <Name>{product.name} | 100% Organic & Cold Pressed</Name>
          <Price>
            {product.currency}
            {product.price}
          </Price>
        </NameAndPriceContainer>
      </Link>
    </Card>
  );
}

export default ProductCard;
