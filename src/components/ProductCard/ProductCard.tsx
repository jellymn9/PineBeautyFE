import { Link } from "react-router-dom";
import { ROUTES } from "@/utils/constants";
import {
  Card,
  Name,
  NameAndPriceContainer,
  Price,
  ProductImage,
} from "./ProductCardStyled";
import { useState } from "react";

interface ProductCardPropsI {
  productId: string;
  productName: string;
  productPrice: number;
  productCurrency: string;
  productImage: string;
}

const imageURL = "/defaultProductImage.svg";

function ProductCard({
  productId,
  productName,
  productPrice,
  productCurrency,
  productImage,
}: ProductCardPropsI) {
  const [imageError, setImageError] = useState(false);

  return (
    <Card className="keen-slider__slide">
      <Link to={`${ROUTES.product}/${productId}`}>
        <ProductImage
          loading="lazy"
          src={imageError ? imageURL : productImage}
          alt={productName}
          onError={() => setImageError(true)}
        />
        <NameAndPriceContainer>
          <Name>{productName} | 100% Organic & Cold Pressed</Name>
          <Price>
            {productCurrency}
            {productPrice}
          </Price>
        </NameAndPriceContainer>
      </Link>
    </Card>
  );
}

export default ProductCard;
