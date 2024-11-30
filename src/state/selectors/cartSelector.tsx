// import { createSelector } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { cartAdapter } from "../reducers/cartReducer";

export const {
  selectAll: selectAllItems,
  selectById: selectItemById,
  selectIds: selectItemIds,
} = cartAdapter.getSelectors((state: RootState) => state.cart);

// INCLUDE createSelector LATER!!

export const totalItemsQuantity = createSelector([selectAllItems], (items) => {
  const quantity = items.reduce<number>((accumulator, currentValue) => {
    return accumulator + currentValue.quantity;
  }, 0);
  return quantity;
});
