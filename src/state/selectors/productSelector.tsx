import type { RootState } from "../../store";

export const productsSelector = (state: RootState) => state.products;
export const isPendingSelector = (state: RootState) =>
  state.products.status === "pending";
export const listProductsSelector = (state: RootState) =>
  state.products.products.list;
export const metaDataSelector = (state: RootState) => ({
  cursor: state.products.products.cursor,
  skip: state.products.products.skip,
});
