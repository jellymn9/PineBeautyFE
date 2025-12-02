import { useElementScroll } from "@/helpers/customHooks";
import {
  hasMoreSelector,
  isErrorSelector,
  isPendingSelector,
  listProductsSelector,
} from "@/state/selectors/productSelector";
import { useAppDispatch, useAppSelector } from "@/withTypes";
import { useEffect, useRef } from "react";
import { Loader } from "../Loader/Loader";
import {
  EmptyMessage,
  ProductsAndCategories,
  ProductsSection,
} from "./ProductsListAndFiltersStyled";
import ProductFilters from "../ProductFilters/ProductFilters";
import ProductsList from "../ProductsList/ProductsList";
import { fetchProductsThunk } from "@/state/reducers/productReducer";

const PAGE_SIZE = 6;
const EMPTY_MESSAGE = "There are no products available.";

const ProductsListAndFilters = () => {
  const dispatch = useAppDispatch();
  const productSectionRef = useRef<HTMLElement>(null);

  const products = useAppSelector(listProductsSelector);
  const isLoading = useAppSelector(isPendingSelector);
  const isError = useAppSelector(isErrorSelector);
  const hasMore = useAppSelector(hasMoreSelector);
  const { reachBottom } = useElementScroll(productSectionRef);

  useEffect(() => {
    dispatch(fetchProductsThunk({ productsPerPage: PAGE_SIZE }));
  }, [dispatch]);

  useEffect(() => {
    //console.log("has more", hasMore, "reach Bottom:", reachBottom);
    if (reachBottom && hasMore) {
      dispatch(fetchProductsThunk({ productsPerPage: PAGE_SIZE }));
    }
  }, [reachBottom, dispatch, hasMore]);

  if (isError) {
    return <div>Sorry, an error occurred while loading products.</div>;
  }

  return (
    <>
      {!products.length && isLoading ? (
        <Loader />
      ) : (
        <ProductsAndCategories>
          <ProductFilters />
          <ProductsSection ref={productSectionRef}>
            {products.length ? (
              <ProductsList products={products} />
            ) : (
              <EmptyMessage>{EMPTY_MESSAGE}</EmptyMessage>
            )}
          </ProductsSection>
        </ProductsAndCategories>
      )}
    </>
  );
};

export default ProductsListAndFilters;
