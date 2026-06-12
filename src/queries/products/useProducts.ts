import { useInfiniteQuery } from "@tanstack/react-query";

import { getProducts } from "@/APIs/products";
import { productsKeys } from "./productsKeys";

import type { CategoryT } from "@/utils/types/productTypes";

const DEFAULT_PRODUCTS_PER_PAGE = 20;

export function useProducts(
  categories: CategoryT[] = [],
  productsPerPage = DEFAULT_PRODUCTS_PER_PAGE,
) {
  return useInfiniteQuery({
    queryKey: productsKeys.list(categories, productsPerPage),
    queryFn: ({ pageParam }) =>
      getProducts(pageParam, productsPerPage, categories),
    initialPageParam: null as { name: string; id: string } | null,
    getNextPageParam: (lastPage) =>
      lastPage.hasMore ? lastPage.cursor : undefined,
    staleTime: 1000 * 60 * 5,
  });
}
