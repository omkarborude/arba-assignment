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
          localStorage.setItem("authToken", JSON.stringify({ login: "True" }));
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
      reducers: {}
  });

  export default auth.reducer;
