import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { CartState } from "./cart-slice";

export type RootState = {
  cart: CartState;
};

const store = configureStore({
  reducer: { cart: cartReducer },
});

export default store;
