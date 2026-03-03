import { Link } from "react-router-dom";
import { ROUTES } from "@/utils/constants";
import defaultProductImage from "@/assets/defaultProductImage.svg";
import {
  Card,
  Name,
  NameAndPriceContainer,
  Price,
  ProductImage,
} from "./ProductCardStyled";

interface ProductCardPropsI {
  productId: string;
  productName: string;
  productPrice: number;
  productCurrency: string;
  productImage: string;
}

function ProductCard({
  productId,
  productName,
  productPrice,
  productCurrency,
  productImage,
}: ProductCardPropsI) {
  return (
    <Card className="keen-slider__slide">
      <Link to={`${ROUTES.product}/${productId}`}>
        <ProductImage
          loading="lazy"
          src={productImage}
          alt={productName}
          onError={(e) => (e.currentTarget.src = defaultProductImage)}
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
