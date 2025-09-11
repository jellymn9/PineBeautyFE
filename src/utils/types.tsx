//import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";

export type IconNamesT = // turn to enum

    | "delete"
    | "clock"
    | "email"
    | "phone"
    | "instagram"
    | "facebook"
    | "pinterest"
    | "cart"
    | "user"
    | "logo"
    | "search"
    | "plus"
    | "minus";

export type ProductsTags =
  | "VEGAN_COSMETICS"
  | "ORGANIC_COSMETICS"
  | "HANDMADE_COSMETICS"
  | "SUMMER_ESSENTIALS"
  | "GIFTS";

export type ProductCategoriesT = "OIL" | "FLORAL_WATER" | "SOAP" | "CREAM";

export type ProductTypesT =
  | "SCRUBS_AND_MASKS"
  | "NATURAL_DEODORANTS"
  | "HAIR_OILD_AND_SERUMS"
  | "SOLID_SHAMPOOS_AND_HAIR_SOAPS"
  | "EAU_DE_TOILETE";

// export interface ProductI extends DocumentData {
//   id: string;
//   name: string;
//   price: number;
//   currency: "USD" | "EUR" | "JPY" | "RSD";
//   image: string;
//   category: "OIL" | "FLORAL_WATER" | "SOAP" | "CREAM";
//   productTypeName:
//     | "SCRUBS_AND_MASKS"
//     | "NATURAL_DEODORANTS"
//     | "HAIR_OILD_AND_SERUMS"
//     | "SOLID_SHAMPOOS_AND_HAIR_SOAPS"
//     | "EAU_DE_TOILETE";
//   // Tags should be an array of strings
//   tags: string[];
// }

export type RawProductT = {
  id: string;
  name: string;
  price: number;
  currency: string;
  image: string;
  categoryName: ProductCategoriesT;
  productTypeName: ProductTypesT;
};

export type ProductCategoriesMappedT = {
  [k in ProductTypesT]: { name: string; link: string };
};

// export interface FetchProductsParamsI {
//   //isForward: boolean;
//   cursor: ProductI | undefined;
//   page: number;
//   //skip: [number, number];
//   //cursor?: string;
// }

// export interface FetchProductsData {
//   products: Array<RawProductT>;
//   //skip: [number, number];
//   cursor?: string;
// }

// export interface FetchProductsThunkResI
//   extends Omit<FetchProductsData, "products"> {
//   list: FetchProductsData["products"];
// }

// export interface GetProductsResultI {
//   newProducts: ProductI[];
//   newLastVisible: QueryDocumentSnapshot | null;
//   possiblyMore: boolean;
// }

// export type GetProductsT = {
//   (p: FetchProductsParamsI): Promise<FetchProductsData>;
// };

// export type GetProductAxiosResT = AxiosResponse<
//   { product: RawProductT },
//   unknown
// >;
// export type GetProductT = {
//   (id?: string): Promise<GetProductAxiosResT>;
// };

export type CartProductT = Pick<RawProductT, "id" | "price" | "name" | "image">;

export type CartItemT = {
  //product: CartProductT;
  id: string;
  quantity: number;
};

export type CartDetailedProductT = Array<RawProductT & CartItemT>;

export type ColorThemeT = "dark" | "light";
