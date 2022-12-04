import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducer/products/index";
import authReducer from "./reducer/Auth/index";

export const store = configureStore({
    reducer: {
        products: productsReducer,
        auth:authReducer
    }
})