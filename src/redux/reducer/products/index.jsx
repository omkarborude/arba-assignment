import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {FETCH_PRODUCTS} from "../../../Constant/index"
const initialState = {
    products: [],
    status: null,
    cart:[]

  };

  const url = "https://fakestoreapi.com/products"

  export const getProductsData = createAsyncThunk(
    FETCH_PRODUCTS,
    async () => {
      try {
        const response = await fetch(url,{
          method: 'GET'
        });
        if (response.status == 200) {
          return response.json();
        }
      } catch (error) {
        return Promise.reject(error);
      }
    }
  );

  export const products = createSlice({
      name: "products",
      initialState,
      extraReducers: {
          [getProductsData.fulfilled]: (state, action) => {
              state.status = "succeeded";
              state.products = action.payload?.data ? action.payload?.data : action.payload;
          },
          [getProductsData.rejected]: (state) => {
              state.status = "failed";
          },
          [getProductsData.pending]: (state) => {
              state.status = "loading";
          },
      },
      reducers: {
        addToCart(state, { payload }) {
          const { id } = payload;
    
          const find = state.cart.find((item) => item.id === id);
    
          if (find) {
            return state.cart.map((item) =>
              item.id === id
                ? {
                    ...item,
                    quantity: item.quantity + 1
                  }
                : item
            );
          } else {
            state.cart.push({
              ...payload,
              quantity: 1
            });
          }
        },
        increament(state, { payload }) {
          return state.cart.map((item) =>
            item.id === payload
              ? {
                  ...item,
                  quantity: item.quantity + 1
                }
              : item
          );
        },
        decrement(state, { payload }) {
          return state.cart.map((item) =>
            item.id === payload
              ? {
                  ...item,
                  quantity: item.quantity - 1
                }
              : item
          );
        },
        clear(state) {
          return [];
        }
      } });

export const { addToCart, increament, decrement } = products.actions;

export default products.reducer;
