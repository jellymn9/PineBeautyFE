import { useEffect, useRef } from "react";

import { useAppSelector, useAppDispatch } from "@/withTypes";
import { fetchProductsThunk } from "@/state/reducers/productReducer";
import {
  listProductsSelector,
  isPendingSelector,
  hasMoreSelector,
} from "@/state/selectors/productSelector";
import { useElementScroll } from "@/helpers/customHooks";
import ProductFilters from "@/components/ProductFilters/ProductFilters";
import ProductsList from "@/components/ProductsList/ProductsList";
import { Loader } from "@/components/Loader/Loader";
import {
  BannerAndHeading,
  Container,
  ProductsSection,
  EmptyMessage,
  SectionHeading,
  ProductsAndCategories,
} from "./ProductsStyled";

const productsHeading = "All products";
const pageSize = 6;

const imageURL =
  import.meta.env.MODE === "production"
    ? import.meta.env.VITE_R2_PROD_BUCKET_URL + "/banner3_1920x1080.jpg"
    : import.meta.env.VITE_R2_DEV_BUCKET_URL + "/banner3_1920x1080.jpg";

function Products() {
  const dispatch = useAppDispatch();
  const productSectionRef = useRef<HTMLElement>(null);

  const products = useAppSelector(listProductsSelector);
  const isLoading = useAppSelector(isPendingSelector);
  const hasMore = useAppSelector(hasMoreSelector);
  const { reachBottom } = useElementScroll(productSectionRef);

  const emptyMessage = "There are no products available.";

  useEffect(() => {
    dispatch(fetchProductsThunk({ productsPerPage: pageSize }));
  }, [dispatch]);

  useEffect(() => {
    console.log("has more", hasMore, "reach Bottom:", reachBottom);
    if (reachBottom && hasMore) {
      dispatch(fetchProductsThunk({ productsPerPage: pageSize }));
    }
  }, [reachBottom, dispatch, hasMore]);

  return (
    <Container>
      <BannerAndHeading $imageURL={imageURL}>
        <SectionHeading>{productsHeading}</SectionHeading>
      </BannerAndHeading>
      {!products.length && isLoading ? (
        <Loader />
      ) : (
        <ProductsAndCategories>
          <ProductFilters />
          <ProductsSection ref={productSectionRef}>
            {products.length ? (
              <ProductsList products={products} />
            ) : (
              <EmptyMessage>{emptyMessage}</EmptyMessage>
            )}
          </ProductsSection>
        </ProductsAndCategories>
      )}
    </Container>
  );
}

export default Products;
