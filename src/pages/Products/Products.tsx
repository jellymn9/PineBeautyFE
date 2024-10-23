import { useEffect, useRef } from "react";

import { useAppSelector, useAppDispatch } from "../../withTypes";
import { fetchProductsThunk } from "../../state/reducers/productReducer";
import { productsSelector } from "../../state/selectors";
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

function Products() {
  const dispatch = useAppDispatch();
  const productSectionRef = useRef<HTMLElement>(null);

  const { products, status } = useAppSelector(productsSelector);

  const { reachBottom, reachTop } = useElementScroll(productSectionRef);

  useEffect(() => {
    dispatch(fetchProductsThunk({ isForward: true, page: 8 }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (reachBottom) {
      dispatch(fetchProductsThunk({ isForward: true, page: 8 }));
    }
    if (reachTop) {
      dispatch(fetchProductsThunk({ isForward: false, page: 8 }));
    }
  }, [reachBottom, reachTop, dispatch]);

  return (
    <Container>
      <ProductFilters />
      <ProductsSection ref={productSectionRef}>
        {products.list.length ? (
          <>
            <SectionHeading>{productsHeading}</SectionHeading>
            <SectionDescription>{productsDescription}</SectionDescription>
            <div>
              <ProductsList products={products.list} />
            </div>
          </>
        ) : (
          <SectionDescription>
            There are no products available.
          </SectionDescription>
        )}
      </ProductsSection>
      {reachBottom ? (
        <div>SCROLLED TO THE FOOTER</div>
      ) : (
        <div>NOT THERE YET </div>
      )}
      {status === "failed" ? (
        <div>Fetch products failed!</div>
      ) : (
        <div>Fetch data succeeded!</div>
      )}
    </Container>
  );
}

export default Products;
