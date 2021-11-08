import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export interface IAuthState {
    isLoggedIn: boolean | null
  }
  
  const initialState: IAuthState = {
    isLoggedIn: null
  };

export const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      setLoginState: (state, action: PayloadAction<boolean | null>) => {
        state.isLoggedIn = action.payload;
      },
    },
});

export const { setLoginState } = slice.actions

export const selectAuth = (state: RootState) => state.auth.isLoggedIn

export default slice.reducer
