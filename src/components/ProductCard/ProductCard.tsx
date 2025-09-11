import { Link } from "react-router-dom";
import { routes } from "../../utils/constants";
import { ProductI } from "../../utils/types/productTypes";
import {
  Card,
  Name,
  NameAndPriceContainer,
  Price,
  ProductImage,
} from "./ProductCardStyled";

interface ProductCardPropsI {
  product: ProductI;
}

const imageURL =
  import.meta.env.MODE === "production"
    ? import.meta.env.VITE_R2_PROD_BUCKET_URL + "/oilBottleCustomFormat.jpg"
    : import.meta.env.VITE_R2_DEV_BUCKET_URL + "/oilBottleCustomFormat.jpg";

// const addToCart = () => {
//   return; // come back to this
// };

function ProductCard({ product }: ProductCardPropsI) {
  return (
    <Card className="keen-slider__slide">
      <Link to={`${routes.product}/${product.id}`}>
        <ProductImage $imageURL={imageURL} />
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
