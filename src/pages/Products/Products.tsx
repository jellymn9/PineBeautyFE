import { BannerAndHeading, Container, SectionHeading } from "./ProductsStyled";
import ProductsListAndFilters from "@/components/ProductsListAndFilters/ProductsListAndFilters";

const productsHeading = "All products";

const IMAGE_URL =
  import.meta.env.MODE === "production"
    ? import.meta.env.VITE_R2_PROD_BUCKET_URL + "/banner3_1920x1080.jpg"
    : import.meta.env.VITE_R2_DEV_BUCKET_URL + "/banner3_1920x1080.jpg";

function Products() {
  return (
    <Container>
      <BannerAndHeading $imageURL={IMAGE_URL}>
        <SectionHeading>{productsHeading}</SectionHeading>
      </BannerAndHeading>
      <ProductsListAndFilters />
    </Container>
  );
}

export default Products;
