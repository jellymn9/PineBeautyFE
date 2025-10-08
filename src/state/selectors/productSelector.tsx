import type { RootState } from "../../store";

export const productsSelector = (state: RootState) => state.products;
export const isPendingSelector = (state: RootState) =>
  state.products.status === "pending";
export const listProductsSelector = (state: RootState) => state.products.list;
export const cursorSelector = (state: RootState) => state.products.cursor;
// export const metaDataSelector = (state: RootState) => ({
//   cursor: state.products.cursor,
//   // skip: state.products.products.skip,
// });
export const hasMoreSelector = (state: RootState) => state.products.hasMore;
