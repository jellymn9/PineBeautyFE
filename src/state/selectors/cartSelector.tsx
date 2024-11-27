import type { RootState } from "../../store";
import { cartAdapter } from "../reducers/cartReducer";

//export const productSelector = (state: RootState) => state.cart.list; //add filtering with memoazing

export const {
  selectAll: selectAllItems,
  selectById: selectItemById,
  selectIds: selectItemIds,
  // Pass in a selector that returns the posts slice of state
} = cartAdapter.getSelectors((state: RootState) => state.cart);
