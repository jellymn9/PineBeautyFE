export type CategoryT = "HAIR" | "BODY" | "FACE";

export interface ProductI {
  id: string;
  name: string;
  price: number;
  currency: "USD" | "EUR" | "JPY" | "RSD";
  image: string;
  images: Array<string>;
  category: CategoryT;
  isBestSeller: boolean;
  tags: string[];
}

export interface ProductsStateI {
  //products: ProductsStateI;
  list: Array<ProductI>;
  hasMore: boolean;
  cursor: { name: string; id: string } | null;
  status: "idle" | "pending" | "succeeded" | "failed";
  currentRequestId: string | null;
  //loadMoreRequestId: string | null;
}

export interface ProductsApiResponseI {
  list: Array<ProductI>;
  cursor: { name: string; id: string } | null;
  hasMore: boolean;
}

export type GetProductT = (id?: string) => Promise<ProductI | null>;

export type GetProductsBatchT = (ids: Array<string>) => Promise<ProductI[]>;
