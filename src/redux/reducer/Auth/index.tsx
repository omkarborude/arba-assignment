import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {FETCH_USER} from "../../../Constant/index"
const initialState = {
  user:{},
  status:""
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
            username: username,
            password: password
          })
        })
        if (response.status == 200) {
          localStorage.setItem("authToken", JSON.stringify({ login: "True" }));
          return response.json();
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
        [loginUser.fulfilled as any]: (state, action) => {
            state.user = action.payload
        },
        [loginUser.rejected as any]: (state) => {
            state.status = "failed";
        },
        [loginUser.pending as any]: (state) => {
            state.status = "loading";
        },
    },
      reducers: {}
  });

  export default auth.reducer;
