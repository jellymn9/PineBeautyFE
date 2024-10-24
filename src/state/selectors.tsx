import type { RootState } from "../store";

export const productsSelector = (state: RootState) => state.products;
export const metaDataSelector = (state: RootState) => ({
  cursor: state.products.products.cursor,
  skip: state.products.products.skip,
});
