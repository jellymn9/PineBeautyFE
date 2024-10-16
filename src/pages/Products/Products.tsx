import { useAppSelector, useAppDispatch } from "../../withTypes";

import ProductsList from "../../components/ProductsList/ProductsList";
import { fetchProductsThunk } from "../../state/reducers/productReducer";
import { productsSelector } from "../../state/selectors";
import {
  Container,
  ProductsSection,
  SectionDescription,
  SectionHeading,
} from "./ProductsStyled";
import ProductFilters from "../../components/ProductFilters/ProductFilters";

function Products() {
  const dispatch = useAppDispatch();
  const { products, status } = useAppSelector(productsSelector);

  // useEffect(() => {}, products);

  // const handleProducts = () => {
  //   dispatch(fetchProductsThunk());
  // };
  console.log("products from component: ", products.list);

  const productsHeading = "All products";
  const productsDescription =
    "Searching for a sustainable alternative to liquid shampoo? We ‘ve got you covered! Our solid shampoos and hair soaps are fully biodegradable, 100% natural, and they come with an eco-friendly packaging. We offer a wide range of shampoo bars and hair soaps for all hair types and special needs. Find the right one for you and keep your hair strands healthy and shiny!";

  return (
    <Container>
      <ProductFilters />
      <ProductsSection>
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
      <button onClick={() => dispatch(fetchProductsThunk())}>click me!</button>
      {status === "failed" ? (
        <div>Fetch products failed!</div>
      ) : (
        <div>Fetch data succeeded!</div>
      )}
    </Container>
  );
}

export default Products;
