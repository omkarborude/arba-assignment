import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {FETCH_PRODUCTS} from "../../../Constant/index"
const initialState = {
    products: [],
    status: null,
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
      reducers: undefined
  });

  export default products.reducer;
