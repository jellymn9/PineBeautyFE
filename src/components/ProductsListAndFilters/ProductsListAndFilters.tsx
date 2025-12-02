import { useElementScroll } from "@/helpers/customHooks";
import {
  hasMoreSelector,
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

const ProductsListAndFilters = () => {
  const dispatch = useAppDispatch();
  const productSectionRef = useRef<HTMLElement>(null);

  const products = useAppSelector(listProductsSelector);
  const isLoading = useAppSelector(isPendingSelector);
  const hasMore = useAppSelector(hasMoreSelector);
  const { reachBottom } = useElementScroll(productSectionRef);

  const emptyMessage = "There are no products available.";

  useEffect(() => {
    dispatch(fetchProductsThunk({ productsPerPage: PAGE_SIZE }));
  }, [dispatch]);

  useEffect(() => {
    //console.log("has more", hasMore, "reach Bottom:", reachBottom);
    if (reachBottom && hasMore) {
      dispatch(fetchProductsThunk({ productsPerPage: PAGE_SIZE }));
    }
  }, [reachBottom, dispatch, hasMore]);

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
              <EmptyMessage>{emptyMessage}</EmptyMessage>
            )}
          </ProductsSection>
        </ProductsAndCategories>
      )}
    </>
  );
};

export default ProductsListAndFilters;
