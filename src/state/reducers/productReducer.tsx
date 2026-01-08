import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/store";
import {
  ProductsApiResponseI,
  ProductsStateI,
  CategoryT,
} from "@/utils/types/productTypes";
import { getProducts } from "@/APIs/products";
import {
  cursorSelector,
  productsSelector,
} from "@/state/selectors/productSelector";

const initialState: ProductsStateI = {
  hasMore: true,
  cursor: null,
  status: "idle",
  list: [],
  currentRequestId: null, // used only for first page correctness
};

export const fetchProductsThunk = createAsyncThunk<
  ProductsApiResponseI,
  { productsPerPage: number; selectedCategories?: CategoryT[] },
  { state: RootState }
>(
  "products/fetchProducts",
  async ({ productsPerPage, selectedCategories }, { getState }) => {
    const state = getState();

    const response = await getProducts(
      cursorSelector(state),
      productsPerPage,
      selectedCategories
    );

    return {
      list: response.list,
      hasMore: response.hasMore,
      cursor: response.cursor,
    };
  }
);

export const fetchMoreProductsThunk = createAsyncThunk<
  ProductsApiResponseI,
  { productsPerPage: number; selectedCategories?: CategoryT[] },
  { state: RootState }
>(
  "products/fetchMoreProducts",
  async ({ productsPerPage, selectedCategories }, { getState }) => {
    const state = getState();

    const response = await getProducts(
      cursorSelector(state),
      productsPerPage,
      selectedCategories
    );

    return {
      list: response.list,
      hasMore: response.hasMore,
      cursor: response.cursor,
    };
  },
  {
    condition: (_, { getState }) => {
      const { status } = productsSelector(getState());

      if (status === "pending") return false;

      // if (!hasMore) return false;

      // if (cursor === null) return false;

      return true;
    },
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    resetQuery: (state) => {
      state.cursor = null;
      state.list = [];
      state.hasMore = true;
      state.status = "idle";
      state.currentRequestId = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsThunk.pending, (state, action) => {
        state.status = "pending";
        state.currentRequestId = action.meta.requestId;
      })
      .addCase(fetchProductsThunk.fulfilled, (state, action) => {
        if (state.currentRequestId !== action.meta.requestId) return;

        state.status = "succeeded";
        state.currentRequestId = null;

        state.list = action.payload.list;
        state.cursor = action.payload.cursor;
        state.hasMore = action.payload.hasMore;
      })
      .addCase(fetchProductsThunk.rejected, (state, action) => {
        if (state.currentRequestId !== action.meta.requestId) return;

        state.status = "failed";
        state.currentRequestId = null;
      })

      .addCase(fetchMoreProductsThunk.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchMoreProductsThunk.fulfilled, (state, action) => {
        state.status = "succeeded";

        state.list.push(...action.payload.list);
        state.cursor = action.payload.cursor;
        state.hasMore = action.payload.hasMore;
      })
      .addCase(fetchMoreProductsThunk.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { resetQuery } = productSlice.actions;
export default productSlice.reducer;
