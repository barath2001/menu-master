import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FoodItem } from "../data/type";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  totalAmount: number;
};

export type CartState = {
  cartItems: CartItem[];
  totalQuantity: number;
  totalPrice: number;
};

const initialState: CartState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<FoodItem>) {
      console.log("add");

      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalAmount += existingItem.price;
      } else {
        state.cartItems.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalAmount: newItem.price,
        });
      }

      state.totalQuantity++;
      state.totalPrice += newItem.price;
    },
    removeItemFromCart(state, action: PayloadAction<string>) {
      console.log("remove");
      const itemId = action.payload;

      const existingItem = state.cartItems.find((item) => item.id === itemId);

      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== itemId
          );
        } else {
          existingItem.quantity--;
        }

        state.totalQuantity--;
        state.totalPrice -= existingItem.price;
      }
    },
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;
