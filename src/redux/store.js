import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookSlice";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";
export const store = configureStore({
  reducer: {
    book: bookReducer,
    cart: cartReducer,
    user: userReducer,
  },
});
