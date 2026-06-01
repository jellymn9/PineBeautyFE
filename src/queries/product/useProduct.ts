import { useQuery } from "@tanstack/react-query";

import { ProductI } from "@/utils/types/productTypes";
import { getSingleProduct } from "@/APIs/products";
import { productKeys } from "./productKeys";

export function useProduct(id?: string) {
  return useQuery<ProductI>({
    queryKey: productKeys.detail(id ?? ""),
    queryFn: () => getSingleProduct(id!),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
}
