import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { fetchProducts } from "../../APIs/products";

export interface initialStateI {
  products: Array<string>;
  status: "idle" | "pending" | "succeeded" | "failed";
}
const initialState: initialStateI = {
  products: [],
  status: "idle",
};

export const fetchProductsThunk = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    console.log("bla bla bla");
    const response = await fetchProducts();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getProducts: (state, action: PayloadAction<number>) => {
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsThunk.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchProductsThunk.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })
      .addCase(fetchProductsThunk.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { getProducts } = productSlice.actions;
export default productSlice.reducer;
