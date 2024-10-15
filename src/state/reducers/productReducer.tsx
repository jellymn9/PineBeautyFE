import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//import type { PayloadAction } from "@reduxjs/toolkit";

import { fetchProducts } from "../../APIs/products";
import { mapProducts } from "../../helpers/dataMapper";
import { RawProductT } from "../../utils/types";
// import { productsSelector } from "../selectors";
import { RootState } from "../../store";

interface ProductsStateI {
  list: Array<RawProductT>;
  skip: [number, number];
  cursor?: string;
}
export interface InitialProductsStateI {
  products: ProductsStateI;
  status: "idle" | "pending" | "succeeded" | "failed";
}
const initialState: InitialProductsStateI = {
  products: { list: [], skip: [0, 0], cursor: undefined },
  status: "idle",
};

export const fetchProductsThunk = createAsyncThunk<
  ProductsStateI,
  void,
  { state: RootState }
>(
  "products/fetchProducts",
  async () => {
    console.log("bla bla bla");
    const response = await fetchProducts();
    // The value we return becomes the `fulfilled` action payload
    return {
      list: mapProducts(response.data.products),
      skip: response.data.skip,
      cursor: response.data.cursor,
    };
  }
  // {
  //   condition(arg, thunkApi) {
  //     const { status } = productsSelector(thunkApi.getState());
  //     if (status !== "idle" && status !== "succeeded") {
  //       return false;
  //     }
  //   },
  // }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // getProducts: (state, action: PayloadAction<number>) => {
    //   return state;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsThunk.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchProductsThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProductsThunk.rejected, (state) => {
        state.status = "failed";
      });
  },
});

//export const { getProducts } = productSlice.actions;
export default productSlice.reducer;
