import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//import type { PayloadAction } from "@reduxjs/toolkit";

import { fetchProducts } from "../../APIs/products";
import { mapProducts } from "../../helpers/dataMapper";
import { RawProductT } from "../../utils/types";
import { productStatusSelector } from "../selectors";
import { RootState } from "../../store";

export interface initialStateI {
  list: Array<RawProductT>;
  status: "idle" | "pending" | "succeeded" | "failed";
}
const initialState: initialStateI = {
  list: [],
  status: "idle",
};

export const fetchProductsThunk = createAsyncThunk<
  Array<RawProductT>,
  void,
  { state: RootState }
>(
  "products/fetchProducts",
  async () => {
    console.log("bla bla bla");
    const response = await fetchProducts();
    // The value we return becomes the `fulfilled` action payload
    return mapProducts(response.data);
  },
  {
    condition(arg, thunkApi) {
      const postsStatus = productStatusSelector(thunkApi.getState());
      if (postsStatus !== "idle") {
        return false;
      }
    },
  }
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
        state.list = action.payload;
      })
      .addCase(fetchProductsThunk.rejected, (state) => {
        state.status = "failed";
      });
  },
});

//export const { getProducts } = productSlice.actions;
export default productSlice.reducer;
