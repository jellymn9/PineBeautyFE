import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//import type { PayloadAction } from "@reduxjs/toolkit";

import { getProducts } from "../../APIs/products";
import { FetchProductsThunkResI, RawProductT } from "../../utils/types";
import { metaDataSelector } from "../selectors/productSelector";
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
  FetchProductsThunkResI,
  { isForward: boolean; page?: number },
  { state: RootState }
>(
  "products/fetchProducts",
  async ({ isForward = true, page = 6 }, { getState }) => {
    const state = getState();
    const cursor = state.products.products.cursor;

    console.log("bla bla bla");

    const response = await getProducts({
      isForward: isForward,
      page: page,
      skip: metaDataSelector(state).skip,
      cursor: cursor, //metaDataSelector(state).cursor,
    });
    return {
      list: response.products,
      skip: response.skip,
      cursor: response.cursor,
    };
  }
  // {
  //   condition(arg, thunkApi) {
  //     const { status } = productsSelector(thunkApi.getState());
  //     if (status !== "pending") {
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
        // Check out immer docs.
        if (action.payload.list.length) {
          const newList: Array<RawProductT> = [
            ...state.products.list,
            ...action.payload.list,
          ];
          state.products.list = newList;
        }
        state.products.skip = action.payload.skip;
        state.products.cursor = action.payload.cursor;
      })
      .addCase(fetchProductsThunk.rejected, (state) => {
        state.status = "failed";
      });
  },
});

//export const { getProducts } = productSlice.actions;
export default productSlice.reducer;
