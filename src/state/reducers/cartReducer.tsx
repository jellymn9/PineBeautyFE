import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
//import type { PayloadAction } from "@reduxjs/toolkit";

import { CartItemI } from "@/utils/types/cartTypes";

export const cartAdapter = createEntityAdapter<CartItemI>();

const initialState = cartAdapter.getInitialState({}); // { ids: [], entities: {} }

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: cartAdapter.addOne,
    upsert: cartAdapter.upsertOne,
    update: cartAdapter.updateOne,
    remove: cartAdapter.removeOne,
  },
});

export const { add, remove, upsert, update } = cartSlice.actions;

export default cartSlice.reducer;
