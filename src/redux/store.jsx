import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducer/products/index";
import authReducer from "./reducer/Auth/index.tsx";
import cartReducer from "./reducer/cart/index";

export const store = configureStore({
    reducer: {
        products: productsReducer,
        auth:authReducer,
        cart:cartReducer
    }
})