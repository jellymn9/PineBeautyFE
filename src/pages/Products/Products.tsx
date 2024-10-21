import { useEffect, useRef } from "react";

import { useAppSelector, useAppDispatch } from "../../withTypes";
import { fetchProductsThunk } from "../../state/reducers/productReducer";
import { productsSelector } from "../../state/selectors";
import { useElementHeight, useScrollLocation } from "../../helpers/customHooks";
import { footerHeight } from "../../utils/constants";
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

  //const [bla, setBla] = useState(false);

  const { products, status } = useAppSelector(productsSelector);

  const triggerDataFetch = useScrollLocation(footerHeight);

  const isBottomReached = useElementHeight(productSectionRef);

  useEffect(() => {
    dispatch(fetchProductsThunk());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isBottomReached) {
      dispatch(fetchProductsThunk());
    }
  }, [isBottomReached, dispatch]);

  // const handleScroll = () => {
  //   console.log(1);
  //   if (productSectionRef.current !== null) {
  //     const elementScrollableHeight =
  //       productSectionRef.current.scrollHeight - 236;
  //     const elementScrolledFromTop = productSectionRef.current.scrollTop;
  //     console.log(
  //       "tf ",
  //       elementScrollableHeight - elementScrolledFromTop <= 70
  //     );
  //     if (elementScrollableHeight - elementScrolledFromTop <= 70 && !bla) {
  //       console.log(2);
  //       dispatch(fetchProductsThunk());
  //       setBla(true);
  //     } else {
  //       setBla(false);
  //     }
  //   }
  // };

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
      {triggerDataFetch ? (
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
