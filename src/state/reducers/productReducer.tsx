import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//import type { PayloadAction } from "@reduxjs/toolkit";

import { fetchProducts } from "../../APIs/products";
import { FetchProductsThunkResI, RawProductT } from "../../utils/types";
import { metaDataSelector } from "../selectors";
import { RootState } from "../../store";

interface ProductsStateI {
  list: [Array<RawProductT>, Array<RawProductT>];
  skip: [number, number];
  cursor?: string;
}
export interface InitialProductsStateI {
  products: ProductsStateI;
  status: "idle" | "pending" | "succeeded" | "failed";
}
const initialState: InitialProductsStateI = {
  products: { list: [[], []], skip: [0, 0], cursor: undefined },
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
    const list = state.products.products.list.flat();

    console.log("bla bla bla");

    const newCursor = list.length
      ? isForward
        ? list[list.length - 1].id
        : list[0].id
      : undefined;

    const response = await fetchProducts({
      isForward: isForward,
      page: page,
      skip: metaDataSelector(state).skip,
      cursor: newCursor, //metaDataSelector(state).cursor,
    });
    // The value we return becomes the `fulfilled` action payload
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
        const isForward = action.meta.arg.isForward;
        if (action.payload.list.length) {
          if (isForward) {
            const newList: [Array<RawProductT>, Array<RawProductT>] = [
              state.products.list[1],
              action.payload.list,
            ];
            state.products.list = newList;
          } else {
            const newList: [Array<RawProductT>, Array<RawProductT>] = [
              action.payload.list,
              state.products.list[0],
            ];
            state.products.list = newList;
          }
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
