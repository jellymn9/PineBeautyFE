import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import {
  ProductsApiResponseI,
  ProductsStateI,
  ProductI,
} from "../../utils/types/productTypes";
import { getProducts } from "../../APIs/products";

import { cursorSelector } from "../selectors/productSelector";

const initialState: ProductsStateI = {
  hasMore: true,
  cursor: null,
  status: "idle",
  list: [],
};

export const fetchProductsThunk = createAsyncThunk<
  ProductsApiResponseI,
  { productsPerPage: number },
  { state: RootState }
>(
  "products/fetchProducts",
  async ({ productsPerPage }, { getState }) => {
    const state = getState();

    const response = await getProducts(cursorSelector(state), productsPerPage);
    return {
      list: response.list,
      hasMore: response.hasMore,
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
        if (!action.payload.cursor && state.list.length === 0) {
          state.list = action.payload.list;
        } else {
          const newList: Array<ProductI> = [
            ...state.list,
            ...action.payload.list,
          ];
          state.list = newList;
        }
        state.cursor = action.payload.cursor;
        state.hasMore = action.payload.hasMore;
      })
      .addCase(fetchProductsThunk.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default productSlice.reducer;
