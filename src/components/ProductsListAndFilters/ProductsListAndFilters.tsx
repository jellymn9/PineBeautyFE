import { useEffect, useMemo, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { useElementScroll } from "@/helpers/customHooks";
import {
  hasMoreSelector,
  isErrorSelector,
  isPendingSelector,
  listProductsSelector,
} from "@/state/selectors/productSelector";
import {
  fetchProductsThunk,
  resetQuery,
} from "@/state/reducers/productReducer";
import { useAppDispatch, useAppSelector } from "@/withTypes";
import { Loader } from "@/components/Loader/Loader";
import ProductFilters from "@/components/ProductFilters/ProductFilters";
import ProductsList from "@/components/ProductsList/ProductsList";
import {
  Message,
  ProductsAndCategories,
  ProductsSection,
} from "./ProductsListAndFiltersStyled";
import { CategoryT } from "@/utils/types/productTypes";

const PAGE_SIZE = 6;
const EMPTY_MESSAGE = "There are no products available.";
const ERROR_MESSAGE = "Sorry, an error occurred while loading products.";

const ProductsListAndFilters = () => {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const productSectionRef = useRef<HTMLElement>(null);

  const products = useAppSelector(listProductsSelector);
  const isLoading = useAppSelector(isPendingSelector);
  const isError = useAppSelector(isErrorSelector);
  const hasMore = useAppSelector(hasMoreSelector);
  const { reachBottom } = useElementScroll(productSectionRef);

  const categories = useMemo(
    () => searchParams.getAll("category") as CategoryT[],
    [searchParams]
  );

  useEffect(() => {
    dispatch(resetQuery());
    dispatch(
      fetchProductsThunk({
        productsPerPage: PAGE_SIZE,
        selectedCategories: categories,
      })
    );
  }, [dispatch, categories]);

  useEffect(() => {
    //console.log("has more", hasMore, "reach Bottom:", reachBottom);
    if (reachBottom && hasMore) {
      dispatch(
        fetchProductsThunk({
          productsPerPage: PAGE_SIZE,
          selectedCategories: categories,
        })
      );
    }
  }, [reachBottom, dispatch, hasMore, categories]);

  if (isError) {
    return <Message>{ERROR_MESSAGE}</Message>;
  }

  return (
    <ProductsAndCategories>
      <ProductFilters
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      {!products.length && isLoading ? (
        <Loader />
      ) : (
        <ProductsSection ref={productSectionRef}>
          {products.length ? (
            <ProductsList products={products} />
          ) : (
            <Message>{EMPTY_MESSAGE}</Message>
          )}
        </ProductsSection>
      )}
    </ProductsAndCategories>
  );
};

export default ProductsListAndFilters;
