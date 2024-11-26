import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { CartItemT } from "../../utils/types";

export interface InitialStateI {
  list: Array<CartItemT>;
}

const initialState: InitialStateI = {
  list: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CartItemT>) => {
      return {
        ...state,
        list: [
          ...state.list,
          { id: action.payload.id, quantity: action.payload.quantity },
        ],
      };
    },
    increase: (state, action: PayloadAction<CartItemT>) => {
      const newList = state.list.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            quantity: product.quantity + action.payload.quantity,
          };
        }
        return product;
      });
      return { ...state, list: newList };
    },
    setValue: (state, action: PayloadAction<CartItemT>) => {
      const newList = state.list.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            quantity: action.payload.quantity,
          };
        }
        return product;
      });
      return { ...state, list: newList };
    },
    remove: (state, action: PayloadAction<CartItemT>) => {
      const newList = state.list.filter(
        (product) => product.id !== action.payload.id
      );
      return { ...state, list: newList };
    },
  },
});

export default cartSlice.reducer;
