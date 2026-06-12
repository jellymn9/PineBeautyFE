import type { CategoryT } from "@/utils/types/productTypes";

export const productsKeys = {
  all: ["products"] as const,
  lists: () => [...productsKeys.all, "list"] as const,
  list: (categories: CategoryT[], productsPerPage: number) =>
    [
      ...productsKeys.lists(),
      {
        categories: [...categories].sort(),
        productsPerPage,
      },
    ] as const,
};
