import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {FETCH_USER} from "../../../Constant/index"
const initialState = {
  };

  const url = 'https://dummyjson.com/auth/login'

  export const loginUser = createAsyncThunk(
    FETCH_USER,
    async (data:{username:string,password:string}) => {
      const {username, password} = data;
     
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username:username,
            password: password
          })
        })
        if (response.status == 200) {
          localStorage.setItem("authToken", JSON.stringify({ login: "True" }));
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
