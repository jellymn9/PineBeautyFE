export type IconNamesT =
  | "clock"
  | "email"
  | "phone"
  | "instagram"
  | "facebook"
  | "pinterest"
  | "cart"
  | "user"
  | "logo"
  | "search";

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

export type RawProductT = {
  id: string;
  name: string;
  price: string;
  image: string;
  categoryName: ProductCategoriesT;
  productTypeName: ProductTypesT;
};

export type ProductCategoriesMappedT = {
  [k in ProductTypesT]: { name: string; link: string }; //check out in operator for this case!
};

export interface FetchProductsParamsI {
  isForward: boolean;
  page: number;
  skip: [number, number];
  cursor?: string;
}

export interface FetchProductsData {
  products: Array<RawProductT>;
  skip: [number, number];
  cursor?: string;
}

export interface FetchProductsThunkResI
  extends Omit<FetchProductsData, "products"> {
  list: FetchProductsData["products"];
}

export type FetchProductsT = {
  (p: FetchProductsParamsI): Promise<FetchProductsData>;
};
