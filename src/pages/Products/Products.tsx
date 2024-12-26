import { useEffect, useRef } from "react";

import { useAppSelector, useAppDispatch } from "../../withTypes";
import { fetchProductsThunk } from "../../state/reducers/productReducer";
import {
  productsSelector,
  listProductsSelector,
} from "../../state/selectors/productSelector";
import { useElementScroll } from "../../helpers/customHooks";
import ProductFilters from "../../components/ProductFilters/ProductFilters";
import ProductsList from "../../components/ProductsList/ProductsList";
import {
  Container,
  ProductsSection,
  SectionDescription,
  SectionHeading,
} from "./ProductsStyled";

const productsHeading = "All products";
const productsDescription =
  "Searching for a sustainable alternative to liquid shampoo? We ‘ve got you covered! Our solid shampoos and hair soaps are fully biodegradable, 100% natural, and they come with an eco-friendly packaging. We offer a wide range of shampoo bars and hair soaps for all hair types and special needs. Find the right one for you and keep your hair strands healthy and shiny!";
const pageSize = 6;

function Products() {
  const dispatch = useAppDispatch();
  const productSectionRef = useRef<HTMLElement>(null);

  const { status } = useAppSelector(productsSelector);
  const list = useAppSelector(listProductsSelector);
  const products = list.flat(); // this can be moved to selector but should be momoized!
  const { reachBottom, reachTop } = useElementScroll(productSectionRef);

  console.log("test p: ", products);

  useEffect(() => {
    dispatch(fetchProductsThunk({ isForward: true, page: pageSize }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (reachBottom) {
      dispatch(fetchProductsThunk({ isForward: true, page: pageSize }));
    }
    if (reachTop) {
      dispatch(fetchProductsThunk({ isForward: false, page: pageSize }));
    }
  }, [reachBottom, reachTop, dispatch]);

  return (
    <Container>
      <ProductFilters />
      <ProductsSection ref={productSectionRef}>
        {products.length ? (
          <>
            <SectionHeading>{productsHeading}</SectionHeading>
            <SectionDescription>{productsDescription}</SectionDescription>
            <div>
              <ProductsList products={products} />
            </div>
          </>
        ) : (
          <SectionDescription>
            There are no products available.
          </SectionDescription>
        )}
      </ProductsSection>
      {status === "failed" ? (
        <div>Fetch products failed!</div>
      ) : (
        <div>Fetch data succeeded!</div>
      )}
    </Container>
  );
}

export default Products;
