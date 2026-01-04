import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";

export type CategoryT = "HAIR" | "BODY" | "FACE"; //"OIL" | "FLORAL_WATER" | "SOAP" | "CREAM";

export interface ProductI extends DocumentData {
  id: string;
  name: string;
  price: number;
  currency: "USD" | "EUR" | "JPY" | "RSD";
  image: string;
  category: CategoryT;
  productTypeName:
    | "SCRUBS_AND_MASKS"
    | "NATURAL_DEODORANTS"
    | "HAIR_OILD_AND_SERUMS"
    | "SOLID_SHAMPOOS_AND_HAIR_SOAPS"
    | "EAU_DE_TOILETE";
  // Tags should be an array of strings
  tags: string[];
}

export interface ProductsStateI {
  //products: ProductsStateI;
  list: Array<ProductI>;
  hasMore: boolean;
  cursor: QueryDocumentSnapshot | null;
  status: "idle" | "pending" | "succeeded" | "failed";
}

export interface ProductsApiResponseI {
  list: Array<ProductI>;
  cursor: QueryDocumentSnapshot | null;
  hasMore: boolean;
}

export type GetProductT = (id?: string) => Promise<ProductI | null>;

export type GetProductsBatchT = (ids: Array<string>) => Promise<ProductI[]>;
