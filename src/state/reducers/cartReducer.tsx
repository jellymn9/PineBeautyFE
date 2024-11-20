import { createSlice } from "@reduxjs/toolkit";
import { CartItemT } from "../../utils/types";

export interface InitialStateI {
  list: Array<CartItemT>;
  //status: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: InitialStateI = {
  list: [],
  //status: "idle",
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
