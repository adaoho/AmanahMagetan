import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cart/cartSlice";
import productSlice from "./features/product/productSlice";
import userSlice from "./features/user/userSlice";

export default configureStore({
  reducer: {
    cart: cartSlice,
    // product: productSlice,
    user: userSlice,
  },
});

export const endPoint = "http://localhost:3000/";
