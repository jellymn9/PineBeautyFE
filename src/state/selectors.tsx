import type { RootState } from "../store";

export const productStatusSelector = (state: RootState) =>
  state.products.status;
