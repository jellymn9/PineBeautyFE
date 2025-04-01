import { useEffect, useRef } from "react";

import { useAppSelector, useAppDispatch } from "../../withTypes";
import { fetchProductsThunk } from "../../state/reducers/productReducer";
import {
  listProductsSelector,
  isPendingSelector,
} from "../../state/selectors/productSelector";
import { useElementScroll } from "../../helpers/customHooks";
import ProductFilters from "../../components/ProductFilters/ProductFilters";
import ProductsList from "../../components/ProductsList/ProductsList";
import {
  BannerAndHeading,
  Container,
  ProductsSection,
  EmptyMessage,
  SectionHeading,
} from "./ProductsStyled";
import { Loader } from "../../components/Loader/Loader";

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
  const { reachBottom } = useElementScroll(productSectionRef);

  const emptyMessage = "There are no products available.";

  useEffect(() => {
    dispatch(fetchProductsThunk({ isForward: true, page: pageSize }));
  }, [dispatch]);

  useEffect(() => {
    if (reachBottom) {
      dispatch(fetchProductsThunk({ isForward: true, page: pageSize }));
    }
  }, [reachBottom, dispatch]);

  return (
    <Container>
      <BannerAndHeading $imageURL={imageURL}>
        <SectionHeading>{productsHeading}</SectionHeading>
      </BannerAndHeading>
      <ProductFilters />
      {!products.length && isLoading ? (
        <Loader />
      ) : (
        <ProductsSection ref={productSectionRef}>
          {products.length ? (
            <div>
              <ProductsList products={products} />
            </div>
          ) : (
            <EmptyMessage>{emptyMessage}</EmptyMessage>
          )}
        </ProductsSection>
      )}
    </Container>
  );
}

export default Products;
