import { ProductI } from "@/utils/types/productTypes";
import ProductCard from "@/components/ProductCard/ProductCard";
import { Container } from "./ProductsListStyled";

interface ProductsListPropsI {
  products: Array<ProductI>;
}

function ProductsList({ products }: ProductsListPropsI) {
  return (
    <Container>
      {products.map((product) => (
        <ProductCard
          productId={product.id}
          productName={product.name}
          productPrice={product.price}
          productCurrency={product.currency}
          productImage={product.image}
          key={product.id}
        />
      ))}
    </Container>
  );
}

export default ProductsList;
