import { useEffect, useMemo, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { useElementScroll } from "@/helpers/customHooks";
import { Loader } from "@/components/UI/Loader/Loader";
import ProductFilters from "@/components/ProductFilters/ProductFilters";
import ProductsList from "@/components/ProductsList/ProductsList";
import {
  Message,
  ProductsAndCategories,
  ProductsSection,
} from "./ProductsListAndFiltersStyled";
import { CategoryT } from "@/utils/types/productTypes";
import { useProducts } from "@/queries/products/useProducts";

const PAGE_SIZE = 6;
const EMPTY_MESSAGE = "There are no products available.";
const ERROR_MESSAGE = "Sorry, an error occurred while loading products.";

const ProductsListAndFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const productSectionRef = useRef<HTMLElement>(null);
  const hasTriggeredAtBottom = useRef(false);

  const { reachBottom } = useElementScroll(productSectionRef);

  const categories = useMemo(
    () => searchParams.getAll("category") as CategoryT[],
    [searchParams],
  );

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
    isFetchingNextPage,
  } = useProducts(categories, PAGE_SIZE);

  const products = data?.pages.flatMap((page) => page.list) ?? [];

  useEffect(() => {
    if (!reachBottom) {
      hasTriggeredAtBottom.current = false;
      return;
    }

    if (
      hasNextPage &&
      !isFetchingNextPage &&
      !hasTriggeredAtBottom.current
    ) {
      hasTriggeredAtBottom.current = true;
      fetchNextPage();
    }
  }, [reachBottom, hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isError) {
    return <Message>{ERROR_MESSAGE}</Message>;
  }

  return (
    <ProductsAndCategories>
      <ProductFilters
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      <ProductsSection ref={productSectionRef}>
        {!products.length && isLoading ? (
          <Loader />
        ) : products.length ? (
          <ProductsList products={products} />
        ) : (
          <Message>{EMPTY_MESSAGE}</Message>
        )}
        {isFetchingNextPage && <Loader />}
      </ProductsSection>
    </ProductsAndCategories>
  );
};

export default ProductsListAndFilters;
