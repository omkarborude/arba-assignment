import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {FETCH_PRODUCTS} from "../../../Constant/index"
const initialState = {
    user: {},
    status: "",
  };

  const url = 'https://dummyjson.com/auth/login'

  export const loginUser = createAsyncThunk(
    FETCH_PRODUCTS,
    async (data:{username:string,password:string}) => {
      const {username, password} = data;
     
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            
            username:username,
            password: password
            // expiresInMins: 60, // optional
          })
        })
        if (response.status == 200) {
          return response.json();;
        }
      } catch (error) {
        return Promise.reject(error);
      }
    }
  );

  export const auth = createSlice({
      name: "auth",
      initialState,
      extraReducers: {
          [loginUser.fulfilled.toString()]: (state, action) => {
              state.status = "succeeded";
              state.user = action.payload;
          },
          [loginUser.rejected.toString()]: (state) => {
              state.status = "failed";
          },
          [loginUser.pending.toString()]: (state) => {
              state.status = "loading";
          },
      },
      reducers: {}
  });

  export default auth.reducer;
