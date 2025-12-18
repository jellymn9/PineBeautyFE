import { BannerAndHeading, Container, SectionHeading } from "./ProductsStyled";
import ProductsListAndFilters from "@/components/ProductsListAndFilters/ProductsListAndFilters";
import { Helmet } from "react-helmet-async";

const productsHeading = "All products";

const IMAGE_URL =
  import.meta.env.MODE === "production"
    ? import.meta.env.VITE_R2_PROD_BUCKET_URL + "/banner3_1920x1080.jpg"
    : import.meta.env.VITE_R2_DEV_BUCKET_URL + "/banner3_1920x1080.jpg";

function Products() {
  return (
    <Container>
      <Helmet>
        <title>PineBeauty | Products</title>
        <meta
          name="description"
          content="Explore PineBeauty's extensive range of sustainable skincare products designed to nourish your skin while caring for the planet."
        />
      </Helmet>
      <BannerAndHeading $imageURL={IMAGE_URL}>
        <SectionHeading>{productsHeading}</SectionHeading>
      </BannerAndHeading>
      <ProductsListAndFilters />
    </Container>
  );
}

export default Products;
