import { Helmet } from "react-helmet-async";
import {
  BannerAndHeading,
  BannerImage,
  Container,
  SectionHeading,
} from "./ProductsStyled";
import ProductsListAndFilters from "@/components/ProductsListAndFilters/ProductsListAndFilters";

const productsHeading = "All products";

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
      <BannerAndHeading>
        <picture>
          <source
            media={"(max-width: 769px)"}
            type="image/avif"
            srcSet="/images/gen2-768-mobile.avif 768w, /images/gen2-480-mobile.avif 480w"
            sizes="100vw"
          />
          <source
            type="image/avif"
            srcSet={
              "/images/gen2-1920.avif 1920w, /images/gen2-1280.avif 1280w, /images/gen2-1024.avif 1024w"
            }
            sizes="100vw"
          />
          <source
            media={"(max-width: 769px)"}
            type="image/webp"
            srcSet="/images/gen2-768-mobile.webp 768w, /images/gen2-480-mobile.webp 480w"
            sizes="100vw"
          />
          <source
            type="image/webp"
            srcSet="/images/gen2-1920.webp 1920w, /images/gen2-1280.webp 1280w, /images/gen2-1024.webp 1024w"
            sizes="100vw"
          />
          <BannerImage
            alt="Products Banner Image"
            src="/images/gen2-1920.jpg"
            fetch-priority="high"
          />
        </picture>
        <SectionHeading>{productsHeading}</SectionHeading>
      </BannerAndHeading>
      <ProductsListAndFilters />
    </Container>
  );
}

export default Products;
