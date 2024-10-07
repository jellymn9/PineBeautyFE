import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import productReducer from "./state/reducers/productReducer";

export const rootReducer = {
  products: productReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});

export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
//export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
// Define a reusable type describing thunk functions
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
