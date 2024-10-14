import { RawProductT } from "../../utils/types";
import ProductCard from "../ProductCard/ProductCard";
import { Container } from "./ProductsListStyled";

interface ProductsListPropsI {
  products: Array<RawProductT>;
}

function ProductsList({ products }: ProductsListPropsI) {
  return (
    <Container>
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </Container>
  );
}

export default ProductsList;
