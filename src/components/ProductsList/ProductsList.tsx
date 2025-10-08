//import { RawProductT } from "../../utils/types";
import { ProductI } from "../../utils/types/productTypes";
import ProductCard from "../ProductCard/ProductCard";
import { Container } from "./ProductsListStyled";

interface ProductsListPropsI {
  products: Array<ProductI>;
}

function ProductsList({ products }: ProductsListPropsI) {
  return (
    <Container>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </Container>
  );
}

export default ProductsList;
